const MainPanel = ({ theme }) => {
    return (
        <div className={`h-full w-full p-10`}>
            <div className="grid h-full w-1/2 grid-cols-3">
                <div
                    className={`col-span-2 mt-[20%] flex h-full w-full flex-col gap-3 font-extralight ${theme === "dark" ? "text-purple-200" : " "}`}
                >
                    <p className="animate-fade-in-right">Hi there! I am</p>
                    <h1 className="animate-fade-in-right text-7xl font-bold">
                        Harry Dominguez Jr.
                    </h1>
                    <div className="w-3/4">
                        <p className="animate-fade-in-right text-xl">
                            I'm a 4th Year Bachelor of Science in Information
                            Technology student from Saint Louis University,
                            Baguio. I'm working on becoming an{" "}
                            <b>exceptional Software Engineer</b>.
                        </p>
                    </div>
                </div>
                <div className="row-span-2 flex h-full w-full flex-row-reverse">
                    <div className="flex w-1/2 flex-col justify-center">
                        <p
                            className={`animate-fade-in-left text-right font-black ${theme === "dark" ? "text-purple-200" : ""}`}
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
                    <div className="animate-fade-in-right flex cursor-pointer flex-col">
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
    );
};

export default MainPanel;
