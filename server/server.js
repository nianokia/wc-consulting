import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { DataTypes, Sequelize } from 'sequelize';

// connect sequelize to the database
const sequelize = new Sequelize(process.env.DATABASE_URL);

// verify that sequelize connected to the database
async function authenticateDBConnection() {
    try {
        await sequelize.authenticate()
        console.log("Connection successful");
    } catch (err) { 
        console.error("Detailed connection error:", { message: err.message, code: err.parent?.code, detail: err.parent?.detail }); throw err; 
    }
}
authenticateDBConnection();

// create a model that contains the same rows and columns as the client_entries table
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
    // this ensures that sequelize doesn't modify the table names specified
    tableName: 'client_entries',
    createdAt: false,
    updatedAt: false,
});

// sync the model and table together so they are gathering the same information with the same constraints and data types
Client_Entry.sync().then((data) => {
    console.log("Model and table synced succesfully!");
}).catch((err) => {
    console.log("Error syncing the table and model:", err);
});


const app = express();
const PORT = process.env.PORT || 3388;

// define the path to the build folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

// have server use the static build files from React
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("*", (req, res) => {
    // verify that all routes are given index.html to allow React to manage routing
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
    console.log("Welcome to Wright Choice Consulting.");
});

// retrieve all data from client_entries table
app.get("/list", async (req, res) => {
    try {
        const client_entries = await Client_Entry.findAll();
        res.json(client_entries);
    } catch (err) {
        console.error("Error: ", err);
    }
});

//add client form data to the database on submission
app.post("/contact/client/add", async (req, res) => {
    // destructure req.body to retrieve the following properties
    const { first_name, last_name, email, type, issue, age, race, gender, comment } = req.body;

    try {
        const newClient_Entry = await Client_Entry.create({
            // add the properties from req.body into client_entries table through the create Client_Entry model
            first_name, last_name, email, type, issue, age, race, gender, comment
        });
        res.json(newClient_Entry);
    } catch (err) {
        console.log("Error adding client_entry: ", err);
        return res.status(400).json({ err });
    }
});

app.listen(PORT, () => {
    console.log(`WCC server running on http://localhost:${PORT}/`);
});