import { TodoModel } from "./shema.js";
import mongoose from 'mongoose';

export class TodosService {
    async getTodos() {
        try {
            const todos = await TodoModel.find({});
            return todos;
        } catch (error) {
            console.log("Error fetching todos:", error);
            throw error;
        }
    }

    async getTodo(id) {
        try {
            const todo = await TodoModel.findById(id);
            return todo;
        } catch (error) {
            console.log("Error fetching todo:", error);
            throw error;
        }
    }

    async createTodo(todoData) {
        try {
            const todo = new TodoModel({
                _id: new mongoose.Types.ObjectId(),
                ...todoData,
            });
            const result = await todo.save();
            return result;
        } catch (error) {
            console.log("Error creating todo:", error);
            throw error;
        }
    }

    async updateTodo(id, data) {
        try {
            const todo = await TodoModel.findByIdAndUpdate(id, data, { new: true });
            return todo;
        } catch (error) {
            console.log("Error updating todo:", error);
            throw error;
        }
    }
    async deleteTodo(id) {
        try {
            const todo = await TodoModel.findByIdAndDelete(id);
            return todo;
        } catch (error) {
            console.log("Error deleting todo:", error);
            throw error;
        }
    }
}