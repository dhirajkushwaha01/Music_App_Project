"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (

        <div
            className={cn("fixed top-4 sm:top-6 md:top-10 inset-x-0 max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>

                <Link href={"/"} onClick={() => setActive(null)}>
                    <MenuItem setActive={setActive} active={active}
                        item="Home">
                    </MenuItem>
                </Link>

                <MenuItem
                    setActive={setActive} active={active} item="Our Courses">

                    <div className="flex flex-col space-y-2 text-sm min-w-[190px]">
                        <HoveredLink href="/courses" onClick={() => setActive(null)}>All Courses</HoveredLink>
                        <HoveredLink href="/courses/basic-music-theory" onClick={() => setActive(null)}>Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses/advanced-composition" onClick={() => setActive(null)}>Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses/songwriting" onClick={() => setActive(null)}>Songwriting</HoveredLink>
                        <HoveredLink href="/courses/music-production" onClick={() => setActive(null)}>Music Production</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/contact"} onClick={() => setActive(null)}>
                    <MenuItem setActive={setActive} active={active}
                        item="Contact Us">

                    </MenuItem>
                </Link>

            </Menu>

        </div>
    )
}

export default Navbar