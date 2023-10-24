import React, { useState } from "react";

/** Import components **/

/** Import elements **/
import iconMoon from "../../assets/images/icons/moon-stars-fill.svg";
import iconSun from "../../assets/images/icons/brightness-high-fill.svg";

function Tasks() {
  /** State component **/
  const [isActive, setIsActive] = useState(false);
  /** Functions **/
  const handleToogle = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="tasks">
      <div
        className={`tasks__top-bar ${isActive ? "dark-theme" : "light-theme"}`}
      >
        <button className="btn-theme" onClick={handleToogle}>
          <img src={!isActive ? iconMoon : iconSun} alt="icon button theme" />
        </button>
      </div>
    </section>
  );
}

export default Tasks;
