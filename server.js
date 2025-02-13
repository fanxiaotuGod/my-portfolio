import express from "express";
import cors from "cors";
import mysql from "mysql2/promise"; // Use promise-based MySQL
import dotenv from "dotenv";

dotenv.config();

// ✅ Create a MySQL connection pool
const db = mysql.createPool({
    host: '127.0.0.1', // Force IPv4 instead of ::1 (IPv6)
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


const app = express();
app.use(cors());
app.use(express.json());

// ✅ API to Fetch Projects from MySQL
app.get('/projects', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM projects");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ API to Add a New Project
app.post('/projects', async (req, res) => {
    const { name, description, tech_stack, repo_link, live_demo } = req.body;
    try {
        const sql = "INSERT INTO projects (name, description, tech_stack, repo_link, live_demo) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.query(sql, [name, description, tech_stack, repo_link, live_demo]);
        res.json({ message: "Project added successfully", id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
