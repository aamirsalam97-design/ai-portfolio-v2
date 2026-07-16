"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Brain,
    Code2,
    Database,
    Sparkles,
    CheckCircle,
} from "lucide-react";

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

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30">

                            <Image
                                src="/images/profile.jpg"
                                alt="MOHD AAMIR SALAM"
                                width={500}
                                height={600}
                                className="w-full object-cover"
                            />

                        </div>

                        <div className="absolute -bottom-8 -right-8 bg-slate-900 border border-cyan-500 rounded-2xl px-8 py-6 shadow-2xl">

                            <h3 className="text-4xl font-bold text-cyan-400">
                                15+
                            </h3>

                            <p className="text-gray-300">
                                Projects Completed
                            </p>

                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
                            About Me
                        </p>

                        <h2 className="text-5xl font-bold mt-5 leading-tight">
                            Building AI Products That Solve
                            <span className="text-cyan-400"> Real Problems.</span>
                        </h2>

                        <p className="text-gray-400 mt-8 leading-8 text-lg">
                            I'm{" "}
                            <span className="text-white font-semibold">
                                MOHD AAMIR SALAM
                            </span>
                            , an AI-focused Computer Science graduate passionate about
                            Machine Learning, Deep Learning, Computer Vision,
                            Data Science and Generative AI.
                        </p>

                        <p className="text-gray-400 mt-6 leading-8">
                            I build intelligent applications using Python,
                            Scikit-Learn, OpenCV, SQL, Streamlit,
                            Next.js and modern AI technologies with a focus
                            on solving real-world problems.
                        </p>
                        <div className="mt-10 space-y-4">

                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-cyan-400" />
                                <span>AI / Machine Learning Engineer</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-cyan-400" />
                                <span>15+ Real World Projects</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-cyan-400" />
                                <span>Python • Machine Learning • GenAI</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-cyan-400" />
                                <span>Open to AI/ML Internship Opportunities</span>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                                <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
                                <p className="mt-2 text-gray-400">Projects</p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                                <h3 className="text-4xl font-bold text-cyan-400">6+</h3>
                                <p className="mt-2 text-gray-400">AI Apps</p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                                <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
                                <p className="mt-2 text-gray-400">Certificates</p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
                                <h3 className="text-4xl font-bold text-cyan-400">2025</h3>
                                <p className="mt-2 text-gray-400">Graduate</p>
                            </div>

                        </div>

                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
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

            </div>

        </section>
    );
}