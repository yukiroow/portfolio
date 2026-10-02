const menuBaseStyle = "hover:translate-x-1 hover:font-normal hover:opacity-90";
const menuSelectedStyle = "translate-x-1 font-normal opacity-90";

const MainPanel = ({ theme, content, setContent }) => {
    return (
        <div
            className={`h-full min-w-xl transition-all duration-500 ${content === "none" ? "w-full" : "w-1/4"} p-10`}
        >
            <div
                className={`h-full ${content === "none" ? "grid grid-cols-3 font-extralight" : "flex flex-col gap-10"} `}
            >
                <div
                    className={`${content === "none" ? "col-span-2 mt-[20%] flex h-full w-full flex-col gap-3" : "mt-[30%]"} ${theme === "dark" ? "text-purple-200" : ""}`}
                >
                    <p className="animate-fade-in-right">Hi there! I am</p>
                    <h1
                        className={`animate-fade-in-right font-bold transition-all duration-500 ${content === "none" ? "text-7xl" : "text-3xl"}`}
                    >
                        Harry Dominguez Jr.
                    </h1>
                    <div className="mt-4 w-3/4">
                        <p
                            className={`animate-fade-in-right text-justify transition-all ${content === "none" ? "text-xl" : "text-sm"}`}
                        >
                            I'm a 4th Year Bachelor of Science in Information
                            Technology student from Saint Louis University,
                            Baguio. I'm working on becoming an{" "}
                            <b>exceptional Software Engineer</b>.
                        </p>
                    </div>
                </div>
                <div
                    className={`${content === "none" ? "flex h-full w-full flex-row-reverse transition-all duration-500" : "col-span-2 flex justify-start"}`}
                >
                    <div className="flex w-1/2 flex-col justify-center">
                        <p
                            className={`animate-fade-in-left font-black transition-all duration-500 ${content === "none" ? "text-right" : "text-left"} ${theme === "dark" ? "text-purple-200" : ""}`}
                        >
                            <b>
                                In pursuit of self-fulfillment through
                                competence.
                            </b>
                        </p>
                    </div>
                </div>
                <div
                    className={`${content === "none" ? "col-span-2 flex h-full w-full flex-col-reverse text-lg" : ""} ${theme === "dark" ? "text-purple-200" : ""}`}
                >
                    <div className="animate-fade-in-right flex cursor-pointer flex-col font-extralight opacity-70">
                        <p
                            className={`transition-all ${content === "about" ? menuSelectedStyle : menuBaseStyle}`}
                            onClick={() => setContent("about")}
                        >
                            About Me
                        </p>
                        <p
                            className={`transition-all ${content === "projects" ? menuSelectedStyle : menuBaseStyle}`}
                            onClick={() => setContent("projects")}
                        >
                            Projects
                        </p>
                        <p
                            className={`transition-all ${content === "contact" ? menuSelectedStyle : menuBaseStyle}`}
                            onClick={() => setContent("contact")}
                        >
                            Contact
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPanel;
