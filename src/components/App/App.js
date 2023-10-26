import React, { createContext, useState } from "react";

/** Imports Componenets **/
import { Episodes, Home, Tasks } from "../../pages";
/** Init Context Global **/
export const ThemeContext = createContext();

function App() {
  /** State component **/
  const [isActive, setIsActive] = useState(false);
  /** Functions **/
  const handleToogle = () => {
    setIsActive(!isActive);
  };

  return (
    <ThemeContext.Provider value={{ isActive, handleToogle }}>
      {/* <Home /> */}
      {/* <Tasks /> */}
      <Episodes />
    </ThemeContext.Provider>
  );
}

export default App;
