import React, { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
    const { t } = useTranslation();
    const leftCardRef = useRef<HTMLDivElement>(null);
    const middleCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateFrom = (elem: Element, direction: string) => {
            const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
            const y = direction === 'bottom' ? 100 : 0;

            ScrollTrigger.create({
                trigger: elem,
                start: 'top 85%',
                end: "bottom top",
                onEnter: () => gsap.fromTo(elem, { autoAlpha: 0, x, y }, {
                    duration: 1.5,
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    ease: 'expo.out'
                }),
                toggleActions: 'play none none none',
            });
        };

        if (leftCardRef.current) {
            animateFrom(leftCardRef.current, 'left');
        }
        if (middleCardRef.current) {
            animateFrom(middleCardRef.current, 'bottom');
        }
        if (rightCardRef.current) {
            animateFrom(rightCardRef.current, 'right');
        }
    }, []);

    return (
        <section id="aboutus" className='overflow-x-hidden'>
            <SectionContainer
                title={t('teamSection.title')}
                subtitle={t('teamSection.subtitle')}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div ref={leftCardRef} className="bg-purple relative justify-between items-start p-6 rounded-2xl shadow-md flex flex-col min-h-[400px] min-w-[240px]">
                        <div> {/* Content container */}
                            <h3 className="text-3xl text-white font-bold mb-3">{t('teamSection.hello')}</h3>
                            <p className="text-gray-300">
                                {t('teamSection.introduction')}
                            </p>
                        </div>
                        <a href="#contact" className="w-full mt-4 border-2 text-center border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple transition duration-300 font-bold">{t('teamSection.contactButton')}</a>
                    </div>
                    <div ref={middleCardRef}>
                        <ProfileCard
                            name="Andrii"
                            surname="Bobchuk"
                            titles={["Web Developer, SMM Specialist"]}
                            cardImg="/IMG_1757.jpg"
                        />
                    </div>
                    <div ref={rightCardRef}>
                        <ProfileCard
                            name="Youssef"
                            surname="Al bali"
                            titles={["Web Developer, SEO Specialist"]}
                            cardImg="/youssef_card.png"
                        />
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default TeamSection;
