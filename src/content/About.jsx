import React from "react";

const About = ({ theme }) => {
    const isLight = theme === "light";

    const profileImage = "/pfp.jpg";

    const sections = [
        {
            label: "Who I Am",
            body: (
                <>
                    I'm a <b>Bachelor of Science in Information Technology</b>{" "}
                    graduate from Saint Louis University, Baguio. I'm driven by
                    the pursuit of becoming an{" "}
                    <b>exceptional Software Engineer</b>. By exceptional, I mean
                    the guy that gets work done on time and on budget,
                    fully-caffeinated.
                </>
            ),
        },
        {
            label: "What I Do",
            body: (
                <>
                    I currently specialize in full-stack web development with{" "}
                    <b>React, Express</b>, and I've led teams in delivering
                    production-grade systems from a POS &amp; Inventory platform
                    for a hardware store, to a deep-learning-powered land cover
                    mapping system.{" "}
                    <b>Clean code is what I eat for breakfast.</b>
                </>
            ),
        },
        {
            label: "How I Work",
            body: (
                <>
                    I can thrive in environments where communication is constant
                    and feedback drives progress. I made sure that throughout my
                    time in university I was always exposed to projects where I
                    was always in a position to learn. Call me Mahoraga the way
                    I'm bout to adapt to your company's culture and tech stack.
                </>
            ),
        },
    ];

    const details = [
        { label: "Location", value: "Baguio City, Philippines" },
        { label: "Degree", value: "BS Information Technology" },
        { label: "University", value: "Saint Louis University" },
        { label: "Focus", value: "Full-Stack Development" },
        { label: "Status", value: "Alive" },
        { label: "Work", value: "Corpo-maxxing" },
    ];

    const cardStyle = `rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 ${
        isLight
            ? "border-amber-200/70 bg-white/50 hover:bg-white/70 hover:shadow-sm"
            : "border-purple-800/50 bg-purple-950/30 hover:bg-purple-950/50 hover:shadow-lg hover:shadow-purple-950/30"
    }`;

    const labelStyle =
        "text-xs font-medium tracking-widest uppercase opacity-50";

    const bodyStyle = `text-sm leading-relaxed ${
        isLight ? "text-black/65" : "text-purple-100/65"
    }`;

    return (
        <div className="flex h-full min-h-0 flex-col">
            <div className="mb-8 flex shrink-0 flex-col gap-3">
                <h2 className="text-4xl font-bold">About Me</h2>
                <p className="font-light opacity-70">
                    A little context behind the code.
                </p>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto pr-3">
                <div className="flex flex-col gap-6 pb-4">
                    <div className={`${cardStyle} flex items-center gap-4`}>
                        <div
                            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-full border ${
                                isLight
                                    ? "border-amber-200/70 bg-amber-100"
                                    : "border-purple-800/50 bg-purple-950"
                            }`}
                        >
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Harry Dominguez Jr."
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center">
                                    <span
                                        className={`text-2xl font-bold opacity-20 ${
                                            isLight
                                                ? "text-amber-950"
                                                : "text-purple-200"
                                        }`}
                                    >
                                        HD
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex min-w-0 flex-col">
                            <p className={labelStyle}>Me Card</p>
                            <h3 className="mt-1 text-lg leading-tight font-semibold">
                                Harry Covalles Dominguez Jr.
                            </h3>
                            <p
                                className={`text-sm ${
                                    isLight
                                        ? "text-black/60"
                                        : "text-purple-100/60"
                                }`}
                            >
                                Software Engineer · Baguio City
                            </p>
                        </div>
                    </div>

                    {sections.map((section, index) => (
                        <div key={section.label} className={cardStyle}>
                            <p className={labelStyle}>
                                {String(index + 1).padStart(2, "0")} ·{" "}
                                {section.label}
                            </p>
                            <p className={`mt-2 ${bodyStyle}`}>
                                {section.body}
                            </p>
                        </div>
                    ))}

                    <div className="mt-2">
                        <span className={labelStyle}>Quick Facts</span>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {details.map((item) => (
                                <div key={item.label} className={cardStyle}>
                                    <p className={labelStyle}>{item.label}</p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
