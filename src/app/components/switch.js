"use client";

import { useState, useEffect } from "react";

export default function Switch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check and apply the theme on component mount
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <span className="sr-only">Switch to dark mode</span>
            <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <div className="block w-10 h-6 bg-gray-200 rounded-full"></div>
            <div
                className={`dot absolute w-4 h-4 bg-white rounded-full transition ${
                    isDarkMode ? "translate-x-4" : "translate-x-0"
                }`}
            ></div>
        </label>
    );
}
