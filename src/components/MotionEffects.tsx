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

const routeStaggerConfig: Record<string, { base: number; step: number; mod: number }> = {
    "/": { base: 30, step: 65, mod: 8 },
    "/case-study-ecommerce-redesign": { base: 40, step: 80, mod: 7 },
    "/services": { base: 40, step: 70, mod: 7 },
    "/about": { base: 50, step: 80, mod: 6 },
};

function getStaggerConfig(pathname: string) {
    return routeStaggerConfig[pathname] ?? { base: 45, step: 75, mod: 6 };
}

export function MotionEffects() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const stagger = getStaggerConfig(pathname);

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
                const delay = stagger.base + (index % stagger.mod) * stagger.step;
                element.style.setProperty("--reveal-delay", `${Math.min(delay, 620)}ms`);
                observer.observe(element);
            });
        });

        const parallaxTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-speed]"));
        let ticking = false;

        const updateParallax = () => {
            const viewportCenter = window.innerHeight * 0.5;

            parallaxTargets.forEach((element) => {
                const speed = Number(element.dataset.parallaxSpeed ?? "0.05");
                const rect = element.getBoundingClientRect();
                if (rect.bottom < -120 || rect.top > window.innerHeight + 120) {
                    return;
                }

                const elementCenter = rect.top + rect.height * 0.5;
                const delta = elementCenter - viewportCenter;
                const offset = Math.max(Math.min(-delta * speed, 26), -26);
                element.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
            });

            ticking = false;
        };

        const requestParallax = () => {
            if (ticking) {
                return;
            }
            ticking = true;
            window.requestAnimationFrame(updateParallax);
        };

        if (parallaxTargets.length > 0) {
            updateParallax();
            window.addEventListener("scroll", requestParallax, { passive: true });
            window.addEventListener("resize", requestParallax);
        }

        return () => {
            observer.disconnect();
            if (parallaxTargets.length > 0) {
                window.removeEventListener("scroll", requestParallax);
                window.removeEventListener("resize", requestParallax);
            }
        };
    }, [pathname]);

    return null;
}