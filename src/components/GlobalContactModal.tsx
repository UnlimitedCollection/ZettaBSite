"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm";

export function GlobalContactModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#contact-modal") {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        // Check on initial load
        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        // Remove hash without scrolling
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <button 
                    onClick={closeModal}
                    className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
                <div className="p-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
