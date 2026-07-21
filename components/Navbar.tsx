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
                    ? "bg-slate-950/70 backdrop-blur-2xl border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

                {/* Logo */}

                <a
                    href="#home"
                    className="text-2xl font-extrabold tracking-tight hover:text-cyan-400 transition"
                >
                    MOHD AAMIR SALAM<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Navigation */}

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Buttons */}

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="/resume.pdf"
                        download
                        className="border border-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition font-medium"
                    >
                        ↓ Resume
                    </a>

                    <a
                        href="#contact"
                        className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold transition"
                    >
                        Hire Me →
                    </a>
                </div>

                {/* Mobile Button */}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}

            {isOpen && (
                <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10">
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
                            className="border border-cyan-400 rounded-full py-3 text-center hover:bg-cyan-500 hover:text-black transition"
                        >
                            ↓ Resume
                        </a>

                        <a
                            href="#contact"
                            className="bg-cyan-500 text-black rounded-full py-3 text-center font-semibold hover:bg-cyan-400 transition"
                        >
                            Hire Me →
                        </a>

                    </div>
                </div>
            )}
        </header>
    );
}