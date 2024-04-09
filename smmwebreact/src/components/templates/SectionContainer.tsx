import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionContainerProps {
    title: string;
    subtitle?: string; // Optional
    children: React.ReactNode;
    backgroundColor?: string; // Optional
    textColor?: string; // Optional
    subtitleColor?: string; // Optional
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    title,
    subtitle,
    children,
    backgroundColor = 'bg-gray-100', // Default background color
    textColor = 'text-gray-700', // Default main text color
    subtitleColor = 'text-gray-500', // Default subtitle color
}) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // Animation for the subtitle
        ScrollTrigger.create({
            trigger: subtitleRef.current,
            start: "top 90%",
            onEnter: () => gsap.fromTo(subtitleRef.current, { autoAlpha: 0, x: -500 }, { duration: 1, autoAlpha: 1, x: 0 }),
            once: true,
        });

        // Animation for the title
        ScrollTrigger.create({
            trigger: titleRef.current,
            start: "top 90%",
            onEnter: () => gsap.fromTo(titleRef.current, { autoAlpha: 0, x: 500 }, { duration: 1, autoAlpha: 1, x: 0 }),
            once: true,
        });
    }, [subtitle]);


    return (
        <div className={`${backgroundColor} py-20  overflow-x-hidden border-gray-950`}>
            <div className="text-center">
                {subtitle && (
                    <p ref={subtitleRef} className={`uppercase text-sm mb-2 ${subtitleColor}`}>
                        {subtitle}
                    </p>
                )}
                <h2 ref={titleRef} className={`text-4xl font-bold mb-20 ${textColor}`}>{title}</h2>
            </div>
            <div className={`max-w-6xl mx-auto ${textColor}`}>
                {children} {/* Custom section content */}
            </div>
        </div>
    );
};

export default SectionContainer;
