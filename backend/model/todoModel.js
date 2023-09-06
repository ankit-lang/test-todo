import mongoose from "mongoose";


const todoSchema = mongoose.Schema({
    text :{
        type: String,
        required:true
    }
})

const todoModel = new mongoose.model("todo",todoSchema)
export default todoModel