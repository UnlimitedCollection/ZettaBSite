"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
    target: number;
    suffix?: string;
    duration?: number;
    className?: string;
};

export function CountUp({ target, suffix = "", duration = 1300, className = "" }: CountUpProps) {
    const [value, setValue] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setValue(target);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHasStarted(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.4 },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [target]);

    useEffect(() => {
        if (!hasStarted) {
            return;
        }

        let frame = 0;
        const start = performance.now();

        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));

            if (progress < 1) {
                frame = requestAnimationFrame(step);
            }
        };

        frame = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [duration, hasStarted, target]);

    return (
        <span ref={ref} className={className}>
            {value}
            {suffix}
        </span>
    );
}