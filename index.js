import express from  "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRouter from "./routes/book.route.js"
import userRouter from "./routes/user.route.js"
import cors from "cors"



const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDB;

try{
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
}catch(error){
    console.log("Error",error);
}

app.use("/book",bookRouter);
app.use("/",userRouter);

app.listen(port,()=>{
    console.log(`server is running on the port:${port}`);
})