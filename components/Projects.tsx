"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Instagram AI Studio",
        image: "/projects/instagram-ai-studio.png",
        description:
            "AI-powered Instagram content creation platform with image analysis, AI caption generation, hashtag generation, engagement prediction and sentiment analysis using Gemini AI and YOLOv8.",
        github: "https://lnkd.in/gS9FV79i",
        live: "https://lnkd.in/g4psucFz",
    },
    {
        title: "YOLO Vision AI",
        image: "/projects/yolo-vision-ai.png",
        description:
            "Real-time object detection system using YOLOv8 and OpenCV with webcam support and live predictions.",
        github: "https://lnkd.in/givENW74",
        live: "https://lnkd.in/gFZzvEyJ",
    },
    {
        title: "AI Cyber Security Assistant",
        image: "/projects/cyber-security.png",
        description:
            "AI-powered cyber security platform featuring phishing detection, password strength analysis and AI chatbot.",
        github: "https://lnkd.in/gFuuinMj",
        live: "https://lnkd.in/g_PcWmsp",
    },
    {
        title: "AI Hand Controller",
        image: "/projects/hand-controller.png",
        description:
            "Computer Vision project using OpenCV and MediaPipe for hand gesture recognition.",
        github: "https://lnkd.in/geF6ncHz",
        live: "",
    },
    {
        title: "Fake News Detection",
        image: "/projects/fake-news.png",
        description:
            "Machine Learning project that classifies news articles using NLP and Scikit-Learn.",
        github: "https://lnkd.in/gx37hQSU",
        live: "https://lnkd.in/gh7cZnpi",
    },
    {
        title: "House Price Prediction",
        image: "/projects/house-price.png",
        description:
            "Regression-based Machine Learning model for predicting house prices.",
        github: "https://lnkd.in/g8hxECZ3",
        live: "https://lnkd.in/gkUqmDPK",
    },
    {
        title: "AI Trip Planner",
        image: "/projects/trip-planner.png",
        description:
            "AI-powered travel planner that generates personalized travel itineraries.",
        github: "",
        live: "",
    },
    {
        title: "Student Attendance Tracker",
        image: "/projects/attendance.png",
        description:
            "Attendance management application built using Thunkable AI.",
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
                        Some of my best AI, Machine Learning and Full Stack projects.
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
                            className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition duration-300"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={350}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold mb-3">
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
                                            Live Demo
                                        </a>
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