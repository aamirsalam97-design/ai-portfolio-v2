export default function Experience() {
    const timeline = [
        {
            year: "2026",
            title: "AI Portfolio Development",
            description:
                "Built a modern AI portfolio using Next.js, Tailwind CSS, TypeScript and Framer Motion.",
        },
        {
            year: "2026",
            title: "Machine Learning Projects",
            description:
                "Developed AI Interview Assistant, House Price Prediction and AI Trip Planner projects.",
        },
        {
            year: "2025 - Present",
            title: "B.Tech CSE (AI)",
            description:
                "Pursuing Computer Science & Engineering with specialization in Artificial Intelligence.",
        },
    ];

    return (
        <section id="experience" className="py-24 bg-black text-white">
            <div className="max-w-6xl mx-auto px-8">

                <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
                    Experience & Journey
                </h2>

                <div className="space-y-8">

                    {timeline.map((item) => (
                        <div
                            key={item.title}
                            className="bg-slate-900 rounded-2xl p-8 border-l-4 border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-lg transition-all duration-300"
                        >
                            <p className="text-cyan-400 font-bold mb-2">
                                {item.year}
                            </p>

                            <h3 className="text-2xl font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}