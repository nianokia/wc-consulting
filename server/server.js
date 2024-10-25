import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { DataTypes, Sequelize } from 'sequelize';
import { auth } from 'express-openid-connect';
import sgMail from '@sendgrid/mail';

// -------- DEFINE VARIABLES --------
const app = express();
const PORT = process.env.PORT || 3388;

// --- define the path to the index.html file in the build folder ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// -------- SEQUELIZE FUNCTIONS & CONFIGURATIONS --------

// --- connect sequelize to the database ---
const sequelize = new Sequelize(process.env.DATABASE_URL);

// --- verify that sequelize connected to the database ---
async function authenticateDBConnection() {
    try {
        await sequelize.authenticate()
        console.log("Connection successful");
    } catch (err) { 
        console.error("Detailed connection error:", { message: err.message, code: err.parent?.code, detail: err.parent?.detail }); throw err; 
    }
}
authenticateDBConnection();

// --- create a model that contains the same columns & constraints as the client_entries table ---
const Client_Entry = sequelize.define('client_entry', {
    client_entry_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, email: {
        type: DataTypes.STRING,
        allowNull: false,
    }, type: {
        type: DataTypes.STRING,
        allowNull: false,
    }, issue: {
        type: DataTypes.STRING,
        allowNull: false,
    }, age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, race: {
        type: DataTypes.STRING,
        allowNull: false,
    }, gender: {
        type: DataTypes.STRING,
        allowNull: false,
    }, comment: {
        type: DataTypes.STRING,
    },
}, {
    // --- this ensures that sequelize doesn't modify the table name specified or create a createdAt or updatedAt ---
    tableName: 'client_entries',
    createdAt: false,
    updatedAt: false,
});

// --- create a model that contains the same columns & constraints as the professional_entries table ---
const Professional_Entry = sequelize.define('professional_entry', {
    professional_entry_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }, email: {
        type: DataTypes.STRING,
        allowNull: false,
    }, comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // --- ensures that sequelize uses the tablename specified & doesn't add a createdAt or updatedAt ---
    tableName: 'professional_entries',
    createdAt: false,
    updatedAt: false,
})

// --- sync client & professional model & table together so they're gathering the same information with the same constraints and data types ---
Client_Entry.sync().then((data) => {
    console.log("Client model & table synced succesfully!");
}).catch((err) => {
    console.log("Error syncing client table & model: ", err);
});

Professional_Entry.sync().then((data) => {
    console.log("Professional model & table synced successfully!");
}).catch((err) => {
    console.error("Error syncing professional table & model :", err);
})


// -------- AUTH0 CONFIGURATION --------

// --- configure Auth0 router ---
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.DOMAIN,
    clientID: process.env.VITE_AUTH0_CLIENT_ID,
    issuerBaseURL: `https://${process.env.VITE_AUTH0_DOMAIN}`
};

// -------- TWILIO --------
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// -------- DEFINE APP USES --------
app.use(cors());
app.use(express.json());

// --- use auth router to attach /login, /logout, and /callback routes to the baseURL ---
app.use(auth(config));

// --- direct server to use the compiled build files from React ---
app.use(express.static(path.join(__dirname, '../client/dist')));


// -------- CRUD OPERATIONS --------

// --- retrieve all data from client_entries table ---
app.get("/api/list", async (req, res) => {
    try {
        const client_entries = await Client_Entry.findAll();
        res.json(client_entries);
    } catch (err) {
        console.error("Error: ", err);
        return res.status(400).json({ err });
    }
});

// --- add client form data to the database on submission ---
app.post("/contact/client/add", async (req, res) => {
    // --- destructure req.body to retrieve the following properties ---
    const { first_name, last_name, email, type, issue, age, race, gender, comment } = req.body;

    // --- define email message configurations ---
    const msg = {
        to: 'nw.niawright@gmail.com',
        from: 'nw.niawright@gmail.com', // Use the email or domain you verified above
        subject: 'WCC - A Prospective Client Expressed Interest in Services',
        text: `
            ${first_name} ${last_name} expressed interest in services!
            Details:
            Email: ${email}
            Type: ${type}
            Issue: ${issue}
            Age: ${age}
            Race: ${race}
            Gender: ${gender}
            Comment: ${comment}
            You can reach out to ${first_name} ${last_name} at ${email}.
        `,
        html: `
            <h1>${first_name} ${last_name} expressed interest in services!</h1>
            <br />
            <h3>Details:</h3>
            <ul>
                <li>Email: ${email}</li>
                <li>Type: ${type}</li>
                <li>Issue: ${issue}</li>
                <li>Age: ${age}</li>
                <li>Race: ${race}</li>
                <li>Gender: ${gender}</li>
                <li>Comment: ${comment}</li>
            </ul>
            <br />
            You can reach out to ${first_name} ${last_name} at ${email}.
        `,
    }
    
    try {
        const newClient_Entry = await Client_Entry.create({
            // --- add properties from req.body into client_entries table through the create Client_Entry model ---
            first_name, last_name, email, type, issue, age, race, gender, comment
        });

        // --- sendEmail ---
        await sgMail.send(msg);
        console.log("Email sent!");

        res.json(newClient_Entry);
    } catch (err) {
        console.error("Error: ", err.response.body);
        return res.status(400).json({ err });
    }
});

// --- add professional form data to the database on submission ---
app.post("/contact/professional/add", async (req, res) => {
    // --- destructure req.body to retrieve the properties below ---
    const { first_name, last_name, phone, email, comment } = req.body;

    // --- define email message configurations ---
    const msg = {
        to: 'nw.niawright@gmail.com',
        from: 'nw.niawright@gmail.com', // Use the email address or domain you verified above
        subject: 'WCC - A Professional Expressed Interest in Services',
        text:  `
            ${first_name} ${last_name} expressed interest in services!
            Details:
            Phone: ${phone}
            Email: ${email}
            Comment: ${comment}
            You can reach out to ${first_name} ${last_name} at ${email}.
        `,
        html:  `
            <h1>${first_name} ${last_name} expressed interest in services!</h1>
            <br />
            <h3>Details:</h3>
            <ul>
                <li>Phone: ${phone}</li>
                <li>Email: ${email}</li>
                <li>Comment: ${comment}</li>
            </ul>
            <br />
            You can reach out to ${first_name} ${last_name} at ${email}.
        `,
    }
    
    try {
        // --- add properties into professional_entries table with Sequelize create method ---
        const newProfessional_Entry = await Professional_Entry.create({
            first_name, last_name, phone, email, comment
        });

        // --- sendEmail ---
        await sgMail.send(msg);
        console.log("Email sent!");
        res.json(newProfessional_Entry);
    } catch (err) {
        console.error("Error adding professional entry: ", err);
        return res.status(400).json({ err });
    }
})

app.get("*", (req, res) => {
    // --- verify that all routes are given index.html to allow React to manage routing ---
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));

    // --- req.isAuthenticated is provided from the auth router ---
    // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');

    console.log('Welcome to Wright Choice Consulting.');
});

app.listen(PORT, () => {
    console.log(`WCC server running on ${process.env.DOMAIN}`);
});