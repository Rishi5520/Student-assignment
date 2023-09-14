import express  from "express";	
import 'dotenv/config'
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./Src/Config/dbConnect.js";
import authRouter from "./Src/Routers/AuthRouter.js";



const app = express();
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
app.use('/auth',authRouter)
const port = process.env.Port||5200;
app.listen(port,()=>{
    connectDB();
    console.log(`server listening on port ${port}`);
})
	
	
