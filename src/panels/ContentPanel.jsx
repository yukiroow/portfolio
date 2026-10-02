import { PanelRightClose } from "lucide-react";
import Projects from "../content/Projects";
import About from "../content/About";
import Contact from "../content/Contact";

const ContentPanel = ({ theme, content, setContent }) => {
    return (
        <>
            <div className={`h-full w-full py-4`}>
                <div
                    className={`animate-slide-in-right relative h-full w-full rounded-l-2xl p-12 ${theme === "light" ? "pale-yellow-grid text-black" : "pale-purple-dots text-purple-100"}`}
                >
                    {content !== "none" && (
                        <div
                            className={`animate-fade-in absolute top-4 left-2 cursor-pointer items-end justify-end rounded-md p-1 ${theme === "light" ? "bg-amber-100" : "bg-purple-900"}`}
                        >
                            <PanelRightClose
                                className={`h-6 w-6 opacity-50 transition-all hover:opacity-20 ${theme === "light" ? "" : ""}`}
                                onClick={() => setContent("none")}
                            />
                        </div>
                    )}
                    {content === "projects" ? (
                        <Projects theme={theme} />
                    ) : content === "about" ? (
                        <About theme={theme} />
                    ) : (
                        <Contact theme={theme} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ContentPanel;
