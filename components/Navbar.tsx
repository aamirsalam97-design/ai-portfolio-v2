export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                <h1 className="text-2xl font-bold text-blue-500">
                    Aamir<span className="text-white">.</span>
                </h1>

                <ul className="flex gap-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>
        </nav>
    );
}