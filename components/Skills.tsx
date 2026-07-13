export default function Skills() {
    const skills = [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Data Science",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SQL",
        "Git",
        "GitHub",
    ];

    return (
        <section id="skills" className="py-24 bg-black text-white">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-slate-900 hover:bg-blue-600 transition duration-300 rounded-xl p-6 text-center font-semibold shadow-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}