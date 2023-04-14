const express = require("express");
const app = express();
const noteRouter = require("./routes/notesRoutes");
const userRouter = require("./routes/userRoutes"); 
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.get("/", (req, res) =>{
    res.send("Welcome to Notes API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to Mongo DB")
    }catch(err){
        console.log(err)
    }

    console.log("Server started on port no. " + PORT);
});