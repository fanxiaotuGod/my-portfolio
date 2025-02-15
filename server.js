import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env file

// 🔍 Debugging: Log Environment Variables
console.log("📌 DB Config:", {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ? "✅ Loaded" : "❌ Not Set",
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// ✅ Create MySQL Connection Pool
const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const app = express();
app.use(cors());
app.use(express.json());

// ✅ **Test Database Connection on Startup**
(async () => {
    try {
        const connection = await db.getConnection();
        console.log("✅ MySQL Connection Successful");
        connection.release();
    } catch (err) {
        console.error("❌ MySQL Connection Failed:", err.message);
    }
})();

// ✅ API: Check API & DB Connection
app.get("/health", async (req, res) => {
    try {
        const [result] = await db.query("SELECT 1");
        res.json({ status: "✅ API & Database Connected", db: result });
    } catch (err) {
        res.status(500).json({ error: "❌ Database Connection Failed", details: err.message });
    }
});

// ✅ API: Fetch Projects
app.get("/projects", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM projects");
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching projects:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// ✅ API: Add a New Project
app.post("/projects", async (req, res) => {
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

// ✅ API: Update a Project
app.put("/projects/:id", async (req, res) => {
    const projectId = parseInt(req.params.id, 10);
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

// ✅ API: Delete a Project
app.delete("/projects/:id", async (req, res) => {
    const projectId = parseInt(req.params.id, 10);

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

// ✅ API: Root Endpoint
app.get("/", (req, res) => {
    res.send("🚀 Portfolio API is running!");
});

// ✅ Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
