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
                        Instagram AI Studio
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                        An AI-powered web application that helps content creators
                        generate captions, hashtags, analyze images, predict
                        engagement, and optimize Instagram content using
                        Gemini AI and YOLOv8.
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
                            src="/projects/instagram-ai-studio.png"
                            alt="Instagram AI Studio"
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
                            🚀 Latest AI Project
                        </span>

                        <h3 className="text-4xl font-bold mt-6 leading-tight">
                            AI-Powered Platform for
                            <span className="text-cyan-400">
                                {" "}Instagram Content Creation
                            </span>
                        </h3>

                        <p className="text-gray-400 leading-8 mt-8">
                            Instagram AI Studio is an AI-powered platform built
                            with Flask, Gemini AI, YOLOv8, and OpenCV. It helps
                            creators analyze images, generate engaging captions
                            and hashtags, predict engagement, perform sentiment
                            analysis, create AI-powered replies, and improve
                            Instagram content through one intelligent dashboard.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    YOLOv8 + OpenCV
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    Object Detection & Image Analysis
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    Gemini AI
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    Caption & Hashtag Generation
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    Flask
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    Full-Stack Web Application
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5">
                                <h4 className="text-cyan-400 font-bold">
                                    AI Analytics
                                </h4>

                                <p className="text-gray-400 text-sm mt-2">
                                    Engagement Prediction
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-wrap gap-3 mt-10">

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                Python
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                Flask
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                Gemini AI
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                YOLOv8
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                OpenCV
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                HTML
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                CSS
                            </span>

                            <span className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-sm">
                                JavaScript
                            </span>

                        </div>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
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