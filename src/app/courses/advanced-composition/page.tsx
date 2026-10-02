"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function AdvancedCompositionPage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      week: "Module 01",
      title: "Modal Interchange & Harmonic Tension",
      duration: "5 Hours • 8 Lessons",
      description: "Harness borrowed chords from parallel modes (Aeolian, Phrygian, Lydian) to trigger profound cinematic emotions.",
      lessons: [
        "The Mechanics of Borrowed Chords & Modal Mixture",
        "Minor iv in a Major Key: The Secret to Bittersweet Resolution",
        "Neapolitan 6th & Augmented Sixth Chords in Modern Context",
        "Harmonic Tension Curves: Crafting Anticipation & Release",
      ],
    },
    {
      week: "Module 02",
      title: "The Architecture of Motifs & Themes",
      duration: "4.5 Hours • 7 Lessons",
      description: "Compose memorable melodic themes and develop them through inversion, retrograde, augmentation, and fragmentation.",
      lessons: [
        "Analyzing John Williams & Hans Zimmer Leitmotif Systems",
        "Melodic Contour, Call-and-Response, and Rhythmic Variation",
        "Retrograde, Inversion, and Modal Transformation of Themes",
        "Developing Character Motifs for Cinema and Video Games",
      ],
    },
    {
      week: "Module 03",
      title: "Orchestration & Voice Leading",
      duration: "6 Hours • 10 Lessons",
      description: "Arrange for Strings, Woodwinds, Brass, and Percussion sections. Balance frequency registers and dynamic timbres.",
      lessons: [
        "Acoustic Registers & Overtone Series Distribution",
        "String Quartet & Symphonic String Section Voicing",
        "French Horns, Trumpets, and Low Brass Stabs",
        "Woodwind Coloring: Blending Oboes, Flutes, and Clarinets",
      ],
    },
    {
      week: "Module 04",
      title: "Polyrhythms & Complex Meters",
      duration: "4 Hours • 6 Lessons",
      description: "Introduce intricate metric modulation, 5/8, 7/8, and cross-rhythms (3 against 4, 5 against 4) to elevate rhythmic sophistication.",
      lessons: [
        "Mastering 5/4, 7/8, and Asymmetrical Accent Patterns",
        "Cross-Rhythms (3:2, 4:3, 5:4) in Contemporary Orchestration",
        "Metric Modulation: Seamless Tempo Shifts Without Accelerando",
        "Ostinatos & Driving Percussion Scoring for Action Cues",
      ],
    },
    {
      week: "Module 05",
      title: "Hybrid Scoring: Synths Meet Symphony",
      duration: "5.5 Hours • 9 Lessons",
      description: "Integrate analog synthesizers, modular sub-bass, and granular textures with traditional acoustic orchestra.",
      lessons: [
        "Sub-Bass Layering with Contrabasses and Tubas",
        "Granular String Pads & Ambient Drone Design",
        "Braam Brass Sound Design & Distortion Saturation",
        "Mixing Acoustic Instruments with Electronic Elements",
      ],
    },
    {
      week: "Module 06",
      title: "Scoring to Picture & Portfolio Masterclass",
      duration: "6 Hours • 8 Lessons",
      description: "Receive unreleased film scenes to score, conduct hit-point timing analysis, and compile a Hollywood-ready showreel.",
      lessons: [
        "Spotting Sessions: Deciding Where Music Starts and Ends",
        "Syncing to Frame: Markers, Tempo Mapping, and Hit Points",
        "Exporting Stems, Mix Delivery Standards, and Licensing",
        "Final Project: Score an Action/Drama Scene & Receive 1-on-1 Feedback",
      ],
    },
  ];

  const highlights = [
    {
      icon: "🎻",
      title: "Symphonic Orchestration",
      desc: "Learn real-world acoustic balancing across strings, brass, winds, and epic percussion.",
    },
    {
      icon: "🎬",
      title: "Hollywood Film Scoring",
      desc: "Master leitmotifs, tension curves, and emotional synchronization with picture.",
    },
    {
      icon: "🌌",
      title: "Modal Interchange",
      desc: "Evoke wonder, heartbreak, and heroic triumph using exotic harmonic shifts.",
    },
    {
      icon: "⚡",
      title: "Hybrid Sound Design",
      desc: "Fuse colossal synthesizers and modular sound design with lush acoustic instruments.",
    },
    {
      icon: "🎼",
      title: "Full Orchestral Stems Included",
      desc: "Inspect professional orchestral template sessions for Logic, Cubase, and Ableton.",
    },
    {
      icon: "🏆",
      title: "Showreel Portfolio Review",
      desc: "Submit your final cue for comprehensive review by an experienced film composer.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-72 md:-top-20" fill="purple" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-purple-400 transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-purple-400 font-medium">Advanced Composition</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Advanced Conservatory Program • Master Level
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center lg:text-left">
              Master the Craft of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">Orchestral & Film Composition</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Elevate your musical storytelling. Dive deep into symphonic orchestration, modal mixture, complex meters, and hybrid synthesis for films, games, and modern classical records.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Duration</p>
                <p className="text-lg font-bold text-white mt-0.5">8 Weeks</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Lessons</p>
                <p className="text-lg font-bold text-white mt-0.5">50+ HD</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Student Rating</p>
                <p className="text-lg font-bold text-purple-400 mt-0.5">4.95 / 5.0 ⭐</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Mentorship</p>
                <p className="text-lg font-bold text-white mt-0.5">1-on-1 Cues</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
              >
                Enroll in Masterclass • $149.99
              </a>
              <a
                href="#curriculum"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-all duration-300"
              >
                Explore Syllabus ↓
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] p-3 backdrop-blur-xl group hover:border-purple-500/40 transition-all duration-500 shadow-2xl">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1000&auto=format&fit=crop"
                  alt="Orchestral Score Conducting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-semibold mb-2 backdrop-blur-md border border-purple-500/30">
                    Symphonic Studio Cues
                  </div>
                  <h3 className="text-xl font-bold text-white">Scoring for 80-Piece Orchestras</h3>
                  <p className="text-gray-300 text-xs mt-1">Includes actual film stems and multi-mic orchestral sample libraries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">What Sets This Masterclass Apart</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Go beyond simple triad chords into the nuanced territory of high-budget film scoring and modern classical orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Master Curriculum</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">6 In-Depth Modules</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              From advanced harmonic modal interchange to producing your final scored film cue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    activeModule === idx
                      ? "bg-purple-500/10 border-purple-500/40 text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                      : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold text-purple-400 block">{mod.week}</span>
                    <span className="text-sm font-bold text-white block mt-0.5">{mod.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{mod.duration.split("•")[0]}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-purple-400 text-xs font-bold uppercase">{modules[activeModule].week}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{modules[activeModule].title}</h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                  ⏱️ {modules[activeModule].duration}
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base mt-6 leading-relaxed">
                {modules[activeModule].description}
              </p>

              <div className="mt-8 space-y-3">
                <h4 className="text-sm font-semibold text-gray-200">Featured Lessons & Scoring Labs:</h4>
                {modules[activeModule].lessons.map((lesson, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                      {lIdx + 1}
                    </span>
                    <span className="text-sm text-gray-200">{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing / Enrollment Section */}
        <div id="pricing" className="max-w-3xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 text-center backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            Elite Masterclass Enrollment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Enroll in Advanced Composition</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Includes DAW project templates, orchestral sample libraries, film cue video files, and 1-on-1 portfolio review with a professional film composer.
          </p>

          <div className="my-8 flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-6xl font-extrabold text-white">$149.99</span>
            <span className="text-gray-500 line-through text-lg sm:text-xl">$249.99</span>
            <span className="text-purple-400 text-xs font-semibold ml-2">Save $100 Today</span>
          </div>

          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            Claim Your Spot Now →
          </Link>
          <p className="text-xs text-gray-500 mt-4">30-day money-back guarantee • All materials downloadable</p>
        </div>

      </div>
    </div>
  );
}
