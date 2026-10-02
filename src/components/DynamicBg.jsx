const DynamicBg = ({ theme, content }) => {
    return (
        <>
            {theme === "light" ? (
                <div className={`pattern-light -z-5 transition-all duration-500 ${content === "none" ? "" : "brightness-50"}`} />
            ) : (
                <div className="fixed -z-5 h-screen w-screen ambient-glow-box" /> //bg-linear-190 from-violet-950 to-gray-900
            )}
        </>
    );
};

export default DynamicBg;
