import React, { useContext, useState } from "react";

/** Import context global **/
import { ThemeContext } from "../../components/App/App";
/** Imports elements **/
import iconPlus from "../../assets/images/icons/plus-lg.svg";
import iconDash from "../../assets/images/icons/dash-lg.svg";

function Counter() {
  /** State Global **/
  const { isActive } = useContext(ThemeContext);
  /** State Local **/
  const [counter, setCounter] = useState(0);
  /** Functions **/
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <section
      className={`counter__container ${
        isActive ? "dark-theme" : "light-theme"
      }`}
    >
      <article className="counter__container--card">
        <span className="card-counter">{counter}</span>
        <div className="card-actions">
          <h2 className="card-actions-title title">Counter</h2>
          <div className="card-actions-buttons">
            <button className="btn btn-add" onClick={increment}>
              <img src={iconPlus} alt="icon plus" />
            </button>
            <button className="btn btn-minus" onClick={decrement}>
              <img src={iconDash} alt="icon dash" />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Counter;
