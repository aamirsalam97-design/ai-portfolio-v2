export default function Certificates() {
    return (
        <section id="certificates" className="py-24 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
                    Certificates
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-slate-800 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold">
                            AWS Cloud Computing
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Hands-on Cloud Computing and AWS Services.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold">
                            Python Programming
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Python for AI, Machine Learning and Automation.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}