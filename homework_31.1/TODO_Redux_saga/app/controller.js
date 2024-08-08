import { Router } from "express";
import { TodosService } from "./service.js";

const todoRouter = Router();
const todoService = new TodosService();

todoRouter.get("/todos", async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.json(todos);
  } catch (e) {
    res.status(500).json({ error: "Can't get todos" });
  }
});

todoRouter.get("/todos/:id", async (req, res) => {
  try {
    const todo = await todoService.getTodo(req.params.id);
    if (!todo) {
      throw new Error("NotFound");
    }
    res.json(todo);
  } catch (e) {
    if (e.message === "NotFound") {
      res.status(404).json({ error: `Todo with id: '${req.params.id}' not found` });
    } else {
      res
        .status(500)
        .json({ error: `Can't get todo with id: '${req.params.id}'` });
    }
  }
});

todoRouter.post("/todos", async (req, res) => {
  try {
    const resp = await todoService.createTodo(req.body);
    res.json(resp);
  } catch (e) {
    res
      .status(500)
      .json({ error: `Can't create todo with id: '${req.body.id}'` });
  }
});

todoRouter.put("/todos/:id", async (req, res) => {
  try {
    const resp = await todoService.completedTodo(req.params.id, req.body);
    res.json(resp);
  } catch (e) {
    res
      .status(500)
      .json({ error: `Can't update todo with id: '${req.params.id}'` });
  }
});

todoRouter.delete("/todos/:id", async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.status(200).send("ok");
  } catch (e) {
    res
      .status(500)
      .json({ error: `Can't delete todo with id: '${req.params.id}'` });
  }
});

todoRouter.delete('/todos', async (req, res) => {
  try {
    const result = await todoService.deleteAllTodos();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Can't delete all todos" });
  }
});

todoRouter.put('/todos/:id/rename', async (req, res) => {
  try {
    const renTodo = await todoService.renameTodo(req.params.id, req.body.title);
    res.json(renTodo);
  } catch (error) {
    console.error(`PUT /todos/${req.params.id}/rename error:`, error);
    res.status(500).json({ error: `Can't rename todo with id: '${req.params.id}'`, details: error.message });
  }
});


export { todoRouter };