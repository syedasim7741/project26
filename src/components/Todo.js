import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const today = dayjs();
  const taskDate = dayjs(task.date, "DD MMM YYYY");

  let iconColor = "gray";

  if (task.completed) {
    iconColor = "green";
  } else if (taskDate.isBefore(today, "day")) {
    iconColor = "red";
  }
  return (
    <Grid
      container
      spacing={10}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        flexWrap: "nowrap",
        width: "100%",
      }}
    >
      <Grid item>
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ color: iconColor, fontSize: "1.5rem", marginRight: "8px" }}
        />
      </Grid>

      <Grid>
        <Typography
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "completed" : ""}`}
          sx={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          {task.task}
        </Typography>
      </Grid>
      {task.date && (
        <Grid item>
          <Box sx={{ color: "black", fontSize: "0.9rem", minWidth: "80px" }}>
            {task.date}
          </Box>
        </Grid>
      )}

      <Grid>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="edit-icon"
          onClick={() => editTodo(task.id)}
          style={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => deleteTodo(task.id)}
          style={{ cursor: "pointer" }}
        />
      </Grid>
    </Grid>
  );
};
