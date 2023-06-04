const express = require("express");
const {  addTodo, updateTodo, getAllTodos, deleteTodo} = require("../controller/todoController");

const router = express.Router();

router.post("/",addTodo);
router.get("/",getAllTodos)
router.put("/:id",updateTodo)
router.delete("/:id",deleteTodo)




module.exports=router;