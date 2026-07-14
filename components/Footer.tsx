"use client";

import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h3 className="text-2xl font-bold text-white">
                    MOHD AAMIR SALAM
                </h3>

                <p className="text-gray-400 mt-3">
                    AI / ML Engineer • Python Developer • Full Stack Developer
                </p>

                <p className="text-gray-500 mt-6 flex justify-center items-center gap-2">
                    Made with <FaHeart className="text-red-500" />
                    by MOHD AAMIR SALAM © 2026
                </p>

            </div>
        </footer>
    );
}