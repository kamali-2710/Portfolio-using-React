import React, { useState } from "react";
import "./Top.css";

const Top = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {

    const newMode = !darkMode;
    setDarkMode(newMode);

    if(newMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }

  };

  return (
    <div className="head">

      <div className="logo">
        <img src="./images/papua-new-guinea (2).png" alt="" className="img" />
      </div>

      <div className="setting" onClick={toggleTheme}>
        {darkMode ? (
           <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-regular fa-sun"></i>
         
        )}
      </div>

    </div>
  );
};

export default Top;