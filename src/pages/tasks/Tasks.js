import React, { createContext, useContext, useState } from "react";

/** Import context global **/
import { ThemeContext } from "../../components/App/App";
/** Import components **/
import { StudentList } from "./components";
/** Import elements **/
import iconMoon from "../../assets/images/icons/moon-stars-fill.svg";
import iconSun from "../../assets/images/icons/brightness-high-fill.svg";

/** Init Context Global **/
export const GradesContext = createContext();

function Tasks() {
  /** State Global **/
  const { isActive, handleToogle } = useContext(ThemeContext);
  /** State Local **/
  const [usersWithGrades, setUserWithGrades] = useState([
    { name: "Arianna", grade: 10 },
    { name: "Ana Lilia", grade: 8 },
    { name: "Jorge", grade: 10 },
    { name: "Juan", grade: 9 },
  ]);

  return (
    <GradesContext.Provider value={{ usersWithGrades, setUserWithGrades }}>
      <section className="tasks">
        <div
          className={`tasks__top-bar ${
            isActive ? "dark-theme" : "light-theme"
          }`}
        >
          <button className="btn-theme" onClick={handleToogle}>
            <img src={!isActive ? iconMoon : iconSun} alt="icon button theme" />
          </button>
        </div>
        <StudentList />
      </section>
    </GradesContext.Provider>
  );
}

export default Tasks;
