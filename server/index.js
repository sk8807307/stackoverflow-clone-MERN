import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import answerRoutes from './routes/Answers.js'
import questionRoutes from './routes/Questions.js'
import userRoutes from './routes/users.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({limit: "30mb", extended: "true"}))

// Dynamic CORS setup: allows your local client during development, 
// but falls back to your Render deployment URL in production.
const allowedOrigin = process.env.NODE_ENV === 'production' 
    ? 'https://clone01.onrender.com' // Replace with your actual frontend Render URL
    : 'http://localhost:3000';      // Replace with your local React/Vite port (e.g., 3000 or 5173)

app.use(cors({
    origin: allowedOrigin,
    credentials: true, // Allows cookies and authorization headers if needed later
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.get('/',(req, res) => {
    res.send("This is a stackoverflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.MONGO_URI
mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () => {console.log(`server is running on PORT ${PORT}`)}))
    .catch((err) => console.log(err.message))
