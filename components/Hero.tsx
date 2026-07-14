"use client";

import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />

                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[150px]" />

                <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[180px]" />
            </div>

            <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Badge */}

                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-medium mb-8">

                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                        OPEN TO AI/ML INTERNSHIPS • INDIA

                    </div>

                    {/* Heading */}

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">

                        I build intelligent

                        <br />

                        <span className="text-cyan-400">

                            AI solutions.

                        </span>

                    </h1>

                    <h2 className="mt-8 text-3xl md:text-4xl font-bold">

                        MOHD AAMIR SALAM

                    </h2>

                    <TypeAnimation
                        sequence={[
                            "AI/ML Engineer",
                            2000,
                            "Python Developer",
                            2000,
                            "Machine Learning Engineer",
                            2000,
                            "Generative AI Enthusiast",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="block text-cyan-400 text-2xl mt-5 font-semibold"
                    />

                    {/* Summary */}

                    <p className="mt-8 max-w-2xl text-gray-300 text-lg leading-9">

                        AI-focused Computer Science graduate with hands-on experience
                        in Machine Learning, Data Analysis, Python, SQL, and
                        Generative AI.

                        <br />
                        <br />

                        Built predictive models using Scikit-Learn and developed
                        AI-powered applications using modern AI APIs.

                        Passionate about solving real-world problems through
                        intelligent, data-driven software solutions.

                    </p>
                    {/* Buttons */}

                    <div className="flex flex-wrap gap-5 mt-12">

                        <a
                            href="#projects"
                            className="group bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                        >
                            View My Work
                            <FaArrowRight className="group-hover:translate-x-1 transition" />
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="border border-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300"
                        >
                            <FaDownload />
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all duration-300"
                        >
                            Hire Me
                        </a>

                    </div>

                    {/* Social Icons */}

                    <div className="flex items-center gap-6 mt-10">

                        <a
                            href="https://github.com/aamirsalam97-design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
                        >
                            <FaGithub size={24} />
                        </a>

                        <a
                            href="https://linkedin.com/in/aamir-salam-76318b191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>

                    </div>

                    {/* Stats */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                        <div>
                            <h3 className="text-4xl font-bold text-cyan-400">
                                <CountUp end={15} duration={3} />+
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Projects
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-cyan-400">
                                <CountUp end={6} duration={3} />+
                            </h3>

                            <p className="text-gray-400 mt-2">
                                AI Projects
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-cyan-400">
                                <CountUp end={8} duration={3} />+
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Certifications
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-cyan-400">
                                <CountUp end={2025} duration={4} />
                            </h3>

                            <p className="text-gray-400 mt-2">
                                Graduate
                            </p>
                        </div>

                    </div>

                </motion.div>

                {/* RIGHT SIDE */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >

                    {/* Profile Card */}

                    <div className="relative">

                        {/* Glow */}

                        <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-30 animate-pulse"></div>

                        {/* Card */}

                        <div className="relative w-[420px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

                            {/* Profile */}

                            <div className="flex flex-col items-center">

                                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl">

                                    <Image
                                        src="/images/profile.jpg"
                                        alt="MOHD AAMIR SALAM"
                                        width={220}
                                        height={220}
                                        priority
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <h2 className="text-3xl font-bold mt-6">
                                    MOHD AAMIR SALAM
                                </h2>

                                <p className="text-cyan-400 mt-2">
                                    AI/ML Engineer
                                </p>

                            </div>

                            {/* Tech Stack */}

                            <div className="grid grid-cols-2 gap-4 mt-10">

                                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">
                                    🤖 Machine Learning
                                </div>

                                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">
                                    🧠 Generative AI
                                </div>

                                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">
                                    🐍 Python
                                </div>

                                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-center">
                                    💻 Full Stack
                                </div>

                            </div>

                            {/* Bottom Stats */}

                            <div className="mt-10 border-t border-white/10 pt-6 flex justify-between">

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-cyan-400">
                                        15+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Projects
                                    </p>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-cyan-400">
                                        6+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        AI Apps
                                    </p>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-cyan-400">
                                        8+
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Certificates
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Floating Tech Badges */}

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -top-5 -left-8 bg-cyan-500 text-black px-4 py-2 rounded-xl font-semibold shadow-lg"
                        >
                            Python
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute top-20 -right-10 bg-purple-600 px-4 py-2 rounded-xl"
                        >
                            AI
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5 }}
                            className="absolute bottom-16 -left-10 bg-blue-600 px-4 py-2 rounded-xl"
                        >
                            ML
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 right-10 bg-green-500 text-black px-4 py-2 rounded-xl font-semibold"
                        >
                            GenAI
                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section >
    );
}