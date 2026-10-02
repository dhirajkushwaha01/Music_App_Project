"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/utils/cn";

const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string | null) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    const isCurrentActive = active === item;

    const handleToggle = (e: React.MouseEvent) => {
        if (children) {
            e.stopPropagation();
            setActive(isCurrentActive ? null : item);
        }
    };

    return (
        <div
            onMouseEnter={() => {
                // Desktop hover support
                if (typeof window !== "undefined" && window.innerWidth >= 768) {
                    setActive(item);
                }
            }}
            className="relative"
        >
            <motion.div
                onClick={handleToggle}
                transition={{ duration: 0.3 }}
                className={cn(
                    "cursor-pointer text-sm sm:text-base font-medium px-2 py-1 select-none flex items-center gap-1 transition-colors",
                    isCurrentActive ? "text-teal-400" : "text-black dark:text-white hover:text-teal-300"
                )}
            >
                <span>{item}</span>
                {children && (
                    <span
                        className={cn(
                            "text-[10px] transition-transform duration-200 inline-block",
                            isCurrentActive ? "rotate-180 text-teal-400" : "text-gray-400"
                        )}
                    >
                        ▼
                    </span>
                )}
            </motion.div>

            {isCurrentActive && children && (
                <div className="absolute top-[calc(100%+0.8rem)] left-1/2 transform -translate-x-1/2 pt-2 z-50">
                    <motion.div
                        transition={transition}
                        initial={{ opacity: 0, scale: 0.9, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="bg-black/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.85)] min-w-[210px] max-w-[90vw]"
                    >
                        <div className="p-3 sm:p-4">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => {
                if (typeof window !== "undefined" && window.innerWidth >= 768) {
                    setActive(null);
                }
            }}
            className="relative rounded-full border border-white/15 bg-black/85 backdrop-blur-md shadow-2xl flex items-center justify-center space-x-2 sm:space-x-6 px-4 sm:px-8 py-2.5 sm:py-4 transition-all"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <img
                src={src}
                width={140}
                height={70}
                alt={title}
                className="shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, onClick, href, className, ...rest }: any) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "text-neutral-300 hover:text-teal-400 transition-colors py-1.5 px-1 block text-sm font-medium rounded-lg hover:bg-white/[0.05]",
                className
            )}
            {...rest}
        >
            {children}
        </Link>
    );
};
