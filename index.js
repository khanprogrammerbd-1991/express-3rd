import { MongoClient } from 'mongodb';
import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//console.log(process.env.DB_USER)

//from mongodb atlas-connect-driver-installation

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.40jcym5.mongodb.net/`);

// Home route
app.get('/', (req, res) => {
    res.send("Hello Programmer");
});

// Start server
app.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
});
