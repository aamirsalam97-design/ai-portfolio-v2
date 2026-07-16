"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white">
                        MOHD AAMIR SALAM
                    </h2>

                    <p className="mt-3 text-gray-400">
                        AI / ML Engineer • Python Developer • Full Stack Developer
                    </p>

                    <div className="flex justify-center gap-8 mt-8 text-cyan-400">

                        <a
                            href="mailto:aamirsalam97@gmail.com"
                            className="hover:text-white transition"
                        >
                            Email
                        </a>

                        <a
                            href="https://github.com/aamirsalam97-design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aamir-salam-76318b191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>

                    </div>

                    <div className="border-t border-slate-800 mt-10 pt-6">

                        <p className="text-gray-500 text-sm">
                            Made with ❤️ by{" "}
                            <span className="text-cyan-400 font-semibold">
                                MOHD AAMIR SALAM
                            </span>{" "}
                            © 2026
                        </p>

                        <p className="mt-2 text-gray-600 text-sm">
                            AI • Machine Learning • Full Stack Development
                        </p>

                    </div>
                </motion.div>
            </div>
        </footer>
    );
}