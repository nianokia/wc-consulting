import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { DataTypes, Sequelize } from 'sequelize';

// connect sequelize to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    define: {
        // this ensures that sequelize doesn't modify the table names specified
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
});

// verify that sequelize connected to the database
async function authenticateDBConnection() {
    try {
        await sequelize.authenticate()
        console.log("Connection successful");
    } catch (err) {
        console.log("Error connecting to database.");
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
    tableName: 'client_entries',
});

// sync the model and table together so they are gathering the same information with the same constraints and data types
Client_Entry.sync().then((data) => {
    console.log("Model and table synced succesfully!");
}).catch((err) => {
    console.log("Error syncing the table and model:", err);
});


const app = express();
const PORT = process.env.PORT || 3388;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Welcome to Wright Choice Consulting.");
});

app.post("/contact/client/add", async (req, res) => {
    // console.log(req.body);
    const { first_name, last_name, email, type, issue, age, race, gender, comment } = req.body;

    // const newClient_Entry = {
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     type: req.body.type,
    //     issue: req.body.issue,
    //     age: req.body.age,
    //     race: req.body.race,
    //     gender: req.body.gender,
    //     comment: req.body.comment
    // }

    try {
        const newClient_Entry = await Client_Entry.create({
            first_name, last_name, email, type, issue, age, race, gender, comment
        });
        console.log("Succesfully created entry!");
        console.log(newClient_Entry);
        res.json(newClient_Entry);
    } catch (err) {
        console.log("Error adding client_entry: ", err);
        return res.status(400).json({ err });
    }
});

app.listen(PORT, () => {
    console.log(`WCC server running on http://localhost:${PORT}/`);
});