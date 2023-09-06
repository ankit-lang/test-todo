import app from "./app.js";
import dotenv from "dotenv"
import { mongoConnect } from "./config/database.js";
dotenv.config({path:"./config/.env"})




//databse
mongoConnect()


//middleware



app.listen(process.env.PORT, () => {
  console.log(`Server working on ${process.env.PORT}`);
});
 