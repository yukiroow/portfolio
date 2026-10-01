import { PanelRightClose } from "lucide-react";

const ContentPanel = ({ theme, content, setContent }) => {
    return (
        <>
            <div className={`h-full w-full py-4`}>
                <div
                    className={`animate-slide-in-right relative h-full w-full rounded-l-2xl p-18 ${theme === "light" ? "bg-amber-100" : ""}`}
                >
                    {content !== "none" && (
                        <div className="absolute top-4 left-2 cursor-pointer items-end justify-end transition-all hover:opacity-90">
                            <PanelRightClose
                                className={`animate-fade-in h-6 w-6 ${theme === "light" ? "text-black" : "text-purple-100"}`}
                                onClick={() => setContent("none")}
                            />
                        </div>
                    )}
                    {content === "projects" ? (
                        <div>Projects</div>
                    ) : content === "about" ? (
                        <div>About</div>
                    ) : (
                        <div>Contact</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ContentPanel;
