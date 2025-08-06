import { Button, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !selectedDate) return;
    addTodo(value, selectedDate.format("DD MMM YYYY"));
    setValue("");
    setSelectedDate(null);
    console.log("Task Submitted:", value);
    console.log("Date Picked:", selectedDate.format("DD MMM YYYY"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <TextField
            type="text"
            value={value}
            className="todo-input"
            placeholder="What is the task today?"
            onChange={(e) => setValue(e.target.value)}
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="pick your date
              "
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default TodoForm;
