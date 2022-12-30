import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";

export default function CreateStudent() {
  const [student, setStudent] = useState({
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });
  const createStudent = () => {
    axios.post("http://localhost:7000/students", student).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <>
      <h2 style={{ color: "#708090" }}>Create Student</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
      >
        <TextField
          id="standard-basic"
          label="Registeration"
          variant="standard"
          value={student.regNo}
          onChange={(event) => {
            setStudent({ ...student, regNo: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={student.studentName}
          onChange={(event) => {
            setStudent({ ...student, studentName: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Grade"
          variant="standard"
          value={student.grade}
          onChange={(event) => {
            setStudent({ ...student, grade: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Section"
          variant="standard"
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
        />
        <Button variant="contained" color="success" onClick={createStudent}>
          Create
        </Button>
      </Box>
    </>
  );
}
