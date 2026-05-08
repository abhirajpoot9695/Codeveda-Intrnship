const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json());

const JWT_SECRET = 'your_super_secret_key'; // Ise hamesha secret rakhein
let users = []; // Temporary storage

// --- OBJECTIVE: Hashing Passwords
// 1. REGISTER: Naya user banane ke liye
app.post('/api/register', async (req, res) => {
    try {
       const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash before saving[span_5](end_span)
        const newUser = {
            id: Date.now(),
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role || 'user' // Default role
        };
        users.push(newUser);
        res.status(201).json({ message: "User registered successfully!" });
    } catch {
        res.status(500).send("Error registering user.");
    }
});

// --- OBJECTIVE: JWT Authentication[span_7](end_span) ---
// 2. LOGIN: Token generate karne ke liye
app.post('/api/login', async (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (!user) return res.status(400).send("User nahi mila.");

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) return res.status(401).send("Galat password.");

    // Token banana
    const token = jwt.sign(
        { id: user.id, role: user.role }, 
        JWT_SECRET, 
        { expiresIn: '1h' }
    );

    res.json({ token });
});

// --- OBJECTIVE: Protected Routes & Roles
// Middleware: Token verify karne ke liye
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.user = decoded;
        next();
    });
};

// Protected Route (Sirf logged-in users ke liye)
app.get('/api/profile', authenticateToken, (req, res) => {
    res.json({ message: `Welcome User ID: ${req.user.id}` });
});

// Admin Only Route (Role-based access)
app.get('/api/admin', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send("Access Denied: Sirf Admin ke liye!");
    }
    res.json({ message: "Hello Admin, aapka swagat hai!" });
});

app.listen(3000, () => console.log('Auth Server running on port 3000'));