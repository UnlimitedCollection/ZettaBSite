"use client";

import { useState, useEffect } from "react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll position
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="flex justify-center items-center w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl hover:-translate-y-1 hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    <span className="material-symbols-outlined font-bold text-xl">
                        arrow_upward
                    </span>
                </button>
            )}
        </div>
    );
}
