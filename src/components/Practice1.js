import { Button, Grid, TextField } from "@mui/material";
import React, { use, useState } from "react";
import { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

function Practice1() {
  const localUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [users, setUsers] = useState(localUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredUsers = localUsers.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUsers(filteredUsers);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setUsers(localUsers);
    } else {
      const filteredUsers = localUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(filteredUsers);
    }
    localStorage.setItem("users", JSON.stringify(users));
  };

  useEffect(() => {
    if (!users.length) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUsers(data);
          localStorage.setItem("users", JSON.stringify(data));
        });
    }
  }, []);

  const deletehandler = (deletevalue) => {
    const updatedUsers = users.filter((user) => user.id !== deletevalue);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems="center">
      <Grid item size={12} sx={{ marginTop: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        ></TextField>

        <Button
          variant="contained"
          color="primary"
          onClick={submitHandler}
          sx={{ marginLeft: "10px" }}
        >
          search{" "}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">phone</TableCell>
                <TableCell align="right">Website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
                  <TableCell align="right">{item.website}</TableCell>
                  <TableCell align="right">
                    {
                      <ClearIcon
                        sx={{ cursor: "pointer", color: "red" }}
                        onClick={() => deletehandler(item.id)}
                      />
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Practice1;
