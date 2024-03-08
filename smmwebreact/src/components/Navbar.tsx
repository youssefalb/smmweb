
import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';


gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const logoRef = useRef(null);
    const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    navLinksRef.current = [];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'services', name: t('footer.menu.services') },
        { id: 'faq', name: t('footer.menu.faq') },
        { id: 'portfolio', name: t('footer.menu.portfolio') },
        { id: 'aboutus', name: t('footer.menu.about') },
        { id: 'contact', name: t('footer.menu.contact') }
    ];
    const handleScroll = () => {
        const sections = ['home', 'services', 'faq', 'portfolio', 'aboutus', 'contact'];

        let activeSectionTemp = '';
        sections.forEach((section) => {
            const el = document.getElementById(section);
            if (el) {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                if (scrollPosition >= el.offsetTop && scrollPosition <= el.offsetTop + el.offsetHeight) {
                    activeSectionTemp = section;
                }
            }
        });
        setActiveSection(activeSectionTemp);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        // Set initial states for animation if needed
        gsap.set(logoRef.current, { opacity: 0, x: -50 });
        gsap.set(navLinksRef.current, { opacity: 0, x: -50 });

        // Animate to fully visible state
        gsap.to(logoRef.current, { duration: 1, opacity: 1, x: 0, ease: 'power1.out' });
        gsap.to(navLinksRef.current, { duration: 0.5, opacity: 1, x: 0, stagger: 0.1, ease: 'power1.out' });


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    const addToNavLinksRef = (el: any) => {
        if (el && !navLinksRef.current.includes(el)) {
            navLinksRef.current.push(el);
        }
    };

    const handleNavLinkClick = (section: any) => {
        setActiveSection(section);
        setIsMenuOpen(false);

    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
    };

    return (
        <header className="fixed top-0 z-50 bg-white p-4 w-full border-b">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo section */}
                <div className="flex items-center">
                    <a
                        href="#hero"
                        className={`text-black text-2xl font-bold`}
                        onClick={() => handleNavLinkClick('hero')}
                    >

                        <img src={logo} alt="WeboKraft" ref={logoRef} style={{ width: '145px', height: 'auto' }} />
                    </a>

                    <div className="ml-4">
                        <button className="text-gray-600 hover:text-gray-900" onClick={() => changeLanguage('en')}>EN</button> |
                        <button className="text-gray-600 hover:text-gray-900" onClick={() => changeLanguage('pl')}>PL</button>
                    </div>
                </div>


                {/* Desktop Menu */}
                <nav className="hidden lg:flex justify-center flex-1 space-x-8">
                    {[
                        { id: 'services', name: t('footer.menu.services') },
                        { id: 'faq', name: t('footer.menu.faq') },
                        { id: 'portfolio', name: t('footer.menu.portfolio') },
                        { id: 'aboutus', name: t('footer.menu.about') }
                    ].map((section, index) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`text-gray-600 hover:text-gray-900 nav-link ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => handleNavLinkClick(section.id)}
                            ref={addToNavLinksRef} // Use the ref adding function here
                        >
                            {section.name}
                        </a>
                    ))}
                </nav>

                {/* CTA button */}
                <a
                    href="#contact"
                    className="hidden lg:block text-white bg-black px-4 py-2 rounded-md"
                    onClick={() => handleNavLinkClick('contact')}
                    ref={addToNavLinksRef} // Use the ref adding function here
                >
                    {t('navbar.freeConsultation')}
                </a>
                {/* Hamburger Icon for mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full right-0 w-full bg-white shadow-lg lg:hidden">
                    <nav className="flex flex-col p-4">
                        <a
                            href="#services"
                            onClick={() => handleNavLinkClick('services')}
                            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                        >
                            {t('footer.menu.services')}
                        </a>
                        <a
                            href="#faq"
                            onClick={() => handleNavLinkClick('faq')}
                            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                        >
                            {t('footer.menu.faq')}
                        </a>
                        <a
                            href="#portfolio"
                            onClick={() => handleNavLinkClick('portfolio')}
                            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                        >
                            {t('footer.menu.portfolio')}
                        </a>
                        <a
                            href="#aboutus"
                            onClick={() => handleNavLinkClick('aboutus')}
                            className={`nav-link ${activeSection === 'aboutus' ? 'active' : ''}`}
                        >
                            {t('footer.menu.about')}
                        </a>
                    </nav>
                </div>
            )}

        </header>
    );
}

