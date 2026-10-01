const ThemeSelector = ({ theme, setTheme }) => {
    return (
        <div
            className={`transition-all fixed top-20 -right-14 px-6 py-2 rounded-b-xl flex rotate-90 cursor-pointer flex-row gap-5 font-extralight hover:-right-13 ${theme === "dark" ? "text-purple-200 bg-purple-800" : "bg-amber-100"}`}
        >
            <p
                className={`opacity-60 transition-all ${theme === "light" ? "font-bold" : ""}`}
                onClick={() => {
                    localStorage.setItem("theme", "light");
                    setTheme("light");
                }}
            >
                Light
            </p>
            <p
                className={`opacity-60 transition-all ${theme === "dark" ? "font-bold" : ""}`}
                onClick={() => {
                    localStorage.setItem("theme", "dark");
                    setTheme("dark");
                }}
            >
                Dark
            </p>
        </div>
    );
};

export default ThemeSelector;
