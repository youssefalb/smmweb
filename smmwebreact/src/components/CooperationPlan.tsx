import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const CooperationPlan = () => {
    const { t } = useTranslation();
    const gridRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        if (gridRef.current) {
            const gridItems = Array.from(gridRef.current.children);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top center+=300",
                    end: "top center",
                    toggleActions: "play none play none",
                    scrub: 1,
                }
            })
                .fromTo(gridItems,
                    { autoAlpha: 0, y: 50 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 2,
                        stagger: 0.2,
                        ease: "back.out(1.7)",
                    }
                );

            // Cleanup function
            return () => {
                if (tl.scrollTrigger) {
                    tl.scrollTrigger.kill();
                }
                tl.kill();
            };
        }
    }, [t]);


    return (
        <section id="process" className='overflow-x-hidden'>
            <SectionContainer
                title={t('cooperationPlan.title')}
                subtitle={t('cooperationPlan.subtitle')}
                backgroundColor="bg-gray-100"
            >
                <div ref={gridRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 mb-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/messageicon.png" alt="Wywiad" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.interview.title')}</h3>
                        <p className="text-gray-600">
                            {t('cooperationPlan.steps.interview.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/bookicon.png" alt="Projekt" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.design.title')}</h3>
                        <p className="text-gray-600">
                            {t('cooperationPlan.steps.design.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/shareicon.png" alt="Wykonanie" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.implementation.title')}</h3>
                        <p className="text-gray-600">
                            {t('cooperationPlan.steps.implementation.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/messageicon2.png" alt="Akceptacja i Wdrożenie" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.acceptance.title')}</h3>
                        <p className="text-gray-600">
                            {t('cooperationPlan.steps.acceptance.description')}
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default CooperationPlan;
