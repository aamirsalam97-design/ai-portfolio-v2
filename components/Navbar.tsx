"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                {/* Logo */}

                <a href="#home" className="text-2xl font-extrabold">
                    <span className="text-cyan-400">MOHD</span>{" "}
                    <span className="text-white">AAMIR</span>
                </a>

                {/* Desktop */}

                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-cyan-400 transition duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Buttons */}

                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="/resume.pdf"
                        download
                        className="border border-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                    >
                        Resume
                    </a>

                    <a
                        href="#contact"
                        className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold transition"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile */}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}

            {isOpen && (
                <div className="lg:hidden bg-slate-950 border-t border-white/10">
                    <div className="flex flex-col px-6 py-6 gap-5">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-cyan-400"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="/resume.pdf"
                            download
                            className="border border-cyan-400 rounded-xl py-3 text-center"
                        >
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="bg-cyan-500 text-black rounded-xl py-3 text-center font-semibold"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}