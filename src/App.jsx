import React, { useState, useEffect } from "react";
import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";

function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.body.className = theme === "dark" ? "dark" : "light";
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <SortingProvider>
            <div className="container mx-auto px-4">
                {/* Theme Toggle Button */}
                <div className="flex justify-end mt-4 mb-2">
                    <button
                        onClick={toggleTheme}
                        className={`flex items-center px-2 py-1 rounded-full border transition-colors duration-300 focus:outline-none ${theme === "dark" ? "bg-blue-600 border-blue-600" : "bg-gray-200 border-gray-300"}`}
                        aria-label="Toggle theme"
                    >
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${theme === "dark" ? "bg-white text-yellow-400" : "bg-gray-700 text-gray-200"}`}>
                            {theme === "dark" ? (
                                // Sun icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" /><path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.464 6.464L5.05 5.05m12.02 0l-1.414 1.414M6.464 17.536l-1.414 1.414" /></svg>
                            ) : (
                                // Moon icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                            )}
                        </span>
                        <span className={`ml-2 font-medium text-lg ${theme === "dark" ? "text-blue-600" : "text-gray-700"}`}>
                            {theme === "dark" ? "Dark Mode" : "Light Mode"}
                        </span>
                    </button>
                </div>
                <SortingChart />
            </div>
        </SortingProvider>
    );
}

export default App;
