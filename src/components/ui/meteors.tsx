"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const Meteors = ({
    number = 40,
    className,
}: {
    number?: number;
    className?: string;
}) => {
    const [mounted, setMounted] = useState(false);
    const [meteorList, setMeteorList] = useState<
        { top: string; left: string; delay: string; duration: string }[]
    >([]);

    useEffect(() => {
        setMounted(true);
        const count = number || 40;
        const list = Array.from({ length: count }).map((_, idx) => {
            // All meteors start strictly above the screen from the top
            const top = (Math.floor(Math.random() * -40) - 20) + "px";
            // Spread horizontally so diagonal rain sweeps the entire page (-40% to 100%)
            const left = ((idx * (140 / count)) - 40 + (Math.random() * 6 - 3)) + "%";
            // Negative delay so rain is ALREADY continuously streaming everywhere upon page load
            const delay = "-" + (Math.random() * 12).toFixed(2) + "s";
            // Slower, calmer and smoother falling speed (8s to 12s)
            const duration = (Math.floor(Math.random() * 5) + 8) + "s";

            return { top, left, delay, duration };
        });
        setMeteorList(list);
    }, [number]);

    if (!mounted) return null;

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 w-full h-full">
            {meteorList.map((m, idx) => (
                <span
                    key={"meteor-" + idx}
                    className={cn("meteor-star", className)}
                    style={{
                        top: m.top,
                        left: m.left,
                        animationDelay: m.delay,
                        animationDuration: m.duration,
                    }}
                />
            ))}
        </div>
    );
};
