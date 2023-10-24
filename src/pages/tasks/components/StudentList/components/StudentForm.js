import React from "react";

export const StudentForm = ({ usersWithGrades, setUserWithGrades }) => {
  /** Functions **/
  const addNewuser = () => {
    /** Get elements **/
    const userValue = document.getElementById("inputName").value;
    const gradeVaue = Number(document.getElementById("inputGrade").value);
    if (userValue == "" && gradeVaue === 0) {
      alert("Ingresa los datos requeridos");
    } else {
      setUserWithGrades([
        ...usersWithGrades,
        {
          name: userValue,
          grade: gradeVaue,
        },
      ]);
    }
    document.getElementById("inputName").value = "";
    document.getElementById("inputGrade").value = "";
  };

  return (
    <section className="student-form">
      <h3>Agregar Estudiante y Calificación</h3>
      <div className="form-control">
        <label htmlFor="inputName">Name</label>
        <input
          id="inputName"
          type="text"
          placeholder="Ingresa el nombre del estudiante"
        />
      </div>
      <div className="form-control">
        <label htmlFor="inputName">Grade</label>
        <input
          id="inputGrade"
          type="text"
          placeholder="Ingresa su calificación"
        />
      </div>
      <div className="student-form--actions">
        <button className="btn" onClick={addNewuser}>
          Add User
        </button>
      </div>
    </section>
  );
};
