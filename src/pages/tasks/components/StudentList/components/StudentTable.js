import React, { useContext, useMemo } from "react";

/** Import context global **/
import { GradesContext } from "../../../Tasks";

export const StudentTable = ({ searchedUser }) => {
  console.log(searchedUser);
  /** State Global **/
  const { usersWithGrades } = useContext(GradesContext);
  console.log(usersWithGrades);
  /** Validations **/
  if (!usersWithGrades) return <h2>No information!</h2>;
  /** Functions **/
  const averageGrade = () => {
    const total = usersWithGrades.reduce((acc, user) => {
      return acc + user.grade;
    }, 0);

    return total / usersWithGrades.length;
  };
  const avg = useMemo(() => averageGrade(), [usersWithGrades]);

  return (
    <div className="student-table">
      <article className="student-table">
        <h3>Promedio de Calificaciones: {avg}</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre del Estudiante</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
            {searchedUser
              ? searchedUser.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                  </tr>
                ))
              : usersWithGrades?.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </article>
    </div>
  );
};
