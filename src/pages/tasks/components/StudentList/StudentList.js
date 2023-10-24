import React, { useState } from "react";
/** Import componenets **/
import { StudentForm } from "./components/StudentForm";
import { StudentTable } from "./components/StudentTable";

function StudentList({ isActive }) {
  const [usersWithGrades, setUserWithGrades] = useState([
    { name: "Jorge", grade: 10 },
    { name: "Arianna", grade: 9.5 },
    { name: "Ramón", grade: 8 },
  ]);

  return (
    <section
      className={`student-list ${isActive ? "dark-theme" : "ligth-theme"}`}
    >
      <h2>Lista de Calificaciones</h2>
      <div className="student-list__container">
        <StudentForm
          usersWithGrades={usersWithGrades}
          setUserWithGrades={setUserWithGrades}
        />

        <StudentTable usersWithGrades={usersWithGrades} />
      </div>
    </section>
  );
}

export default StudentList;
