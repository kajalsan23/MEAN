import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
const app = express();

dotenv.config();

// app.use('/api/login', (req,res)=>{
//     return res.send("<h1>Login is success</h1>")
// })

// app.use('/api/register', (req,res)=>{
//     return res.send("<h1>Resgistration is success</h1>")
// })


// app.use('/', (req,res)=>{
//     return res.send("<h1>welcome</h1>");
// })




//DB connections

app.use(express.json())
app.use('/api/role',roleRoute)
app.use('/api/auth',authRoute)

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw error;
    }
}

app.listen(8800, () => {
    dbConnection();
    console.log("connected");
})