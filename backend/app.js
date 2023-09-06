import express from "express";
import cors from "cors"
import router from "./routes/todoRoute.js";



const app = express();
app.use(express.json())
app.use(cors())

//routes
console.log("app")
app.use('/',router)




//middleware for error


export default app;
