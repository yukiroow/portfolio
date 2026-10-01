import { useState, useEffect } from "react";
import MainPanel from "./MainPanel";
import ThemeSelector from "./ThemeSelector";
import DynamicBg from "./DynamicBg";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [content, setContent] = useState("none"); // none, projects, about, contact

    useEffect(() => {
        if (!theme) {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }, []);

    return (
        <>
            <DynamicBg theme={theme} />
            <ThemeSelector theme={theme} setTheme={setTheme} />
            <div className="h-screen w-screen">
                <MainPanel theme={theme} content={content} setContent={setContent}/>
            </div>
        </>
    );
};

export default App;
