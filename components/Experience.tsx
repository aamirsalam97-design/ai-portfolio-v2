"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2022 - 2025",
        title: "B.Tech - Computer Science & Engineering (Artificial Intelligence)",
        company: "Galgotias University",
        description:
            "Completed B.Tech with specialization in Artificial Intelligence. Studied Machine Learning, Data Structures, DBMS, Operating Systems, Cloud Computing and Software Engineering. Built multiple AI-powered applications using Python, Machine Learning and Generative AI.",
    },
    {
        year: "2020 - 2022",
        title: "Diploma in Computer Science Engineering",
        company: "Galgotias College of Engineering & Technology (GCET) / Galgotias University Polytechnic",
        description:
            "Completed Diploma in Computer Science Engineering with a CGPA of 7.9/10. Built a strong foundation in Programming, C, C++, Data Structures, DBMS, Web Development and Software Engineering.",
    },
    {
        year: "2017",
        title: "Secondary School (Class X)",
        company: "R.K. Public School, Kithore Garh Road, Meerut",
        description:
            "Board: SBSE • CGPA: 8.7/10. Developed a strong academic foundation in Mathematics, Science and Computer Fundamentals.",
    },
    {
        year: "2025",
        title: "AI/ML Projects",
        company: "Personal Portfolio",
        description:
            "Developed Instagram AI Studio, YOLO Vision AI, AI Cyber Security Assistant, Fake News Detection, House Price Prediction, AI Hand Controller, AI Trip Planner and Face Attendance System using Python, Machine Learning, Computer Vision and Generative AI.",
    },
    {
        year: "2025",
        title: "Internship & Professional Learning",
        company: "Self Learning & Professional Development",
        description:
            "Focused on Artificial Intelligence, Python, Machine Learning, Computer Vision, Generative AI, Full Stack Development, Git, GitHub and deployment using Streamlit, Vercel and modern AI technologies.",
    },
];

export default function Experience() {
    return (
        <section
            id="journey"
            className="py-24 bg-slate-950 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="text-cyan-400 uppercase tracking-widest">
                        My Journey
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        Education & Experience
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
                        My academic journey and professional growth in Artificial Intelligence, Machine Learning and Software Development.
                    </p>
                </div>

                <div className="relative border-l-2 border-cyan-500 ml-4">

                    {timeline.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="mb-12 ml-8 relative"
                        >

                            <div className="absolute -left-12 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950"></div>

                            <p className="text-cyan-400 font-semibold">
                                {item.year}
                            </p>

                            <h3 className="text-2xl font-bold mt-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 font-medium mt-1">
                                {item.company}
                            </p>

                            <p className="text-gray-400 mt-4 leading-7">
                                {item.description}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}