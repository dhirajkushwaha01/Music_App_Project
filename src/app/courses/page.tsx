"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json"

function page() {
  return (

    <div className="min-h-screen bg-black py-12 pt-40 sm:pt-40 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({courseData.courses.length})
      </h1>


      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto">
        {courseData.courses.map((course) => (<CardContainer key={course.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-3 sm:p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-sm sm:text-xl font-bold text-neutral-600 dark:text-white"
            >
              {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2 sm:line-clamp-none"
            >
             {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={course.image}
                height="1000"
                width="1000"
                className="h-28 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={course.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4 sm:mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-[10px] sm:text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-[10px] sm:text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>))}
      </div>


    </div>

  )
}

export default page