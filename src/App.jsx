import { useState, useEffect } from "react";
import MainPanel from "./MainPanel";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (!theme) {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }, []);

    return (
        <>
            {theme === "light" ? (
                <div className="pattern-light -z-5"></div>
            ) : (
                <div className="fixed -z-5 h-screen w-screen bg-linear-190 from-violet-950 to-gray-900"></div>
            )}
            <div
                className={`fixed top-20 -right-5 flex h-5 w-fit rotate-90 cursor-pointer flex-row gap-5 font-extralight ${theme === "dark" ? "text-purple-200" : ""}`}
            >
                <p
                    className={`opacity-60 transition-all ${theme === "light" ? "font-bold" : "hover:font-bold"}`}
                    onClick={() => {
                        localStorage.setItem("theme", "light");
                        setTheme("light");
                    }}
                >
                    Light
                </p>
                <p
                    className={`opacity-60 transition-all ${theme === "dark" ? "font-bold" : "hover:font-bold"}`}
                    onClick={() => {
                        localStorage.setItem("theme", "dark");
                        setTheme("dark");
                    }}
                >
                    Dark
                </p>
            </div>
            <div className="h-screen w-screen">
                <MainPanel theme={theme} />
            </div>
        </>
    );
};

export default App;
