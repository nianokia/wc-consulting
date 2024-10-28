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
    }, created_at: {
        type: DataTypes.DATE,
    }
}, {
    // --- ensures that sequelize uses the tablename specified & doesn't add a createdAt or updatedAt ---
    tableName: 'professional_entries',
    createdAt: false,
    updatedAt: false,
})

// --- sync professional model & table together so they're gathering the same information with the same constraints and data types ---
Professional_Entry.sync().then((data) => {
    console.log("Professional model & table synced successfully!");
}).catch((err) => {
    console.error("Error syncing professional table & model :", err);
});

export default Professional_Entry;