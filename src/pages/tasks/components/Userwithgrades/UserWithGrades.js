import React from "react";

export const UserWithGrades = ({ isActive }) => {
  return (
    <section
      className={`user-with-grades ${isActive ? "dark-theme" : "ligth-theme"}`}
    >
      <div className="user-with-grades__container">
        <h2>User</h2>
        <form>
          <div className="form-control">
            <label htmlFor="inputName">Name</label>
            <input id="inputName" type="text" placeholder="Change your name" />
          </div>
          <div className="form-control">
            <label htmlFor="inputName">Grade</label>
            <input id="inputName" type="text" placeholder="Change your name" />
          </div>
        </form>
      </div>
    </section>
  );
};
