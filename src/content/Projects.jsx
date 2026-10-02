const projects = [
    {
        title: "CW Hardware: POS and Inventory System",
        technologies: ["React", "Express", "MySQL"],
        descriptions: [
            "Led a 6-member team and served as the lead developer in developing a POS and Inventory System for a Hardware Store.",
            "The system includes basic POS and Inventory CRUD operations, along with additional convenience features to streamline the workflow of Warehouse and Store staff.",
            "The system is deployed using a Docker-based solution for sustainability.",
        ],
        image: "",
    },
    {
        title: "Terramap: IT Capstone Project",
        technologies: [
            "React",
            "Express",
            "MySQL",
            "Docker",
            "Python",
            "Deep Learning",
        ],
        descriptions: [
            "Led an 8-member team and served as the lead developer in developing a system to automate the creation of land cover maps with the use of deep learning technology, along with a web application to display the generated maps.",
            "Managed the project using an iterative waterfall SDLC model, where constant communication with the proponent for feedback is practiced, to ensure compliance with the project requirements.",
            "The system is deployed to an in-house server of the proponent, with the project components running as system services.",
        ],
        image: "",
    },
    {
        title: "Alumania: IT 312 Term Project",
        technologies: ["React", "Express", "MySQL"],
        descriptions: [
            "The project includes 2 modules: The Admin module, which allows site-wide administration, and the alumni module, which allows for the creation of user accounts and user posts, along with respective interaction features such as viewing, liking, and expressing interest in events or job listings.",
        ],
        image: "",
    },
];

const Projects = ({ theme }) => {
    const isLight = theme === "light";

    return (
        <div className="flex h-full min-h-0 flex-col">
            <div className="mb-8 flex shrink-0 flex-col gap-3">
                <h2 className="text-4xl font-bold">Projects</h2>
                <p className="font-light opacity-70">
                    A list of my personal and academic projects.
                </p>
            </div>

            {/* Scrollable project list */}
            <div className="min-h-0 flex-1 overflow-y-auto pr-3">
                <div className="flex flex-col gap-6 pb-4">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`group flex min-h-56 w-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                                isLight
                                    ? "border-amber-200/70 bg-white/50 shadow-sm hover:bg-white/70 hover:shadow-md"
                                    : "border-purple-800/50 bg-purple-950/30 hover:bg-purple-950/50 hover:shadow-lg hover:shadow-purple-950/30"
                            } `}
                        >
                            <div
                                className={`relative hidden w-64 shrink-0 overflow-hidden sm:block ${
                                    isLight ? "bg-amber-100" : "bg-purple-950"
                                } `}
                            >
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center">
                                        <span
                                            className={`text-5xl font-bold opacity-10 ${
                                                isLight
                                                    ? "text-amber-950"
                                                    : "text-purple-200"
                                            } `}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                )}

                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${
                                        isLight
                                            ? "from-transparent to-white/10"
                                            : "from-transparent to-purple-950/20"
                                    } `}
                                />
                            </div>

                            <div className="flex min-w-0 flex-1 flex-col p-6">
                                <div className="mb-4">
                                    <span
                                        className={`text-xs font-medium tracking-widest uppercase opacity-50`}
                                    >
                                        Project{" "}
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-1 text-xl leading-tight font-semibold">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="mb-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                isLight
                                                    ? "bg-amber-100/80 text-amber-950"
                                                    : "bg-purple-900/70 text-purple-200"
                                            } `}
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <ul
                                    className={`flex flex-col gap-2 pl-4 text-sm leading-relaxed ${
                                        isLight
                                            ? "text-black/65"
                                            : "text-purple-100/65"
                                    } `}
                                >
                                    {project.descriptions.map(
                                        (description, descriptionIndex) => (
                                            <li
                                                key={descriptionIndex}
                                                className="list-disc pl-1"
                                            >
                                                {description}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
