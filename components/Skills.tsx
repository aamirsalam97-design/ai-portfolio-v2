"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "C++", "JavaScript", "SQL"],
    },
    {
        title: "AI / Machine Learning",
        skills: [
            "Machine Learning",
            "Deep Learning",
            "Scikit-Learn",
            "Pandas",
            "NumPy",
            "OpenCV",
            "Generative AI",
        ],
    },
    {
        title: "Web Development",
        skills: [
            "HTML",
            "CSS",
            "Tailwind CSS",
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
        ],
    },
    {
        title: "Tools",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Streamlit",
            "Jupyter Notebook",
            "Vercel",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 bg-[#0f172a] text-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="text-cyan-400 uppercase tracking-widest">
                        My Skills
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Technical Skills
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
                        Technologies and tools I use to build AI-powered applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {skillCategories.map((category, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * .1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                        >

                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {category.skills.map((skill) => (

                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}