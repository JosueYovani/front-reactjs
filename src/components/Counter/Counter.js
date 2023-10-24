import React, { useState } from "react";

/** Imports elements **/
import iconPlus from "../../assets/images/icons/plus-lg.svg";
import iconDash from "../../assets/images/icons/dash-lg.svg";

function Counter() {
  /** State **/
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
    <section className="counter__container">
      <article className="card">
        <span className="card-counter">{counter}</span>
        <div className="card-actions">
          <h2 className="title card-actions-title">Counter</h2>
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
