"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function MusicProductionPage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      week: "Module 01",
      title: "DAW Command & Studio Workflow",
      duration: "5 Hours • 8 Lessons",
      description: "Optimize your studio setup, gain staging, audio interface routing, and keyboard shortcuts in Ableton Live and Logic Pro.",
      lessons: [
        "Gain Staging from Recording to Mix Bus (-18dBFS sweet spot)",
        "Audio Interface Calibration, Buffer Sizes & Latency Management",
        "Project Organization, Color Coding, and Template Architecture",
        "Essential Hotkeys & Workflow Accelerators for Speed",
      ],
    },
    {
      week: "Module 02",
      title: "Sound Design & Wavetable Synthesis",
      duration: "6 Hours • 10 Lessons",
      description: "Build 808s, supersaws, plucks, neuro basses, and organic pads from scratch using Serum and Vital.",
      lessons: [
        "Oscillators, Wavetables, and Waveform Warping (Sync, Bend, FM)",
        "Envelopes (ADSR) vs. LFO Modulation Routings",
        "Creating Punchy 808s & Layering Sub Frequencies with Kick Drums",
        "Designing Evolving Ambient Pads with Granular Reverb",
      ],
    },
    {
      week: "Module 03",
      title: "Drum Production & Groove Engineering",
      duration: "5 Hours • 8 Lessons",
      description: "Craft industry-grade drum loops, transient shaping, ghost notes, swing parameters, and parallel compression.",
      lessons: [
        "Sample Selection: The Foundation of Every Modern Production",
        "Transient Designers & Envelope Shaping for Snappy Snares",
        "Adding Organic Humanity with Swing, Velocity Jitter, and Micro-timing",
        "Parallel New York Drum Compression for Massive Impact",
      ],
    },
    {
      week: "Module 04",
      title: "Vocal Production & Tuning Masterclass",
      duration: "5.5 Hours • 9 Lessons",
      description: "Transform raw vocal takes into pristine, radio-ready lead vocals using Melodyne, Auto-Tune, EQ, and dimension widening.",
      lessons: [
        "Surgical Pitch Correction: Natural Melodyne vs. Hard Auto-Tune",
        "Dynamic EQ & De-essing: Taming Harsh Sibilance and Resonances",
        "Vocal Chains: Pre-amp Emulation, 1176 Fast Limiting, LA-2A Leveling",
        "Widening & Space: Stereo Slap Delays, Microshift, and Lush Plates",
      ],
    },
    {
      week: "Module 05",
      title: "The Art of the Mixdown (EQ, Dynamics & Space)",
      duration: "6.5 Hours • 11 Lessons",
      description: "Carve space for every element in the frequency spectrum. Master high-pass filters, sidechain routing, and 3D depth.",
      lessons: [
        "Frequency Carving: Resolving Low-End Clashes Between Kick & Bass",
        "Sidechain Compression: Pumping Effects and Dynamic Volume Ducking",
        "Mid/Side Processing: Creating Huge Stereo Width While Mono-Compatible",
        "Reverb & Delay Aux Busses: Placing Instruments on Front-to-Back Stages",
      ],
    },
    {
      week: "Module 06",
      title: "Commercial Mastering & Loudness Standards",
      duration: "5 Hours • 7 Lessons",
      description: "Master tracks for Spotify, Apple Music, and Club PAs without sacrificing dynamics, punch, or clarity.",
      lessons: [
        "True Peak Limiters, Clip-to-Zero, and LUFS Loudness Targets (-14 to -8 LUFS)",
        "Multiband Compression & Stereo Imaging Polish",
        "Analog Tape & Tube Saturation for Harmonic Warmth",
        "Exporting Dithered Masters, Stem Delivery, and Quality Control",
      ],
    },
  ];

  const highlights = [
    {
      icon: "🎛️",
      title: "Flagship DAW Fluency",
      desc: "Learn Ableton Live, Logic Pro, and FL Studio from certified trainer engineers.",
    },
    {
      icon: "⚡",
      title: "Advanced Synthesis",
      desc: "Never rely on generic presets again. Create iconic custom patches in Serum and Vital.",
    },
    {
      icon: "🎧",
      title: "Surgical Mixing",
      desc: "Demystify compressors, parametric EQs, sidechaining, and stereo widening.",
    },
    {
      icon: "🎤",
      title: "Pristine Vocal Chains",
      desc: "Produce radio-ready vocals with natural tuning, de-essing, and atmospheric effects.",
    },
    {
      icon: "🔊",
      title: "Loud & Punchy Masters",
      desc: "Hit modern commercial loudness targets without distortion or muddy bass.",
    },
    {
      icon: "💾",
      title: "10GB+ Sample & Preset Vault",
      desc: "Download exclusive royalty-free drum kits, synth presets, and DAW mix templates.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-cyan-400 transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-cyan-400 font-medium">Music Production</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Pro Audio Masterclass • Beginner to Advanced
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-center lg:text-left">
              Produce, Mix & Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500">Commercial Records</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Turn your bedroom setup into a hit-making powerhouse. Master sound design in Serum, punchy drum programming, radio vocal production, surgical mixing, and competitive club mastering.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Duration</p>
                <p className="text-lg font-bold text-white mt-0.5">8 Weeks</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Lessons</p>
                <p className="text-lg font-bold text-white mt-0.5">56+ HD</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Rating</p>
                <p className="text-lg font-bold text-cyan-400 mt-0.5">4.96 / 5.0 ⭐</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center lg:text-left">
                <p className="text-xs text-gray-400">Sample Vault</p>
                <p className="text-lg font-bold text-white mt-0.5">10 GB+</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-extrabold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)]"
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
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] p-3 backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-500 shadow-2xl">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                  alt="Music Production Studio Console"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2 backdrop-blur-md border border-cyan-500/30">
                    Pro Studio Environment
                  </div>
                  <h3 className="text-xl font-bold text-white">Full In-the-Box Production</h3>
                  <p className="text-gray-300 text-xs mt-1">Includes project stems, custom preset banks, and mastering rack presets.</p>
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
              Step into the shoes of a chart-topping producer with industry-standard mixing, synthesis, and sound design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Master Curriculum</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">6 Comprehensive Modules</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              From audio physics and sound design up to surgical vocal production and competitive mastering.
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
                      ? "bg-cyan-500/10 border-cyan-500/40 text-white shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 block">{mod.week}</span>
                    <span className="text-sm font-bold text-white block mt-0.5">{mod.title}</span>
                  </div>
                  <span className="text-xs text-gray-500">{mod.duration.split("•")[0]}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-cyan-400 text-xs font-bold uppercase">{modules[activeModule].week}</span>
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
                <h4 className="text-sm font-semibold text-gray-200">Session Breakdown & DAW Walkthroughs:</h4>
                {modules[activeModule].lessons.map((lesson, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            Production All-Access Pass
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Enroll in Music Production Masterclass</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Includes DAW project templates, 10GB+ royalty-free sample library, Serum/Vital preset packs, and professional track mix feedback.
          </p>

          <div className="my-8 flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-6xl font-extrabold text-white">$149.99</span>
            <span className="text-gray-500 line-through text-lg sm:text-xl">$249.99</span>
            <span className="text-cyan-400 text-xs font-semibold ml-2">Save $100</span>
          </div>

          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-base hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)]"
          >
            Start Producing Now →
          </Link>
          <p className="text-xs text-gray-500 mt-4">30-day money-back guarantee • Downloadable sample vaults</p>
        </div>

      </div>
    </div>
  );
}
