import React, { useState } from "react";
import "./form-name.css";

function FormName() {
  /** State **/
  const [nameFull, setNameFull] = useState({
    first_name: "",
    last_name: "",
  });
  const [viewName, setViewName] = useState("Full Name");
  /** Functions **/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNameFull({ ...nameFull, [name]: value });
  };
  const createFullName = (e) => {
    e.preventDefault();
    const getName = `${nameFull.first_name} ${nameFull.last_name}`;
    setViewName(getName);
  };

  return (
    <section className="form-name__container">
      <h2 className="title">{viewName}</h2>
      <form>
        <div className="form-control">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={nameFull.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={nameFull.last_name}
            onChange={handleChange}
          />
        </div>
        <button className="btn" onClick={createFullName}>
          Create full name
        </button>
      </form>
    </section>
  );
}

export default FormName;
