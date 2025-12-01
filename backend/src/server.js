import express from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import cors from "cors"
import path from "path"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import { connectDB } from "./lib/db.js";
dotenv.config();

const app=express()
const PORT=process.env.PORT;

const __dirname=path.resolve();



app.use(
    cors({
        origin:["http://localhost:5173","https://social-app-liard-nine.vercel.app/login"],
        credentials:true //allow frontend to send cookies
    })
)

app.use(express.json())

app.use(cookieParser()) 



/* app.get("/api/auth/signup",(req,res)=>{
    res.send("Signup Route")
})
app.get("/api/auth/login",(req,res)=>{
    res.send("Login Route")
})
app.get("/api/auth/logout",(req,res)=>{
    res.send("Logout Route")
}) */

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/chat",chatRoutes);




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
    
});