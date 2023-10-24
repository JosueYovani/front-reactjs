import React from "react";
import UserWithGrades from "../../components/Userwithgrades/UserWithGrades";
import { Header } from "../../layouts";

function Tasks() {
  return (
    <div className="tasks">
      <Header />
      <UserWithGrades />
    </div>
  );
}

export default Tasks;
