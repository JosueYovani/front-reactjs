import React, { useContext } from "react";

/** Import context global **/
import { GradesContext } from "../../../Tasks";
/** Import elements **/
import iconSearch from "../../../../../assets/images/icons/search.svg";
import iconClean from "../../../../../assets/images/icons/x-circle.svg";

export const StudentSearch = ({ searchedUser, setSearchedUser }) => {
  /** State Global **/
  const { usersWithGrades } = useContext(GradesContext);

  /** Functions **/
  const clearSearch = () => {
    setSearchedUser("");
    document.getElementById("search-user").value = "";
  };

  const searchUser = () => {
    const userValue = document.getElementById("search-user").value;
    if (userValue) {
      const filteredUsers = usersWithGrades.filter((user) => {
        return user.name === userValue;
      });
      setSearchedUser([filteredUsers[0]]);
    } else {
      alert("Ingresa un nombre");
    }
  };

  return (
    <div className="student-search">
      <h3>Busca un estudiante</h3>
      <div className="student-search--input">
        <input id="search-user" type="text" placeholder="Nombre" />
        {searchedUser ? (
          <button onClick={clearSearch}>
            <img src={iconClean} alt="Icon clean" />
          </button>
        ) : (
          <button onClick={searchUser}>
            <img src={iconSearch} alt="Icon search" />
          </button>
        )}
      </div>
    </div>
  );
};
