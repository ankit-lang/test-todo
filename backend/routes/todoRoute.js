import express from "express";
import { createTodo, deleteTodo, getAlltodo, updateTodo } from "../controllers/todoController.js";
const router = express.Router();

console.log("router");
router.get("/", getAlltodo);

router.post("/new", createTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;