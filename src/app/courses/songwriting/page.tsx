"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function SongwritingPage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      week: "Module 01",
      title: "The Anatomy of a Catchy Hook",
      duration: "4 Hours • 7 Lessons",
      description: "Deconstruct what makes hooks unforgettable. Study interval jumps, repetition, syncopation, and phonetic resonance.",
      lessons: [
        "The Hook Matrix: Rhythmic vs. Melodic vs. Lyrical Hooks",
        "Intervals that Stick: Perfect 4ths, Octave Leaps, and Pentatonics",
        "Rhythmic Phrasing: Syncopation on the Upbeat vs. Downbeat",
        "The 3-Second Rule: Capturing Listener Attention in the Streaming Era",
      ],
    },
    {
      week: "Module 02",
      title: "Lyrical Craft & Sensory Storytelling",
      duration: "4.5 Hours • 8 Lessons",
      description: "Move past generic clichés into vivid, emotionally arresting imagery using sensory metaphors and show-don't-tell techniques.",
      lessons: [
        "Sensory Imagery: Engaging Sight, Sound, Touch, and Smell in Verse",
        "Metaphor Architecture & Avoiding Cliche Pitfalls",
        "Prosody: Matching Linguistic Accent with Musical Stress",
        "Rhyme Schemes: Perfect, Slant, Family, and Assonant Rhymes",
      ],
    },
    {
      week: "Module 03",
      title: "Song Architecture & Dynamic Lift",
      duration: "5 Hours • 8 Lessons",
      description: "Engineer contrast between Verse, Pre-Chorus, Chorus, and Bridge to create massive emotional payoff.",
      lessons: [
        "The Pre-Chorus Elevator: Building Anticipation & Energy Escalation",
        "The Exploding Chorus: Density, Octave Double, and Vocal Range",
        "The Bridge as Revelation: Unveiling New Perspectives & Harmonic Shifts",
        "Outros and Post-Chorus Vocal Chops: Leaving a Lasting Impression",
      ],
    },
    {
      week: "Module 04",
      title: "Melody Writing Over Chord Loops",
      duration: "4.5 Hours • 7 Lessons",
      description: "Learn to improvise compelling top-line melodies over 4-chord loops without sounding repetitive.",
      lessons: [
        "Top-Line Scatting: Finding Vowels and Consonants that Flow",
        "Guide Tones & Chord Tones: Landing on 3rds and 7ths for Emotion",
        "Rhythmic Variations: Keeping 4-Chord Loops Fresh",
        "Recording Scratch Vocals with Emotion and Intonation",
      ],
    },
    {
      week: "Module 05",
      title: "Co-Writing & Studio Collaboration",
      duration: "3.5 Hours • 6 Lessons",
      description: "Navigate writing rooms with confidence, pitch ideas without fear, and understand songwriting splits and credits.",
      lessons: [
        "Writing Room Etiquette & Creative Chemistry",
        "Role Specialization: Lyricist, Topliner, Track Producer",
        "Splits Sheets, Publishing Basics, and PRO Registration (ASCAP/BMI)",
        "Overcoming Creative Block with Timed Constraint Exercises",
      ],
    },
    {
      week: "Module 06",
      title: "Demo Production & Pitching to Artists",
      duration: "4.5 Hours • 7 Lessons",
      description: "Transform an acoustic guitar or piano memo into a fully arranged, polished demo ready to pitch to labels and sync agents.",
      lessons: [
        "Arranging Guitars, Pianos, and Sub-bass Around the Vocal",
        "Vocal Stacking: Lead Doubles, Harmonies, Ad-libs, and Whispers",
        "Pitching to Sync Licensing Agents for TV, Film, and Commercials",
        "Final Project: Write & Submit a Complete Original Song for Review",
      ],
    },
  ];

  const highlights = [
    {
      icon: "✍️",
      title: "Potent Lyrical Imagery",
      desc: "Stop using cheesy rhymes. Master sensory metaphors that touch people's souls.",
    },
    {
      icon: "🎯",
      title: "Hypnotic Top-Line Hooks",
      desc: "Engineer melodic hooks that listeners can't get out of their heads for days.",
    },
    {
      icon: "💥",
      title: "Dynamic Song Structure",
      desc: "Build soaring pre-choruses, explosive hooks, and unexpected bridges.",
    },
    {
      icon: "🎙️",
      title: "Vocal Arranging & Stacking",
      desc: "Learn studio techniques for stacking 3-part harmonies, ad-libs, and doubles.",
    },
    {
      icon: "🤝",
      title: "Co-Writing Protocols",
      desc: "Collaborate seamlessly with other writers, producers, and publishers.",
    },
    {
      icon: "📺",
      title: "Sync Licensing Secrets",
      desc: "Format and register your songs to land lucrative placements in Netflix and HBO shows.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="emerald" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-emerald-400 transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Songwriting</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Creative Hitmaker Workshop • All Levels
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center lg:text-left">
              Turn Personal Emotions into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Timeless Songs</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              From the initial spark of inspiration to a radio-ready demo. Learn lyricism, top-line melody writing, prosody, and structural dynamics from chart-topping songwriters.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Duration</p>
                <p className="text-lg font-bold text-white mt-0.5">6 Weeks</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Lessons</p>
                <p className="text-lg font-bold text-white mt-0.5">42+ HD</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Student Rating</p>
                <p className="text-lg font-bold text-emerald-400 mt-0.5">4.92 / 5.0 ⭐</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Live Demos</p>
                <p className="text-lg font-bold text-white mt-0.5">3 Projects</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-extrabold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)]"
              >
                Enroll in Songwriting • $99.99
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
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] p-3 backdrop-blur-xl group hover:border-emerald-500/40 transition-all duration-500 shadow-2xl">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
                  alt="Songwriting Acoustic Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2 backdrop-blur-md border border-emerald-500/30">
                    The Writers Room
                  </div>
                  <h3 className="text-xl font-bold text-white">From Diary Entry to Charting Single</h3>
                  <p className="text-gray-300 text-xs mt-1">Includes songwriting prompt cards, rhyming dictionaries, and lead sheet templates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Write Songs That Resonate</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Transform your songwriting from random notes into compelling, commercially viable compositions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Master Curriculum</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">6 Weekly Modules</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Learn hook engineering, deep lyrics, vocal arrangement, and demo pitching.
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
                      ? "bg-emerald-500/10 border-emerald-500/40 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 block">{mod.week}</span>
                    <span className="text-sm font-bold text-white block mt-0.5">{mod.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{mod.duration.split("•")[0]}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-emerald-400 text-xs font-bold uppercase">{modules[activeModule].week}</span>
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
                <h4 className="text-sm font-semibold text-gray-200">Weekly Songwriting Exercises:</h4>
                {modules[activeModule].lessons.map((lesson, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            Songwriting Studio Pass
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Enroll in The Songwriting Workshop</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Includes backing tracks, lyric worksheets, co-writing community access, and feedback on your original songs.
          </p>

          <div className="my-8 flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-6xl font-extrabold text-white">$99.99</span>
            <span className="text-gray-500 line-through text-lg sm:text-xl">$169.99</span>
            <span className="text-emerald-400 text-xs font-semibold ml-2">Save 42%</span>
          </div>

          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-extrabold text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)]"
          >
            Start Writing Songs →
          </Link>
          <p className="text-xs text-gray-500 mt-4">30-day money-back guarantee • Instant course access</p>
        </div>

      </div>
    </div>
  );
}
