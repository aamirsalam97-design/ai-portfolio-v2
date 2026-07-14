"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "AI Cyber Security Assistant",
        description:
            "AI-powered cyber security platform with phishing detection, password analyzer and AI chatbot.",
        github: "https://lnkd.in/gFuuinMj",
        live: "https://lnkd.in/g_PcWmsp",
    },
    {
        title: "AI Hand Controller",
        description:
            "Hand gesture recognition system using OpenCV and MediaPipe for controlling games.",
        github: "https://lnkd.in/geF6ncHz",
        live: "",
    },
    {
        title: "Fake News Detection",
        description:
            "Machine Learning based fake news detection using NLP and Scikit-Learn.",
        github: "https://lnkd.in/gx37hQSU",
        live: "https://lnkd.in/gh7cZnpi",
    },
    {
        title: "House Price Prediction",
        description:
            "Regression model for predicting house prices using Machine Learning.",
        github: "https://lnkd.in/g8hxECZ3",
        live: "https://lnkd.in/gkUqmDPK",
    },
    {
        title: "AI Trip Planner",
        description:
            "AI-powered travel planning application with smart recommendations.",
        github: "",
        live: "",
    },
    {
        title: "Student Attendance Tracker",
        description:
            "Attendance management prototype built using Thunkable AI.",
        github: "",
        live: "",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 uppercase tracking-widest">
                        Portfolio
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Featured Projects
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                        Some of my AI, Machine Learning and Full Stack projects.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6">
                                {project.description}
                            </p>

                            <div className="flex gap-3">

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex justify-center items-center gap-2 border border-cyan-400 rounded-lg py-3 hover:bg-cyan-500 hover:text-black transition"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>
                                )}

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 text-black rounded-lg py-3 hover:bg-cyan-400 transition"
                                    >
                                        <FaExternalLinkAlt />
                                        Live
                                    </a>
                                )}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}