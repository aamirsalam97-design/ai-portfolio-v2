"use client";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-cyan-400 uppercase tracking-widest">
                        Contact
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Let's Work Together
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
                        I am currently looking for AI/ML Internship, Python Developer,
                        Machine Learning Engineer and Software Development opportunities.
                        Feel free to contact me.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <a
                        href="mailto:aamirsalam97@gmail.com"
                        className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center hover:border-cyan-400 transition"
                    >
                        <FaEnvelope className="text-5xl mx-auto text-cyan-400 mb-5" />

                        <h3 className="text-2xl font-bold">
                            Email
                        </h3>

                        <p className="text-gray-400 mt-3 break-all">
                            aamirsalam97@gmail.com
                        </p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aamir-salam-76318b191"
                        target="_blank"
                        className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center hover:border-cyan-400 transition"
                    >
                        <FaLinkedin className="text-5xl mx-auto text-cyan-400 mb-5" />

                        <h3 className="text-2xl font-bold">
                            LinkedIn
                        </h3>

                        <p className="text-gray-400 mt-3">
                            Connect With Me
                        </p>
                    </a>

                    <a
                        href="https://github.com/aamirsalam97-design"
                        target="_blank"
                        className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center hover:border-cyan-400 transition"
                    >
                        <FaGithub className="text-5xl mx-auto text-cyan-400 mb-5" />

                        <h3 className="text-2xl font-bold">
                            GitHub
                        </h3>

                        <p className="text-gray-400 mt-3">
                            View My Projects
                        </p>
                    </a>

                </div>
            </div>
        </section>
    );
}