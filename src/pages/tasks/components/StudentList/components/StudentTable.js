import React from "react";

export const StudentTable = ({ usersWithGrades }) => {
  if (!usersWithGrades) return <h2>No information!</h2>;

  return (
    <article className="student-table">
      <h3>Estudiantes y Calificaciones:</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre del Estudiante</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {usersWithGrades?.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
