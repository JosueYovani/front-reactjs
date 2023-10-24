import React, { useState } from "react";

function Home() {
  //
  const [isDarkTheme, setIsDarkheme] = useState(false);
  //
  const toogleTheme = () => {
    setIsDarkheme(!isDarkTheme);
  };

  return (
    <div className={`home ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div>
        <h1>Home</h1>
        <button onClick={toogleTheme}>Toogle theme</button>
      </div>
    </div>
  );
}

export default Home;
