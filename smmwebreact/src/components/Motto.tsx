import React, { useEffect, useRef } from 'react';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomSection: React.FC = () => {
    const { t } = useTranslation();
    const leftRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const rightRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const animateElement = (element: HTMLSpanElement | null, x: number, trigger: ScrollTrigger.Vars) => {
        if (element) {
            gsap.fromTo(element,
                { autoAlpha: 0, x },
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        ...trigger,
                        onEnter: () => gsap.to(element, { autoAlpha: 1, x: 0 }),
                        onLeave: () => gsap.set(element, { autoAlpha: 0, x }),
                        onEnterBack: () => gsap.to(element, { autoAlpha: 1, x: 0 }),
                        onLeaveBack: () => gsap.set(element, { autoAlpha: 0, x }),
                    },
                });
        }
    };

    useEffect(() => {
        leftRefs.current.forEach((leftRef) => {
            animateElement(leftRef, -100, { trigger: leftRef!, start: "top bottom", end: "bottom top", toggleActions: "play none none none", });
        });

        rightRefs.current.forEach((rightRef) => {
            animateElement(rightRef, 100, { trigger: rightRef!, start: "top bottom", end: "bottom top", toggleActions: "play none none none", });
        });
    }, []);

    // Helper functions to add elements to refs
    const addToRefs = (el: HTMLSpanElement, side: 'left' | 'right') => {
        if (el) {
            if (side === 'left') leftRefs.current.push(el);
            else rightRefs.current.push(el);
        }
    };


    return (
        <SectionContainer
            title={t('mission.title')}
            subtitle={t('mission.subtitle')}
            backgroundColor="bg-white"
        >
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4 mb-20">
                {/* Example for one row, replicate for others */}
                <div className="flex md:flex-row items-center space-y-2 space-x-2 md:space-y-0 md:space-x-4">
                    <span ref={(el) => addToRefs(el!, 'left')} className="text-md md:text-4xl text-center">{t('mission.part1')}</span>
                    <div className="bg-purple rounded-3xl w-8 md:w-32 h-6 md:h-10"></div>
                    <span ref={(el) => addToRefs(el!, 'right')} className="text-md md:text-4xl text-center">{t('mission.part2')}</span>
                </div>
                {/* Second Row */}
                <div className="flex md:flex-row items-center space-y-2 space-x-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span ref={(el) => addToRefs(el!, 'left')} className="text-md md:text-4xl text-center">{t('mission.part3')}</span> {/* Adjust font size */}
                    <div className="bg-yellow rounded-3xl w-14 md:w-32 h-6 md:h-10"></div> {/* Adjust rectangle size */}
                    <span ref={(el) => addToRefs(el!, 'right')} className="text-md md:text-4xl text-center">{t('mission.part4')}</span> {/* Adjust font size */}
                </div>

                {/* Third Row */}
                <div className="flex md:flex-row items-center space-y-2 space-x-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span ref={(el) => addToRefs(el!, 'left')} className="text-md md:text-4xl text-center">{t('mission.part5')}</span> {/* Adjust font size */}
                    <div className="bg-green rounded-3xl w-14 md:w-32 h-6 md:h-10"></div> {/* Adjust rectangle size */}
                    <span ref={(el) => addToRefs(el!, 'right')} className="text-md md:text-4xl text-center">{t('mission.part6')}</span> {/* Adjust font size */}
                </div>            </div>
        </SectionContainer>
    );
};

export default CustomSection;


