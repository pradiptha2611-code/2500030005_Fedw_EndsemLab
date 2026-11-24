
import React from "react";

function Student(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Marks: {props.marks}</p>

      <p>
        Status: {props.marks >= 35 ? "Pass" : "Fail"}
      </p>
      <hr />
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Priya", marks: 75 },
    { id: 3, name: "Kiran", marks: 30 },
    { id: 4, name: "Sita", marks: 25 },
    { id: 5, name: "Rahul", marks: 60 }
  ];

  return (
    <div>
      <h1>Student Management System</h1>

      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          marks={student.marks}
        />
      ))}

      <footer>
        <h3>Student Management System</h3>
        <p>© 2026 All Rights Reserved</p>
        <p>Designed using React JS</p>
      </footer>
    </div>
  );
}

export default App;
