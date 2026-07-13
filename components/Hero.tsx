"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-blue-400 text-xl mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-6xl font-bold leading-tight">
                        Mohd <span className="text-blue-500">Aamir Salam</span>
                    </h1>

                    <h2 className="text-3xl mt-6 text-gray-300">
                        Artificial Intelligence Engineer
                    </h2>

                    <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
                        Passionate about Artificial Intelligence, Machine Learning,
                        Deep Learning, Python, Data Science and building intelligent,
                        scalable real-world applications.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl">
                            View Projects
                        </button>

                        <button className="border border-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl">
                            Resume
                        </button>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-8xl">
                            <Image
                                src="/images/profile.jpg"
                                alt="Mohd Aamir Salam"
                                width={300}
                                height={300}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}