import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ConsultationSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null); // Reference to the section for the animation

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Ensure the element is initially hidden to prevent flashing
        gsap.set(sectionRef.current, { autoAlpha: 0 });

        const el = sectionRef.current;
        if (el) {
            // Start the animation sequence
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    // Adjust toggleActions for smoother behavior or consider removing if not needed
                    toggleActions: 'restart pause resume reset',
                    markers: false, // Useful for debugging
                }
            });

            tl.fromTo(el,
                { y: 50, scale: 0.95, autoAlpha: 0 },
                { y: 0, scale: 1, autoAlpha: 1, duration: 3, ease: 'expo.out' }
            );
        }

        // Refresh ScrollTrigger on window load to ensure correct start/end points
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('load', () => ScrollTrigger.refresh());
    }, []);



    return (
        <div ref={sectionRef} className="flex min-h-52 items-center justify-center bg-white relative px-6 py-32">
            <div className="flex items-stretch bg-purple max-w-6xl rounded-2xl relative overflow-hidden">
                <div className="hidden md:block self-stretch">
                    <img
                        src="/vector_white.png"
                        alt="Decorative element"
                        className="absolute top-0 left-0 z-0 w-1/12"
                    />
                    <img
                        src="/bench-accounting.png"
                        alt="Person working on a laptop"
                        className="h-full w-full object-center object-cover rounded-l-2xl"
                    />
                </div>

                <div className="p-8 relative z-20">
                    <h2 className="text-4xl font-bold text-white">
                        {t('consultation.title')}
                    </h2>
                    <p className="mt-4 text-lg text-white mb-8">
                        {t('consultation.description')}
                    </p>
                    <a href="#contact" className="bg-black text-white font-bold py-3 px-4 hover:bg-purple-800 transition-colors my-4 rounded-lg">
                        {t('consultation.button')}
                    </a>
                </div>

                <img
                    src="/vector_yellow.png"
                    alt="Decorative element"
                    className="hidden md:block absolute bottom-8 right-8 translate-x-1/2 translate-y-1/2 z-10"
                    style={{ width: '11%' }}
                />
            </div>
        </div>
    );
};

export default ConsultationSection;
