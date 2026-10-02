"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function BasicMusicTheoryPage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      week: "Module 01",
      title: "The Architecture of Sound & Pitch",
      duration: "3.5 Hours • 6 Lessons",
      description: "Understand sound waves, octaves, frequencies, and the chromatic musical alphabet.",
      lessons: [
        "Frequencies, Octaves, and Equal Temperament",
        "The 12-Tone Chromatic Scale & Enharmonic Equivalents",
        "Clefs, Staff Notation, and the Grand Staff",
        "Interactive Ear Training: Pitch Recognition",
      ],
    },
    {
      week: "Module 02",
      title: "Intervals, Scales & The Major Mode",
      duration: "4 Hours • 7 Lessons",
      description: "The formula behind every major scale and understanding interval distances intuitively.",
      lessons: [
        "Whole Steps and Half Steps (Tones and Semitones)",
        "The Universal Major Scale Construction Formula",
        "Consonance vs. Dissonance in Major Intervals",
        "Hands-on Drill: Building Major Scales in All 12 Keys",
      ],
    },
    {
      week: "Module 03",
      title: "Minor Scales & Modal Explorations",
      duration: "4.5 Hours • 8 Lessons",
      description: "Unravel natural, harmonic, and melodic minors, plus the emotional moods of modes.",
      lessons: [
        "Relative Minors & The Circle of Fifths",
        "Natural, Harmonic, and Melodic Minor Distinctions",
        "Parallel Major and Minor Keys",
        "Introduction to the 7 Greek Modes (Dorian, Aeolian, Mixolydian)",
      ],
    },
    {
      week: "Module 04",
      title: "Triads, Chords & Diatonic Harmony",
      duration: "5 Hours • 9 Lessons",
      description: "Learn how chords are constructed from scales and how Roman Numeral Analysis works.",
      lessons: [
        "Major, Minor, Diminished, and Augmented Triads",
        "Diatonic Chord Qualities in Major and Minor Keys",
        "Inversions (Root, 1st, 2nd) and Smooth Voice Leading",
        "Decoding Roman Numeral Chord Progressions (I - V - vi - IV)",
      ],
    },
    {
      week: "Module 05",
      title: "Seventh Chords & Extended Harmony",
      duration: "4.5 Hours • 7 Lessons",
      description: "Infuse warmth, jazz tension, and neo-soul richness using 7ths, 9ths, and suspensions.",
      lessons: [
        "Maj7, Min7, Dominant 7th, and Half-Diminished Anatomy",
        "Suspended Chords (Sus2 & Sus4) & Add9 Colors",
        "Voice Leading Extended Chords on Piano and Guitar",
        "Harmonizing Melodies with Tension and Release",
      ],
    },
    {
      week: "Module 06",
      title: "Rhythm, Meter & Polyrhythmic Foundations",
      duration: "3.5 Hours • 6 Lessons",
      description: "Master time signatures, syncopation, tuplets, and rhythmic groove construction.",
      lessons: [
        "Simple vs. Compound Meter (4/4, 3/4, 6/8, 12/8)",
        "Dotted Notes, Ties, and Syncopation Dynamics",
        "Introduction to Odd Meters (5/4, 7/8)",
        "Groove Lab: Finger-Drumming Rhythmic Accuracy",
      ],
    },
  ];

  const highlights = [
    {
      icon: "🎼",
      title: "Read Sheet Music Confidently",
      desc: "Decode treble and bass clefs, key signatures, and rhythmic notation with ease.",
    },
    {
      icon: "🎹",
      title: "Keyboard Intuition",
      desc: "Visualize any chord, scale, or inversion instantly on keyboard keys or guitar fretboards.",
    },
    {
      icon: "👂",
      title: "Relative Pitch & Ear Training",
      desc: "Hear a melody or chord change in your head and translate it directly to your instrument.",
    },
    {
      icon: "⚡",
      title: "The Circle of Fifths Mastered",
      desc: "Demystify key signatures, modulation, and secondary dominants using the circle.",
    },
    {
      icon: "💡",
      title: "Effortless Song Writing",
      desc: "Stop guessing chord progressions. Write cohesive emotional harmonic journeys with intent.",
    },
    {
      icon: "📜",
      title: "Accredited Certificate",
      desc: "Receive an industry-recognized certificate of music theory proficiency upon completion.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-teal-400 transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-teal-400 font-medium">Basic Music Theory</span>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Foundational Masterclass • Beginner to Intermediate
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center lg:text-left">
              Unlock The Secret Language of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">Music Theory</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Eliminate the guesswork in your music. Learn to read notes, construct rich chord progressions, master scales, and train your ears to hear music like a pro producer and composer.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Duration</p>
                <p className="text-lg font-bold text-white mt-0.5">6 Weeks</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Lessons</p>
                <p className="text-lg font-bold text-white mt-0.5">45+ HD</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Student Rating</p>
                <p className="text-lg font-bold text-teal-400 mt-0.5">4.9 / 5.0 ⭐</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Access</p>
                <p className="text-lg font-bold text-white mt-0.5">Lifetime</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(20,184,166,0.35)]"
              >
                Enroll Now • $89.99
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
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] p-3 backdrop-blur-xl group hover:border-teal-500/40 transition-all duration-500 shadow-2xl">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=1000&auto=format&fit=crop"
                  alt="Music Theory Piano Keys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-semibold mb-2 backdrop-blur-md border border-teal-500/30">
                    Interactive Theory Lab
                  </div>
                  <h3 className="text-xl font-bold text-white">Visual Scale & Chord Progressions</h3>
                  <p className="text-gray-300 text-xs mt-1">Includes downloadable MIDI progressions and circle-of-fifths cheat sheets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">What You Will Master</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Transform from struggling with random notes to confidently navigating any key, chord, or time signature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-teal-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-400 text-xs font-bold tracking-widest uppercase">Comprehensive Curriculum</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">6 Progressive Modules</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Structured step-by-step from raw acoustic fundamentals up to complex extended chord harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Module Selector Sidebar */}
            <div className="lg:col-span-4 space-y-3">
              {modules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    activeModule === idx
                      ? "bg-teal-500/10 border-teal-500/40 text-white shadow-[0_0_20px_rgba(20,184,166,0.15)]"
                      : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold text-teal-400 block">{mod.week}</span>
                    <span className="text-sm font-bold text-white block mt-0.5">{mod.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{mod.duration.split("•")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Module Detail */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-teal-400 text-xs font-bold uppercase">{modules[activeModule].week}</span>
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
                <h4 className="text-sm font-semibold text-gray-200">Included Lessons & Practical Exercises:</h4>
                {modules[activeModule].lessons.map((lesson, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-bold">
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4">
            Instant Lifetime Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Enroll in Basic Music Theory Today</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Get immediate access to 45+ HD video lessons, downloadable MIDI templates, chord progression formulas, and instructor Q&A access.
          </p>

          <div className="my-8 flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-6xl font-extrabold text-white">$89.99</span>
            <span className="text-gray-500 line-through text-lg sm:text-xl">$149.99</span>
            <span className="text-teal-400 text-xs font-semibold ml-2">Save 40%</span>
          </div>

          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-extrabold text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.35)]"
          >
            Start Learning Now →
          </Link>
          <p className="text-xs text-gray-500 mt-4">30-day money-back guarantee • No questions asked</p>
        </div>

      </div>
    </div>
  );
}
