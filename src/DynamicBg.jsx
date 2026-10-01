const DynamicBg = ({ theme }) => {
    return (
        <>
            {theme === "light" ? (
                <div className="pattern-light -z-5" />
            ) : (
                <div className="fixed -z-5 h-screen w-screen bg-linear-190 from-violet-950 to-gray-900" />
            )}
        </>
    );
};

export default DynamicBg;
