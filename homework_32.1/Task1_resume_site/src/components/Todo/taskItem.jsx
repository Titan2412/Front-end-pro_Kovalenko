import React from "react";
import { List, Typography } from "@mui/material";

export const TodoItem = ({ todo }) => {
  return (
    <List
      sx={{
        marginTop: "10px",
        bgcolor: "white",
        borderRadius: "10px",
        padding: "5px",
        boxShadow: 1,
      }}
    >
      <Typography variant="p">{todo.text}</Typography>
    </List>
  );
};

export default TodoItem;
