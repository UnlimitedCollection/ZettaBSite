"use client";
import React, { useState } from "react";

export function NewsletterForm() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return isSubscribed ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center justify-center gap-2 border border-green-200 max-w-md mx-auto">
            <span className="material-symbols-outlined text-xl">check_circle</span>
            <span className="text-sm font-medium">Thanks for subscribing!</span>
        </div>
    ) : (
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
            <input type="email" required placeholder="Enter your email" className="flex-1 h-12 px-4 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            <button type="submit" className="motion-button h-12 px-8 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors flex-shrink-0">Subscribe</button>
        </form>
    );
}
