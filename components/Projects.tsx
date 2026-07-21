"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Instagram AI Studio",
        image: "/projects/instagram-ai-studio.png",
        description:
            "AI-powered platform for image analysis, caption generation, hashtags, engagement prediction, sentiment analysis and AI-powered Instagram content creation.",
        tech: ["Python", "Flask", "Gemini AI", "YOLOv8", "OpenCV"],
        github: "https://lnkd.in/gS9FV79it",
        demo: "https://instagram-ai-studio.onrender.com/",
    },
    {
        title: "YOLO Vision AI",
        image: "/projects/yolo-vision.png",
        description:
            "Real-time object detection system using YOLOv8 and OpenCV with webcam support and live predictions.",
        tech: ["Python", "YOLOv8", "OpenCV"],
        github: "https://lnkd.in/givENW74",
        demo: " https://lnkd.in/givENW74",
    },
    {
        title: "AI Cyber Security Assistant",
        image: "/projects/cyber.png",
        description:
            "Machine Learning powered cyber security assistant for phishing detection, password analysis and AI guidance.",
        tech: ["Python", "ML", "Streamlit", "Gemini AI"],
        github: "https://github.com/aamirsalam97-design/AI-Cyber-Security-Assistant",
        demo: "#",
    },
    {
        title: "AI Trip Planner",
        image: "/projects/trip-planner.png",
        description:
            "Generative AI travel planner that creates personalized itineraries, budgets and destination recommendations.",
        tech: ["React", "Gemini AI", "Firebase"],
        github: "https://lnkd.in/g7RdszmU",
        demo: "https://lnkd.in/gazqz89r",
    },
    {
        title: "Fake News Detection",
        image: "/projects/fake-news.png",
        description:
            "Machine Learning model that classifies news articles as real or fake using NLP techniques.",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        github: "https://lnkd.in/gh7cZnpi",
        demo: "https://lnkd.in/gx37hQSU",
    },
    {
        title: "House Price Prediction",
        image: "/projects/house-price.png",
        description:
            "Regression-based Machine Learning application that predicts house prices using historical housing data.",
        tech: ["Python", "Scikit-Learn", "Pandas"],
        github: "https://lnkd.in/gkUqmDPK",
        demo: "https://lnkd.in/g8hxECZ3",
    },
    {
        title: "AI Hand Gesture Controller",
        image: "/projects/hand-control.png",
        description:
            "Computer Vision application that controls system functions using real-time hand gestures with MediaPipe and OpenCV.",
        tech: ["Python", "OpenCV", "MediaPipe"],
        github: "https://github.com/aamirsalam97-design/AI-Hand-Controller.git",
        demo: "#",
    },
    {
        title: "Face Attendance System",
        image: "/projects/face-attendance.png",
        description:
            "Face Recognition based attendance system that automatically identifies users and records attendance in real time.",
        tech: ["Python", "OpenCV", "Face Recognition"],
        github: "YOUR_GITHUB_LINK",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="uppercase tracking-widest text-cyan-400">
                        My Projects
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Featured AI Projects
                    </h2>

                    <p className="text-gray-400 mt-5">
                        Some of my best Artificial Intelligence and Machine Learning projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
                        >

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={350}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-4 text-sm leading-7">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-6">

                                    <a
                                        href={project.demo}
                                        className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl py-3"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        className="flex-1 text-center border border-cyan-500 rounded-xl py-3 hover:bg-cyan-500/10"
                                    >
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}