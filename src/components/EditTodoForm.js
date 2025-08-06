import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item>
          <TextField
            type="text"
            className="todo-input"
            placeholder="Update Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Update Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
