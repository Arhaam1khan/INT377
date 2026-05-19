import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Database connection (We will containerize this later!)
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: 'portfolio_db'
});

app.get('/api/projects', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM projects');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Database connection failed' });
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await pool.query(
            'INSERT INTO messages (visitor_name, visitor_email, message_body) VALUES (?, ?, ?)',
            [name, email, message]
        );
        res.status(201).send({ status: 'Message saved!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save message' });
    }
});

app.get('/api/visit', async (req, res) => {
    const ip = req.ip || req.socket.remoteAddress;
    const agent = req.headers['user-agent'];

    try {
        await pool.query(
            'INSERT INTO visitor_logs (ip_address, user_agent) VALUES (?, ?)',
            [ip, agent]
        );

        const [countResult]: any = await pool.query('SELECT COUNT(*) AS total FROM visitor_logs');
        res.json({ totalVisits: countResult[0].total });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log visit' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend API running on port ${PORT}`));