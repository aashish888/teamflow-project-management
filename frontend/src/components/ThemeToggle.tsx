"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("teamflow-theme");
    const shouldUseDarkMode = savedTheme === "dark";

    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
  }, []);

  function handleToggleTheme() {
    const nextTheme = !isDarkMode;

    setIsDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("teamflow-theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {isDarkMode ? "Light" : "Dark"}
    </button>
  );
}
