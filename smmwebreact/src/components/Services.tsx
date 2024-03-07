import React, { useEffect, useRef } from 'react';
import speakerIcon from '../assets/icons/speaker.png';
import searchIcon from '../assets/icons/search.png';
import webIcon from '../assets/icons/web.png';
import backgroundYellow from '../assets/images/yellow-bg.svg';
import backgroundPurple from '../assets/images/purple-bg.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    background: string;
    textColor: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(({
    icon,
    title,
    description,
    background,
    textColor,
}, ref) => (
    <div ref={ref} className={`rounded-2xl p-6 shadow-lg flex flex-col bg-cover bg-center relative`} style={{ backgroundImage: `url(${background})` }}>
        <div className="flex justify-start mb-4">
            <img src={icon} alt={`${title} icon`} className="h-12 w-12" />
        </div>
        <div style={{ maxWidth: '70%' }}>
            <h2 className={`text-2xl font-bold mb-3 ${textColor}`}>{title}</h2>
            <p className={`${textColor} opacity-85`}>{description}</p>
        </div>
    </div>
));

ServiceCard.displayName = 'ServiceCard';

const Services: React.FC = () => {
    const { t } = useTranslation();

    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);
    const middleCardRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = [leftCardRef.current, middleCardRef.current, rightCardRef.current];
        elements.forEach((el, index) => {
            gsap.fromTo(el, { autoAlpha: 0, x: index === 0 ? -200 : index === 2 ? 200 : 0 }, {
                duration: 1,
                autoAlpha: 1,
                x: 0,
                scrollTrigger: {
                    trigger: el,
                    start: "top center+=100",
                    toggleActions: "play pause play reverse",
                },
            });
        });

        // Animation for the subtitle coming from the right
        ScrollTrigger.create({
            trigger: subtitleRef.current,
            start: "top 90%", // Adjust as needed
            onEnter: () => gsap.fromTo(subtitleRef.current, { autoAlpha: 0, x: 500 }, { duration: 1, autoAlpha: 1, x: 0 }),
            onLeave: () => gsap.to(subtitleRef.current, { autoAlpha: 0, x: 500, duration: 1 }),
            onEnterBack: () => gsap.to(subtitleRef.current, { autoAlpha: 1, x: 0, duration: 1 }),
            onLeaveBack: () => gsap.to(subtitleRef.current, { autoAlpha: 0, x: -500, duration: 1 }),
        });

        // Animation for the title coming from the left
        ScrollTrigger.create({
            trigger: titleRef.current,
            start: "top 90%", // Adjust as needed
            onEnter: () => gsap.fromTo(titleRef.current, { autoAlpha: 0, x: -500 }, { duration: 1, autoAlpha: 1, x: 0 }),
            onLeave: () => gsap.to(titleRef.current, { autoAlpha: 0, x: -500, duration: 1 }),
            onEnterBack: () => gsap.to(titleRef.current, { autoAlpha: 1, x: 0, duration: 1 }),
            onLeaveBack: () => gsap.to(titleRef.current, { autoAlpha: 0, x: 500, duration: 1 }),
        });
    }, [t]);

    
    return (
        <section id="services">
            <div className="bg-white py-20 mb-20">
                <div className="text-center">
                    <p ref={subtitleRef} className="background-text__item uppercase text-sm text-gray-500 mb-2">{t('services.subtitle')}</p>
                    <h2 ref={titleRef} className="text-4xl font-bold mb-20">{t('services.title')}</h2>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ServiceCard
                        ref={leftCardRef}
                        icon={speakerIcon}
                        title={t('services.socialMediaManagement.title')}
                        description={t('services.socialMediaManagement.description')}
                        background={backgroundPurple}
                        textColor="text-white"
                    />
                    <ServiceCard
                        ref={middleCardRef}
                        icon={webIcon}
                        title={t('services.webDesign.title')}
                        description={t('services.webDesign.description')}
                        background={backgroundYellow}
                        textColor="text-black"
                    />
                    <ServiceCard
                        ref={rightCardRef}
                        icon={searchIcon}
                        title={t('services.seoOptimization.title')}
                        description={t('services.seoOptimization.description')}
                        background={backgroundPurple}
                        textColor="text-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
