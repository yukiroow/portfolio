import { Mail, Coffee, ArrowUpRight } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";

const Contact = ({ theme }) => {
    const isLight = theme === "light";

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

    const channels = [
        {
            label: "Email",
            value: "hcdominguez07@gmail.com",
            href: "mailto:hcdominguez07@gmail.com",
            icon: Mail,
        },
        {
            label: "GitHub",
            value: "github.com/yukiroow",
            href: "https://github.com/yukiroow",
            icon: SiGithub,
        },
        {
            label: "Instagram",
            value: "instagram.com/yukiroow",
            href: "https://www.instagram.com/yukiroow",
            icon: SiInstagram,
        },
    ];

    const details = [
        { label: "Home", value: "Baguio City, Philippines" },
        { label: "Work", value: "NCR, CAR, Clark" },
        { label: "Resume", value: "Available on Request" },
    ];

    return (
        <div className="flex h-full min-h-0 flex-col">
            {/* Header */}
            <div className="mb-8 flex shrink-0 flex-col gap-3">
                <h2 className="text-4xl font-bold">Contact</h2>
                <p className="font-light opacity-70">Digital footprint...</p>
            </div>

            {/* Scrollable body */}
            <div className="min-h-0 flex-1 overflow-y-auto pr-3">
                <div className="flex flex-col gap-6 pb-4">
                    {/* Intro */}
                    <p
                        className={`text-md leading-relaxed font-light ${
                            isLight ? "text-black/70" : "text-purple-100/70"
                        }`}
                    >
                        Have something to say?{" "}
                        <b
                            className={
                                isLight ? "text-black" : "text-purple-100"
                            }
                        >
                            Just LMK gng,
                        </b>{" "}
                        my inbox is always open.
                    </p>

                    {/* Contact channels */}
                    <div className="flex flex-col gap-4">
                        {channels.map((channel, index) => {
                            const Icon = channel.icon;
                            return (
                                <a
                                    key={channel.label}
                                    href={channel.href}
                                    target={
                                        channel.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel="noreferrer"
                                    className={`${cardStyle} group flex items-center gap-4`}
                                >
                                    <div
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                                            isLight
                                                ? "border-amber-200/70 bg-amber-100"
                                                : "border-purple-800/50 bg-purple-950"
                                        }`}
                                    >
                                        <Icon className="h-5 w-5 opacity-70" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className={labelStyle}>
                                            {String(index + 1).padStart(2, "0")}{" "}
                                            · {channel.label}
                                        </p>
                                        <p className="mt-1 truncate text-sm font-semibold">
                                            {channel.value}
                                        </p>
                                    </div>

                                    <ArrowUpRight className="h-5 w-5 shrink-0 opacity-30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Quick details */}
                    <div className="mt-2">
                        <span className={labelStyle}>Quick Details</span>
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

                    <div className={cardStyle}>
                        <div className="flex items-center gap-2">
                            <Coffee className="h-4 w-4 opacity-50" />
                            <p className={labelStyle}>Off the Clock</p>
                        </div>
                        <p className={`mt-2 ${bodyStyle}`}>
                            When I'm not on site, I'm probably sleeping, losing
                            at ranked games, or hunting down some good Spanish
                            Latte variant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
