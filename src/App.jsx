import { useState, useEffect } from "react";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (!theme) {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }, []);

    console.log(theme);

    return (
        <>
            {theme === "light" ? (
                <div className="pattern-light -z-5"></div>
            ) : (
                <div className="fixed -z-5 h-screen w-screen bg-linear-190 from-violet-950 to-gray-900"></div>
            )}
            <div className={`fixed top-20 -right-5 flex h-5 w-fit rotate-90 flex-row gap-5 font-extralight ${theme === "dark" ? "text-purple-200" : ""}`}>
                <p
                    className={`opacity-60 transition-all hover:font-normal ${theme === "light" ? "font-bold hover:font-bold" : ""}`}
                    onClick={() => {
                        localStorage.setItem("theme", "light");
                        setTheme("light");
                    }}
                >
                    Light
                </p>
                <p
                    className={`opacity-60 transition-all hover:font-normal ${theme === "dark" ? "font-bold hover:font-bold" : ""}`}
                    onClick={() => {
                        localStorage.setItem("theme", "dark");
                        setTheme("dark");
                    }}
                >
                    Dark
                </p>
            </div>
            <div className="h-screen w-screen">
                <div className={`h-full w-full p-10`}>
                    <div className="grid h-full w-full grid-cols-3">
                        <div
                            className={`col-span-2 mt-[20%] flex h-full w-full flex-col gap-3 font-extralight ${theme === "dark" ? "text-purple-200" : " "}`}
                        >
                            <p>Hi there! I am</p>
                            <h1 className="text-7xl font-bold">
                                Harry Dominguez Jr.
                            </h1>
                            <div className="w-3/4">
                                <p className="text-xl">
                                    I'm a 4th Year Bachelor of Science in
                                    Information Technology student from Saint
                                    Louis University, Baguio. I'm working on
                                    becoming an{" "}
                                    <b>exceptional Software Engineer</b>.
                                </p>
                            </div>
                        </div>
                        <div className="row-span-2 flex h-full w-full flex-row-reverse">
                            <div className="flex w-1/2 flex-col justify-center">
                                <p
                                    className={`text-right font-black ${theme === "dark" ? "text-purple-200" : ""}`}
                                >
                                    <b>
                                        In pursuit of self-fulfillment through
                                        competence.
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div
                            className={`col-span-2 flex h-full w-full flex-col-reverse text-lg font-extralight ${theme === "dark" ? "text-purple-200" : ""}`}
                        >
                            <div className="flex flex-col">
                                <p
                                    className={`opacity-70 transition-all hover:translate-x-1 hover:font-normal hover:opacity-90`}
                                >
                                    Projects
                                </p>
                                <p
                                    className={`opacity-70 transition-all hover:translate-x-1 hover:font-normal hover:opacity-90`}
                                >
                                    About Me
                                </p>
                                <p
                                    className={`opacity-70 transition-all hover:translate-x-1 hover:font-normal hover:opacity-90`}
                                >
                                    Contact
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
