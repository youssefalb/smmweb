import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/images/hero.svg';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation();

    // References to DOM elements you want to animate
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        gsap.fromTo(textRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(imageRef.current,
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <section id="hero" className="bg-gray-100 pt-20 pb-20 px-8 sm:px-6 lg:px-8">
            <div className="max-w-6xl h-[90vh] mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:flex-1" ref={textRef}>
                    <h1 className="text-7xl font-bold text-gray-900 mb-6">{t('hero.titlePartOne')} <span className="text-purple">{t('hero.titlePartTwo')}</span></h1>
                    <p className="text-lg text-black mb-4">
                    {t('hero.description')}
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-10">
                        <a href="#contact" className="bg-black text-white text-md font-medium px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-700">{t('hero.contactButton')}</a>
                        <a href="#services" className="text-md font-medium px-5 py-2 underline decoration-black decoration-2 underline-offset-4 hover:text-gray-600">{t('hero.servicesButton')}</a>
                    </div>
                    <PricingSection />
                </div>
                <div className="lg:flex-1 hidden lg:block" ref={imageRef}>
                    <img src={heroImage} alt="Digital Solutions" className="max-w-lg mx-auto" />
                </div>
            </div>
        </section>
    );
}

function PricingSection() {
    const { t } = useTranslation();

    return (
        <div className="py-14">
            <div className="max-w-6xl mx-auto">
                <p className="text-lg text-center md:text-left">{t('hero.websiteOffer')}</p>

                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-10 mt-2">

                    <div className="text-center md:text-left">
                        <p className="text-5xl font-bold">{t('hero.price')}</p>
                        <p className="text-base font-light">{t('hero.codeNote')}</p>
                    </div>

                    <div className="text-center md:text-left mt-4 md:mt-0">
                        <p className="text-5xl font-bold">14+</p>
                        <p className="text-base font-light">{t('hero.helpNote')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
