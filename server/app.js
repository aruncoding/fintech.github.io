import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from "./config/connectdb.js";
import contactRoutes from './routes/contactRoutes.js';
dotenv.config()

// First Step--> create object of express which we inported above 
const app = express()

// Second Step afer creating .env file and defining port number--> Defining port number on which serever is running
const port = process.env.PORT

// Third Step-->To run the server write below code
app.listen(port, () => {
    console.log(`Server Listening at http://127.0.0.1:${port}`)
})

//Fourth Step --> Defning Cors Policy
app.use(cors())

//Fifth Step --> connect database
const DATABASE_URL = process.env.DATABASE_URL

//For Parsing application/json
app.use(express.json())

//Sixth Step --> call the function and pass DATABASE_URL to that function which we created ion cofig/connectdb.js file
connectDb(DATABASE_URL)

// Load Routes
app.use('/api', contactRoutes)