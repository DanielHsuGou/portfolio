import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const userPref = window.localStorage.getItem("theme");

      const handleChange = () => {
        if (userPref) {
          setMode(userPref);
          if (userPref === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        } else {
          const check = mediaQuery.matches ? "dark" : "light";
          setMode(check);
          window.localStorage.setItem("theme", check);

          if (check === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      };

      handleChange();

      if (!userPref) {
        mediaQuery.addEventListener("change", handleChange);
      }

      return () => {
        if (!userPref) {
          mediaQuery.removeEventListener("change", handleChange);
        }
      };
    }
  }, [preferDarkQuery]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
      if (mode === "light") {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
