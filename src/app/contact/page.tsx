"use client";
import React from "react";

import { div } from "motion/react-client";
import dynamic from "next/dynamic";

const Meteors = dynamic(
  () => import("@/components/ui/meteors").then((mod) => mod.Meteors),
  {
    ssr: false,
  }
);

function page() {
  return (


    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Meteors number={40} />
      </div>



      <div className="max-w-3xl mx-auto text-center mt-40">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Contact Us
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          We're here to help with any questions about our courses, programs,
          or events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>

        <div className="space-y-8 mt-10">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full h-16 bg-black border border-neutral-800 rounded-xl px-6 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300"
          />

          <textarea
            placeholder="Your message"
            className="w-full min-h-[200px] max-h-[500px] bg-black border border-neutral-800 rounded-xl px-6 py-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-y"
          />

          <button className="bg-teal-500 hover:bg-teal-600 transition-all duration-300 text-white font-semibold px-10 py-4 rounded-lg hover:scale-105">
            Send Message
          </button>

        </div>
      </div>
    </div>
  )
}

export default page