import React from 'react'

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* About Us */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4 hover:text-cyan-400 transition-colors duration-300">
                        About Us
                    </h3>
                    <p className="leading-7 hover:text-gray-300 transition-colors duration-300">
                        Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up, fostering
                        a vibrant community of musicians.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4 hover:text-cyan-400 transition-colors duration-300">
                        Quick Links
                    </h3>

                    <ul className="space-y-3">
                        <li>
                            <a
                                href="/"
                                className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/courses"
                                className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4 hover:text-cyan-400 transition-colors duration-300">
                        Follow Us
                    </h3>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
                        >
                            Facebook
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
                        >
                            Twitter
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4 hover:text-cyan-400 transition-colors duration-300">
                        Contact Us
                    </h3>

                    <div className="space-y-3">
                        <p className="hover:text-gray-300 transition-colors duration-300">
                            New Delhi, India
                        </p>

                        <p className="hover:text-gray-300 transition-colors duration-300">
                            Delhi 10001
                        </p>

                        <p className="hover:text-gray-300 transition-colors duration-300">
                            Email: info@musicschool.com
                        </p>

                        <p className="hover:text-gray-300 transition-colors duration-300">
                            Phone: (123) 456-7890
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                <p className="hover:text-white transition-colors duration-300">
                    © 2024 Music School. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer