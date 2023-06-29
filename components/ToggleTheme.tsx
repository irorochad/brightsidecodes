import React, { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { CiLight, CiDark } from "react-icons/ci";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function handleSubmit() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={handleSubmit}
      aria-label="Toggle Dark Mode"
      className=" w-3/4 hd:w-1/3 button text-gray-700 dark:text-bsc-dark-100 {
      focus:outline-none
    }"
    >
      {theme === "light" ? (
        <CiDark className="text-4xl" />
      ) : (
        <CiLight className="text-4xl" />
      )}
    </button>
  );
}

export default ThemeToggler;
