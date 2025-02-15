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
        console.error("❌ Error fetching projects:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// ✅ API to Add a New Project
app.post('/projects', async (req, res) => {
    const { name, description, tech_stack, repo_link, live_demo } = req.body;

    if (!name || !description || !tech_stack || !repo_link || !live_demo) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const sql = `
            INSERT INTO projects (name, description, tech_stack, repo_link, live_demo) 
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await db.query(sql, [name, description, tech_stack, repo_link, live_demo]);

        res.json({ message: "✅ Project added successfully", id: result.insertId });
    } catch (err) {
        console.error("❌ Error adding project:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// ✅ API to Update a Project
app.put('/projects/:id', async (req, res) => {
    const projectId = parseInt(req.params.id, 10); // Convert to integer
    const { name, description, tech_stack, repo_link, live_demo } = req.body;

    if (!projectId) {
        return res.status(400).json({ error: "Invalid project ID" });
    }

    try {
        const sql = `
            UPDATE projects 
            SET name=?, description=?, tech_stack=?, repo_link=?, live_demo=? 
            WHERE id=?
        `;
        const [result] = await db.query(sql, [name, description, tech_stack, repo_link, live_demo, projectId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "❌ Project not found" });
        }

        res.json({ message: "✅ Project updated successfully" });
    } catch (err) {
        console.error("❌ Error updating project:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// ✅ API to Delete a Project
app.delete('/projects/:id', async (req, res) => {
    const projectId = parseInt(req.params.id, 10); // Convert to integer

    if (!projectId) {
        return res.status(400).json({ error: "Invalid project ID" });
    }

    try {
        const sql = "DELETE FROM projects WHERE id=?";
        const [result] = await db.query(sql, [projectId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "❌ Project not found" });
        }

        res.json({ message: "✅ Project deleted successfully" });
    } catch (err) {
        console.error("❌ Error deleting project:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 8080; // ✅ Use Railway's assigned port

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

