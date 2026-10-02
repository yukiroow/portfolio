import { useState, useEffect } from "react";
import MainPanel from "./panels/MainPanel";
import ContentPanel from "./panels/ContentPanel";
import ThemeSelector from "./components/ThemeSelector";
import DynamicBg from "./components/DynamicBg";

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
            <DynamicBg theme={theme} content={content} />
            <ThemeSelector theme={theme} setTheme={setTheme} />
            <div className="flex h-screen w-screen overflow-hidden">
                <MainPanel
                    theme={theme}
                    content={content}
                    setContent={setContent}
                />
                {content !== "none" && (
                    <ContentPanel
                        theme={theme}
                        content={content}
                        setContent={setContent}
                    />
                )}
            </div>
        </>
    );
};

export default App;
