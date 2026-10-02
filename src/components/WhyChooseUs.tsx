"use client";
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
    {
        title: "1-on-1 Artist Mentorship",
        description:
            "Work directly with industry veterans, Grammy-winning sound designers, and conservatory-trained virtuosos. Receive personalized feedback tailored to your individual musical voice and career ambitions.",
        content: (
            <div className="h-full w-full relative overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="1-on-1 Artist Mentorship"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest">Personal Mentorship</span>
                    <p className="text-white text-base font-bold mt-0.5">Custom Roadmaps & Weekly Critiques</p>
                </div>
            </div>
        ),
    },
    {
        title: "Real-time Live Audio Feedback",
        description:
            "Analyze pitch, rhythm, and harmonics in real time using our studio-grade analysis suite. Master your timing and ear training with instant visual feedback on every note you play.",
        content: (
            <div className="h-full w-full relative overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Audio Production & Feedback"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">Real-Time Analysis</span>
                    <p className="text-white text-base font-bold mt-0.5">Instant Pitch & Harmonics Feedback</p>
                </div>
            </div>
        ),
    },
    {
        title: "Modern DAW & Studio Mastery",
        description:
            "Master industry-standard production workstations including Ableton Live, Logic Pro, and Pro Tools. From recording live acoustics to synthesis and surgical mastering, graduate studio-ready.",
        content: (
            <div className="h-full w-full relative overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Studio Gear & DAWs"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest">DAW & Synthesis</span>
                    <p className="text-white text-base font-bold mt-0.5">Flagship Studio Hardware & Gear</p>
                </div>
            </div>
        ),
    },
    {
        title: "Limitless Jam & Stage Growth",
        description:
            "Collaborate with a vibrant global community of multi-instrumentalists and producers. Showcase your original tracks, join live masterclasses, and perform in global virtual concerts.",
        content: (
            <div className="h-full w-full relative overflow-hidden group">
                <img
                    src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Live Concert & Jams"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Global Community</span>
                    <p className="text-white text-base font-bold mt-0.5">Live Concerts & Jam Sessions</p>
                </div>
            </div>
        ),
    },
];

function WhyChooseUs() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercase">Why Choose Us</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Experience Music Mastery Like Never Before
                </p>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}

export default WhyChooseUs;