import mongoose from "mongoose";

export const mongoConnect = () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then((data) => console.log(`connected to db`)).catch(err=>console.log(`error ${err}`));
};
