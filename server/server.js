import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Client_Entry from './models/Client_Entry.js';
import Professional_Entry from './models/Professional_Entry.js';
import { auth } from 'express-openid-connect';
import sgMail from '@sendgrid/mail';

// -------- DEFINE VARIABLES --------
const app = express();
const PORT = process.env.PORT || 3388;

// --- define the path to the index.html file in the build folder ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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

// --- direct server to use the compiled build files from React ---
app.use(express.static(path.join(__dirname, '../client/dist')));

// --- use auth router to attach /login, /logout, & /callback routes to baseURL ---
app.use(auth(config));


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