const ThemeSelector = ({ theme, setTheme }) => {
    return (
        <div
            className={`fixed top-20 right-0 flex h-5 w-fit rotate-90 cursor-pointer flex-row gap-5 font-extralight ${theme === "dark" ? "text-purple-200" : ""}`}
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
    );
};

export default ThemeSelector;
