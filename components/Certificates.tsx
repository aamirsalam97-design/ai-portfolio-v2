"use client";

import { motion } from "framer-motion";
import {
    FaCertificate,
    FaAws,
    FaPython,
    FaDatabase,
    FaRobot,
    FaCode,
} from "react-icons/fa";

const certificates = [
    {
        title: "AWS Cloud Computing",
        issuer: "Amazon Web Services",
        icon: <FaAws className="text-4xl text-orange-400" />,
    },
    {
        title: "Python Programming",
        issuer: "Python",
        icon: <FaPython className="text-4xl text-yellow-400" />,
    },
    {
        title: "Machine Learning",
        issuer: "AI / ML",
        icon: <FaRobot className="text-4xl text-cyan-400" />,
    },
    {
        title: "SQL & Database",
        issuer: "Database",
        icon: <FaDatabase className="text-4xl text-green-400" />,
    },
    {
        title: "Web Development",
        issuer: "HTML • CSS • JavaScript",
        icon: <FaCode className="text-4xl text-blue-400" />,
    },
    {
        title: "Artificial Intelligence",
        issuer: "AI",
        icon: <FaCertificate className="text-4xl text-purple-400" />,
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="py-24 bg-[#020617] text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 uppercase tracking-widest">
                        Certificates
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        My Certifications
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                        Certifications and technical skills that support my AI,
                        Machine Learning and Software Development journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition"
                        >
                            <div className="mb-6">
                                {certificate.icon}
                            </div>

                            <h3 className="text-2xl font-bold">
                                {certificate.title}
                            </h3>

                            <p className="text-gray-400 mt-3">
                                {certificate.issuer}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}