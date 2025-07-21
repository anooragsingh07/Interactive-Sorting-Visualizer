import { useState } from "react";
import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <SortingProvider>
            <div className={`container mx-auto px-4 min-h-screen ${theme}`}>
                <div className="flex justify-end pt-4 pr-2">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <SortingChart />
            </div>
        </SortingProvider>
    );
}

export default App;
