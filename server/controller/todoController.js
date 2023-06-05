const Todo = require('../models/todoModel');

exports.addTodo = async (req, res) => {
    try {
        const { text } = req.body;
        const todo = new Todo({
            text: text,
        });
        await todo.save();
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        // Update the todo document by ID
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text }, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        const total = await Todo.find()
        res.json(total);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        // Delete the todo document by ID
        await Todo.findByIdAndDelete(id);
        const total = await Todo.find()
        res.json(total);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
