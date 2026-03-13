"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
    "main section",
    "main section .grid > *",
    "main section .space-y-24 > *",
    "footer .grid > *",
    "footer .pt-4 > *",
];

export function MotionEffects() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.14,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        const seen = new Set<HTMLElement>();

        revealSelectors.forEach((selector) => {
            document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
                if (seen.has(element) || element.dataset.motionBound === "true") {
                    return;
                }

                seen.add(element);
                element.dataset.motionBound = "true";
                element.classList.add("reveal-up");
                element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 80, 360)}ms`);
                observer.observe(element);
            });
        });

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}