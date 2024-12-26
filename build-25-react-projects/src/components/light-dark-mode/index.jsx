import React from "react";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  console.log(theme);

  return (
    <div>
      <p>Hello world</p>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
};

export default LightDarkMode;
