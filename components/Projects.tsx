export default function Projects() {
    const projects = [
        {
            title: "AI Interview Assistant",
            tech: "Python • OpenAI • Streamlit",
            description:
                "An AI-powered interview preparation assistant with intelligent question generation.",
            github: "https://github.com/aamirsalam97-design",
        },
        {
            title: "House Price Prediction",
            tech: "Python • Machine Learning • Streamlit",
            description:
                "Machine Learning model that predicts house prices using real-world datasets.",
            github: "https://github.com/aamirsalam97-design/House-Price-Prediction-ML",
        },
        {
            title: "AI Trip Planner",
            tech: "Next.js • AI • JavaScript",
            description:
                "Smart travel planner that generates personalized trip itineraries using AI.",
            github: "https://github.com/aamirsalam97-design/AI-Trip-Planner",
        },
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                            <p className="text-blue-400 mb-3">{project.tech}</p>

                            <p className="text-gray-300 mb-6">
                                {project.description}
                            </p>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}