import React, { useContext } from "react";

/** Import context global **/
import { ThemeContext } from "../../components/App/App";
/** Import components **/
import Header from "../../layouts/Header";
import Counter from "../../components/Counter/Counter";
import FormName from "../../components/FormName/FormName";

function Home() {
  /** State Global **/
  const { isActive, handleToogle } = useContext(ThemeContext);

  return (
    <div className={`home ${isActive ? "dark-theme" : "light-theme"}`}>
      <Header />
      <button onClick={handleToogle}>Toogle theme</button>
      <Counter />
      <FormName />
    </div>
  );
}

export default Home;
