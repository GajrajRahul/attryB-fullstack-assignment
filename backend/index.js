const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDB");
const dotenv = require('dotenv');
const app= express();

dotenv.config();

connectDb();

app.use(cors());
app.use(express.json());
app.use('/api/user', require('./routes/userRoutes'));
app.use("/api/car", require("./routes/carRoutes"));

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
})