"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-xl mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Mohd <span className="text-blue-500">Aamir Salam</span>
                    </h1>

                    <TypeAnimation
                        sequence={[
                            "Artificial Intelligence Engineer",
                            2000,
                            "Machine Learning Engineer",
                            2000,
                            "Python Developer",
                            2000,
                            "Full Stack Developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block text-2xl md:text-3xl mt-6 text-cyan-400 font-semibold"
                    />

                    <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
                        Passionate about Artificial Intelligence, Machine Learning,
                        Deep Learning, Data Science, Python, Next.js and building
                        intelligent real-world applications.
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">
                        <a
                            href="#projects"
                            className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="border border-cyan-400 hover:bg-cyan-500 hover:text-black px-7 py-3 rounded-xl flex items-center gap-2 transition"
                        >
                            <FaDownload />
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-6 mt-8 text-3xl">
                        <a
                            href="https://github.com/aamirsalam97-design"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="hover:text-cyan-400 transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aamir-salam-76318b191"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="hover:text-cyan-400 transition" />
                        </a>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                            <Image
                                src="/images/profile.jpg"
                                alt="Mohd Aamir Salam"
                                width={320}
                                height={320}
                                loading="eager"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}