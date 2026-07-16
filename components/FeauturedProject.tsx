"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedProject() {
    return (
        <section
            id="featured"
            className="py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                        Featured Project
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        AI Cyber Security Assistant
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                        An AI-powered cyber security platform that combines
                        Machine Learning, Generative AI and real-time security
                        analysis into one intelligent application.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <Image
                            src="/projects/cyber.png"
                            alt="AI Cyber Security Assistant"
                            width={700}
                            height={450}
                            className="rounded-3xl border border-cyan-500/30 shadow-2xl"
                        />

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
                            ⭐ Best AI Project
                        </span>

                        <h3 className="text-4xl font-bold mt-6 leading-tight">
                            Intelligent AI Platform for
                            <span className="text-cyan-400">
                                {" "}Cyber Security
                            </span>
                        </h3>

                        <p className="text-gray-400 leading-8 mt-8">
                            AI Cyber Security Assistant is an intelligent platform
                            built using Machine Learning, Python and Gemini AI.
                            It helps users detect phishing URLs, analyze password
                            strength, identify suspicious emails and interact with
                            an AI chatbot for cyber security guidance.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    Machine Learning
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    Phishing URL Detection
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    Gemini AI
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    AI Security Assistant
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    Streamlit
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    Interactive Dashboard
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    Accuracy
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    85.8% ML Model
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <a
                                href="https://ai-cyber-security-assistant-kbwxcjxbtjdbxdpghhan2g.streamlit.app/"
                                target="_blank"
                                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
                            >
                                Live Demo
                            </a>

                            <a
                                href="https://github.com/aamirsalam97-design"
                                target="_blank"
                                className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition font-semibold"
                            >
                                GitHub
                            </a>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}