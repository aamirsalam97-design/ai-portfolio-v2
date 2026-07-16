"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "AI Hand Controller",
        image: "/projects/handcontroller.png",
        description:
            "An AI-powered Computer Vision application that detects hand gestures in real time using OpenCV and MediaPipe, allowing users to control games and applications through natural hand movements.",
        tech: [
            "Python",
            "OpenCV",
            "MediaPipe",
            "Computer Vision",
            "PyAutoGUI",
        ],
        github: "https://github.com/aamirsalam97-design/AI-Hand-Controller",
        live: "#", // Add YouTube Demo Link Here
        badge: "FEATURED",
    },

    {
        title: "AI Cyber Security Assistant",
        image: "/projects/cybersecurity.png",
        description:
            "AI-powered cyber security platform featuring phishing detection, password strength analysis, AI chatbot assistance, and interactive security tools.",
        tech: [
            "Python",
            "Machine Learning",
            "Streamlit",
            "Gemini AI",
        ],
        github: "https://github.com/aamirsalam97-design",
        live:
            "https://ai-cyber-security-assistant-kbwxcjxbtjdbxdpghhan2g.streamlit.app/",
        badge: "LIVE",
    },

    {
        title: "Fake News Detection",
        image: "/projects/fakenews.png",
        description:
            "Machine Learning project that classifies news articles as real or fake using NLP techniques and Scikit-Learn models.",
        tech: [
            "Python",
            "NLP",
            "Scikit-Learn",
            "Machine Learning",
        ],
        github: "https://github.com/aamirsalam97-design",
        live: "#",
        badge: "ML",
    },

    {
        title: "House Price Prediction",
        image: "/projects/houseprice.png",
        description:
            "Regression-based Machine Learning model that predicts house prices using cleaned datasets and feature engineering techniques.",
        tech: [
            "Python",
            "Regression",
            "Pandas",
            "Scikit-Learn",
        ],
        github:
            "https://github.com/aamirsalam97-design/House-Price-Prediction-ML",
        live: "https://house-price-prediction.streamlit.app/",
        badge: "LIVE",
    },

    {
        title: "AI Trip Planner",
        image: "/projects/tripplanner.png",
        description:
            "Smart AI travel planner that generates personalized travel itineraries and destination recommendations using Gemini AI.",
        tech: [
            "Next.js",
            "Gemini AI",
            "Tailwind CSS",
            "JavaScript",
        ],
        github:
            "https://github.com/aamirsalam97-design/AI-Trip-Planner",
        live: "#",
        badge: "AI",
    },

    {
        title: "AI Attendance System",
        image: "/projects/attendance.png",
        description:
            "AI-powered attendance management system using face recognition and Computer Vision for automated student attendance.",
        tech: [
            "Python",
            "OpenCV",
            "Face Recognition",
            "Machine Learning",
        ],
        github: "https://github.com/aamirsalam97-design",
        live: "#",
        badge: "PROJECT",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-28 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                        Portfolio
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Featured Projects
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        A collection of my Artificial Intelligence, Machine Learning,
                        Computer Vision and Full Stack Development projects.
                    </p>

                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                            }}
                            className="overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                        >

                            {/* Image */}
                            <div className="relative">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-56 object-cover"
                                />

                                <span className="absolute top-4 left-4 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                    {project.badge}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-2xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-7 mb-5">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
                                    >
                                        GitHub
                                    </a>

                                    {project.live !== "#" ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 text-center py-3 rounded-xl bg-slate-700 text-slate-400 cursor-not-allowed"
                                        >
                                            Coming Soon
                                        </button>
                                    )}

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}