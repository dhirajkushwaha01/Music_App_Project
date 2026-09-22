"use client";
import React from 'react'
import courseData from "../data/music_courses.json";
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}


function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.
        isFeatured)


    return (


        <div className="py-12 bg-gray-900">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="inline-block text-sm sm:text-base font-semibold text-teal-600 uppercase border border-cyan-700 p-2 sm:p-3 m-4 rounded-lg">
                        Featured Courses
                    </h2>

                    <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                        Learn With the Best
                    </p>
                </div>
            </div>



            <div className="mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">

                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center w-full">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] overflow-hidden
                                 h-full w-full max-w-sm bg-white dark:bg-zinc-900">

                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">


                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.title}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                        {course.description}
                                    </p>

                                    <Link href={`/courses/${course.slug}`}>
                                        <button className="mt-4 px-5 py-2 rounded-xl bg-zinc-800 text-gray-200 font-semibold hover:bg-zinc-700 transition-all duration-300 shadow-md hover:shadow-xl">
                                            Learn More →
                                        </button>
                                    </Link>


                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>



            <div className="mt-16 sm:mt-20 text-center px-4">
                <Link
                    href="/courses"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
                >
                    View All Courses
                </Link>
            </div>




        </div>

    )
}

export default FeaturedCourses