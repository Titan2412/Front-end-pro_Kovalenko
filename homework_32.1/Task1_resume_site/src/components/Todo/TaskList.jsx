import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./taskItem.jsx";
import { List, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const TaskList = () => {
  const todos = useSelector((state) => state.todo.task);
  const title = todos.length === 0 ? "" : "Task";
  const primary = blue[100];

  return (
    <List
      sx={{
        bgcolor: primary,
        width: "300px",
        borderRadius: "20px",
        marginTop: "50px",
        padding: "20px",
      }}
    >
      <Typography variant="h3">{title}</Typography>
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TaskList;
