"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] w-8 h-8 rounded-full bg-cyan-400/30 blur-xl"
            style={{
                transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
            }}
        />
    );
}