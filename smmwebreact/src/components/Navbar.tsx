import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu toggle

    return (
        <header className="sticky top-0 z-50 bg-white p-4 w-full border">
            <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
                {/* Logo section */}
                <a href="#hero" className="text-black text-2xl font-bold">WeboKraft</a>

                {/* Container for centered menu and CTA */}
                <div className="flex flex-1 justify-between items-center">
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex justify-center flex-1 space-x-8">
                        <a href="#services" className="text-gray-600 hover:text-gray-900">Usługi</a>
                        <a href="#process" className="text-gray-600 hover:text-gray-900">Proces</a>
                        <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
                        <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
                        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Cennik</a>
                        <a href="#aboutus" className="text-gray-600 hover:text-gray-900">O Nas</a>
                    </nav>
                    {/* CTA button, always aligned to the right */}
                    <a href="#contact" className="hidden md:block text-white bg-black px-4 py-2 rounded-md">Bezpłatna Konsultacja</a>
                </div>

                {/* Hamburger Icon for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - opens as a popup */}
            {isMenuOpen && (
                <div className="absolute top-full right-0 w-full bg-white shadow-lg md:hidden">
                    <nav className="flex flex-col p-4">
                        <a href="#services" className="text-gray-600 hover:text-gray-900 mb-2">Usługi</a>
                        <a href="#process" className="text-gray-600 hover:text-gray-900 mb-2">Proces</a>
                        <a href="#portfolio" className="text-gray-600 hover:text-gray-900 mb-2">Portfolio</a>
                        <a href="#faq" className="text-gray-600 hover:text-gray-900 mb-2">FAQ</a>
                        <a href="#pricing" className="text-gray-600 hover:text-gray-900 mb-2">Cennik</a>
                        <a href="#aboutus" className="text-gray-600 hover:text-gray-900 mb-2">O nas</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
