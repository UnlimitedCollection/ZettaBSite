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
        <div className="bg-green-500/20 text-green-100 p-4 rounded-xl flex items-center justify-center gap-2 border border-green-500/30 max-w-md mx-auto">
            <span className="material-symbols-outlined text-xl">check_circle</span>
            <span className="text-sm font-medium">Thanks for subscribing!</span>
        </div>
    ) : (
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
            <input type="email" required placeholder="Enter your email" className="flex-1 h-11 px-4 rounded-md text-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white" />
            <button type="submit" className="h-11 px-6 rounded-md bg-white text-primary text-sm font-semibold hover:bg-gray-50 transition-colors flex-shrink-0">Subscribe</button>
        </form>
    );
}
