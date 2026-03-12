"use client";

import Link from "next/link";
import { useState } from "react";

export function FloatingContact() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Tooltip Popup (Speech Bubble) */}
            <div 
                className={`absolute bottom-full right-0 mb-4 transition-all duration-300 pointer-events-none origin-bottom-right ${
                    isHovered ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-2 scale-95"
                }`}
            >
                <div className="bg-white text-primary px-5 py-2.5 rounded-xl shadow-xl font-bold flex items-center gap-1.5 whitespace-nowrap border border-slate-100">
                    Get in Touch
                    <span className="text-lg">&rarr;</span>
                    {/* Tooltip Tail pointing down */}
                    <div className="absolute -bottom-2 right-5 border-[8px] border-transparent border-t-white"></div>
                </div>
            </div>

            {/* Floating Action Button */}
            <Link 
                href="/contact"
                className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:bg-[#0e45b5] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
                aria-label="Get in Touch"
            >
                <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            </Link>
        </div>
    );
}
