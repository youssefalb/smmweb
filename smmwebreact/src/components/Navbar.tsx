// import React, { useState } from 'react';

// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu toggle
//     const [activeSection, setActiveSection] = useState('');

//     return (
//         <header className="sticky top-0 z-50 bg-white p-4 w-full border">
//             <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
//                 {/* Logo section */}
//                 <a href="#hero" onClick={() => setActiveSection('hero')} className="text-black text-2xl font-bold">WeboKraft</a>

//                 {/* Container for centered menu and CTA */}
//                 <div className="flex flex-1 justify-between items-center">
//                     {/* Desktop Menu */}
//                     <nav className="hidden md:flex justify-center flex-1 space-x-8">
//                         <a href="#services" className="text-gray-600 hover:text-gray-900">Usługi</a>
//                         <a href="#process" className="text-gray-600 hover:text-gray-900">Proces</a>
//                         <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
//                         <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
//                         <a href="#pricing" className="text-gray-600 hover:text-gray-900">Cennik</a>
//                         <a href="#aboutus" className="text-gray-600 hover:text-gray-900">O Nas</a>
//                     </nav>
//                     {/* CTA button, always aligned to the right */}
//                     <a href="#contact" className="hidden md:block text-white bg-black px-4 py-2 rounded-md">Bezpłatna Konsultacja</a>
//                 </div>

//                 {/* Hamburger Icon for mobile */}
//                 <div className="md:hidden">
//                     <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                         <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu - opens as a popup */}
//             {isMenuOpen && (
//                 <div className="absolute top-full right-0 w-full bg-white shadow-lg md:hidden">
//                     <nav className="flex flex-col p-4">
//                         <a href="#services" className="text-gray-600 hover:text-gray-900 mb-2">Usługi</a>
//                         <a href="#process" className="text-gray-600 hover:text-gray-900 mb-2">Proces</a>
//                         <a href="#portfolio" className="text-gray-600 hover:text-gray-900 mb-2">Portfolio</a>
//                         <a href="#faq" className="text-gray-600 hover:text-gray-900 mb-2">FAQ</a>
//                         <a href="#pricing" className="text-gray-600 hover:text-gray-900 mb-2">Cennik</a>
//                         <a href="#aboutus" className="text-gray-600 hover:text-gray-900 mb-2">O nas</a>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// }
import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Function to handle link click
    const handleNavLinkClick = (section: any) => {
        setActiveSection(section); // Set the active section
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <header className="sticky top-0 z-50 bg-white p-4 w-full border-b">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo section */}
                <a
                    href="#hero"
                    className={`text-black text-2xl font-bold`}
                    onClick={() => handleNavLinkClick('hero')}
                >

                    <img src={logo} alt="WeboKraft" style={{ width: '145px', height: 'auto' }} />
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex justify-center flex-1 space-x-8">
                    <a
                        href="#services"
                        className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === 'services' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('services')}
                    >
                        Usługi
                    </a>
                    <a
                        href="#process"
                        className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === 'process' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('process')}
                    >
                        Proces
                    </a>
                    <a
                        href="#portfolio"
                        className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('portfolio')}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#faq"
                        className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('faq')}
                    >
                        FAQ
                    </a>
                    <a
                        href="#pricing"
                        className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('pricing')}
                    >
                        Cennik
                    </a>
                    <a
                        href="#aboutus"
                        className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === 'aboutus' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('aboutus')}
                    >
                        O Nas
                    </a>
                </nav>

                {/* CTA button */}
                <a
                    href="#contact"
                    className="hidden md:block text-white bg-black px-4 py-2 rounded-md"
                    onClick={() => handleNavLinkClick('contact')}
                >
                    Bezpłatna Konsultacja
                </a>
                {/* Hamburger Icon for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full right-0 w-full bg-white shadow-lg md:hidden">
                    <nav className="flex flex-col p-4">
                        <a
                            href="#services"
                            onClick={() => handleNavLinkClick('services')}
                            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                        >
                            Usługi
                        </a>
                        <a
                            href="#process"
                            onClick={() => handleNavLinkClick('process')}
                            className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}
                        >
                            Proces
                        </a>
                        <a
                            href="#portfolio"
                            onClick={() => handleNavLinkClick('portfolio')}
                            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                        >
                            Portfolio
                        </a>
                        <a
                            href="#faq"
                            onClick={() => handleNavLinkClick('faq')}
                            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                        >
                            FAQ
                        </a>
                        <a
                            href="#pricing"
                            onClick={() => handleNavLinkClick('pricing')}
                            className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
                        >
                            Cennik
                        </a>
                        <a
                            href="#aboutus"
                            onClick={() => handleNavLinkClick('aboutus')}
                            className={`nav-link ${activeSection === 'aboutus' ? 'active' : ''}`}
                        >
                            O nas
                        </a>
                    </nav>
                </div>
            )}

        </header>
    );
}

