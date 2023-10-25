import React, { useContext, useState } from "react";

/** Import context global **/
import { ThemeContext } from "../../../../components/App/App";
/** Import componenets **/
import { StudentForm } from "./components/StudentForm";
import { StudentTable } from "./components/StudentTable";
import { StudentSearch } from "./components/StudentSearch";

function StudentList() {
  /** State Global **/
  const { isActive } = useContext(ThemeContext);
  /** State Local **/
  const [searchedUser, setSearchedUser] = useState("");
  return (
    <section
      className={`student-list ${isActive ? "dark-theme" : "ligth-theme"}`}
    >
      <h2>Lista de Calificaciones</h2>
      <div className="student-list__container">
        <StudentForm />
        <StudentSearch
          searchedUser={searchedUser}
          setSearchedUser={setSearchedUser}
        />
        <StudentTable searchedUser={searchedUser} />
      </div>
    </section>
  );
}

export default StudentList;
