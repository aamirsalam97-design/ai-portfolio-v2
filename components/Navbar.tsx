"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

                <h1 className="text-2xl font-bold text-cyan-400">
                    Aamir<span className="text-white">.</span>
                </h1>

                <ul className="hidden md:flex gap-8 text-gray-300">

                    <li>
                        <a href="#home" className="hover:text-cyan-400">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-cyan-400">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-cyan-400">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-cyan-400">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-cyan-400">
                            Contact
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    );
}