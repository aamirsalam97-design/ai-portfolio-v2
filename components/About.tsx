"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

const features = [
    {
        icon: <Brain className="w-8 h-8 text-cyan-400" />,
        title: "Artificial Intelligence",
        desc: "Building intelligent AI-powered applications using Machine Learning and Generative AI.",
    },
    {
        icon: <Code2 className="w-8 h-8 text-cyan-400" />,
        title: "Full Stack Development",
        desc: "Developing responsive web applications with React, Next.js, Node.js and Express.",
    },
    {
        icon: <Database className="w-8 h-8 text-cyan-400" />,
        title: "Data Science",
        desc: "Data preprocessing, visualization, model training and predictive analytics.",
    },
    {
        icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
        title: "Generative AI",
        desc: "Creating AI assistants, chatbots and intelligent automation using modern AI APIs.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-28 bg-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                        About Me
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Passionate AI Engineer
                    </h2>

                    <p className="max-w-3xl mx-auto mt-8 text-gray-400 leading-8 text-lg">

                        I'm <span className="text-white font-semibold">MOHD AAMIR SALAM</span>,
                        an AI-focused Computer Science graduate passionate about
                        Machine Learning, Data Science, Deep Learning and Generative AI.

                        <br /><br />

                        I enjoy solving real-world problems by building intelligent
                        applications using Python, Scikit-Learn, OpenCV,
                        SQL, Next.js and modern AI technologies.

                        My goal is to become a professional
                        AI / Machine Learning Engineer while contributing
                        to impactful products.

                    </p>

                </motion.div>

                {/* Stats */}

                <div className="grid md:grid-cols-4 gap-8 mt-20">

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition">
                        <h3 className="text-5xl font-bold text-cyan-400">15+</h3>
                        <p className="mt-3 text-gray-400">
                            Projects Completed
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition">
                        <h3 className="text-5xl font-bold text-cyan-400">6+</h3>
                        <p className="mt-3 text-gray-400">
                            AI Applications
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition">
                        <h3 className="text-5xl font-bold text-cyan-400">8+</h3>
                        <p className="mt-3 text-gray-400">
                            Certifications
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-500 transition">
                        <h3 className="text-5xl font-bold text-cyan-400">2025</h3>
                        <p className="mt-3 text-gray-400">
                            B.Tech Graduate
                        </p>
                    </div>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

                    {features.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6, delay: index * .15 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 leading-7">
                                {item.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}