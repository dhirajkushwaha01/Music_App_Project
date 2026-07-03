"use client";
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";


function Upcomingwebinars() {


    const featuredWebinars = [
        {
            title: "Understanding Music Theory",
            description:
                "Dive deep into the fundamentals of music theory and enhance your musical skills.",
            slug: "understanding-music-theory",
            isFeatured: true,
        },
        {
            title: "The Art of Songwriting",
            description:
                "Learn the craft of songwriting from experienced musicians and songwriters.",
            slug: "the-art-of-songwriting",
            isFeatured: true,
        },
        {
            title: "Mastering Guitar Basics",
            description:
                "Build a strong foundation in guitar playing with chords, scales, and techniques.",
            slug: "mastering-guitar-basics",
            isFeatured: true,
        },
        {
            title: "Advanced Vocal Techniques",
            description:
                "Improve your singing with breathing exercises and vocal training methods.",
            slug: "advanced-vocal-techniques",
            isFeatured: true,
        },
        {
            title: "Music Production Essentials",
            description:
                "Get started with music production using modern tools and workflows.",
            slug: "music-production-essentials",
            isFeatured: true,
        },
        {
            title: "Piano for Beginners",
            description:
                "Start your piano journey by learning basic notes, chords, and simple melodies.",
            slug: "piano-for-beginners",
            isFeatured: true,
        },
    ];

    return (


        <div className="p-12 Dbg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">

                    <h2
                        className="inline-block text-base font-semibold text-teal-600 uppercase border border-cyan-700 p-3 m-4 rounded-lg">

                        FEATURED WEBINARS</h2>

                    <p
                        className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"

                    >Enhance Your Musical Journey</p>

                </div>



                <div className="mt-10">


                    <HoverEffect
                        items={featuredWebinars.map((webinar) => ({
                            title: webinar.title,
                            description: webinar.description,
                            link: "/",
                        }))}
                    />

                </div>



                <div className="mt-10 text-center">

                    <Link href="/" className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300">
                        View All webinars
                    </Link>


                </div>
            </div>
        </div>




    )
}

export default Upcomingwebinars