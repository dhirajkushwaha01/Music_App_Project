"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Meteors = dynamic(
  () => import("@/components/ui/meteors").then((mod) => mod.Meteors),
  {
    ssr: false,
  }
);

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const contactCards = [
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Studio",
      detail: "Connaught Place, New Delhi, India",
      subDetail: "PIN: 110001",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Direct Email",
      detail: "info@musicschool.com",
      subDetail: "admissions@musicschool.com",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call & WhatsApp",
      detail: "+91 (123) 456-7890",
      subDetail: "Mon-Sat, 9:00 AM - 7:00 PM IST",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quick Response",
      detail: "Response within 24 hours",
      subDetail: "Dedicated student advisory desk",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background Meteors Effect - Covers Entire Section */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        <Meteors number={40} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* 2-Column Grid: Same Width & Same Height (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card: 100% Transparent Contact Info Card */}
          <ScrollReveal direction="left" className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-white/20 bg-transparent p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-teal-400/40">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Connect With Our Instructors
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Have questions regarding theory, vocal coaching, or instruments? Visit us or drop a line anytime.
                </p>
              </div>

              {/* Contact item boxes with 100% transparent styling */}
              <div className="flex-1 flex flex-col justify-between gap-3.5">
                {contactCards.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-transparent border border-white/15 hover:border-teal-400/50 hover:bg-white/3 transition-all duration-300 group shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-transparent border border-teal-500/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 mt-0.5">{item.detail}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{item.subDetail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Card: 100% Transparent Contact Form Card */}
          <ScrollReveal direction="right" className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-white/20 bg-transparent p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-teal-400/40 relative">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 bg-transparent border-2 border-teal-400 rounded-full flex items-center justify-center mx-auto text-teal-400 text-3xl shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
                    Thank you for getting in touch, <span className="text-teal-400 font-medium">{formData.name}</span>. Our student advisor team will respond to your inquiry within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", course: "General Inquiry", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-4 relative z-10">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center justify-between">
                          <span>Full Name</span>
                          <span className="text-xs text-teal-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full h-11 bg-transparent border border-white/20 rounded-xl px-4 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all duration-300"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-1.5">
                        <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center justify-between">
                          <span>Email Address</span>
                          <span className="text-xs text-teal-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="yourname@gmail.com"
                          className="w-full h-11 bg-transparent border border-white/20 rounded-xl px-4 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-medium text-gray-300">
                        Interested Course / Subject
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full h-11 bg-transparent border border-white/20 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all duration-300 cursor-pointer"
                      >
                        <option value="General Inquiry" className="bg-zinc-950 text-white">General Inquiry</option>
                        <option value="Basic Music Theory" className="bg-zinc-950 text-white">Basic Music Theory</option>
                        <option value="Advanced Composition" className="bg-zinc-950 text-white">Advanced Composition</option>
                        <option value="Song Writing" className="bg-zinc-950 text-white">Song Writing</option>
                        <option value="Music Production" className="bg-zinc-950 text-white">Music Production</option>
                        <option value="Piano / Vocal Coaching" className="bg-zinc-950 text-white">Piano / Vocal Coaching</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center justify-between">
                        <span>Your Message</span>
                        <span className="text-xs text-teal-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you'd like to learn or ask about..."
                        className="w-full min-h-27.5 max-h-45 bg-transparent border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all duration-300 resize-y"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-linear-to-r from-teal-500 via-cyan-500 to-teal-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="text-lg">→</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;