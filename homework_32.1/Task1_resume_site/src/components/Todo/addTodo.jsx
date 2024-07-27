import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../../context";
import { Box, Button, TextField } from "@mui/material";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addtask(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <TextField
          label="Ваше завдання"
          variant="standard"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" type="submit" color="warning">
          Додати
        </Button>
      </Box>
    </form>
  );
};

export default AddTodo;
