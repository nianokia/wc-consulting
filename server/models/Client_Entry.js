import { DataTypes, Sequelize } from 'sequelize';
import 'dotenv/config';

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
    }, created_at: {
        type: DataTypes.DATE,
    }
}, {
    // --- this ensures that sequelize doesn't modify the table name specified or create a createdAt or updatedAt ---
    tableName: 'client_entries',
    createdAt: false,
    updatedAt: false,
});

// --- sync client model & table together so they're gathering the same information with the same constraints and data types ---
Client_Entry.sync().then((data) => {
    console.log("Client model & table synced succesfully!");
}).catch((err) => {
    console.log("Error syncing client table & model: ", err);
});

export default Client_Entry;