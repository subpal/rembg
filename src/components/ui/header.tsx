'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="pb-2 lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* lg+ */}
                <nav className="flex items-center justify-between h-16 lg:h-20 my-3">
                    <div className="flex-shrink-0 p-2">
                        <Link href="/" title="" className="flex">
                            <Image className="rounded-lg"
                                   src="/bgrem.png"
                                   width={100}
                                   height={100}
                                   alt="Logo"
                            />
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>
                        )}
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a
                            href="/"
                            title=""
                            className="text-2xl font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                            Features
                        </a>
                        <a
                            href="/"
                            title=""
                            className="text-2xl font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                            Solutions
                        </a>
                        <a
                            href="/contact"
                            title=""
                            className="text-2xl font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                            Contact
                        </a>
                        <Link
                            href="/about-us"
                            title=""
                            className="text-2xl font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                        >
                            About Us
                        </Link>
                    </div>

                    <a
                        href="http://razorpay.me/@bgrem"
                        title=""
                        className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                        role="button"
                    >
                        Donate Us
                    </a>
                </nav>

                {/* xs to lg */}
                {isMenuOpen && (
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <a
                                    href="/"
                                    title=""
                                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    Features
                                </a>
                                <a
                                    href="/"
                                    title=""
                                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    Solutions
                                </a>
                                <a
                                    href="/about-us"
                                    title=""
                                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    Resources
                                </a>
                                <a
                                    href="/"
                                    title=""
                                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    About Us
                                </a>
                            </div>
                        </div>

                        <div className="px-6 mt-6">
                            <a
                                href="http://razorpay.me/@bgrem"
                                title=""
                                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
                                role="button"
                            >
                                Donate Us
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;

