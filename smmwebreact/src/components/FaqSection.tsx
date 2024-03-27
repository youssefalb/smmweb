import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import backgroundImage from '../assets/images/faq.svg';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define a type for the FAQ data to ensure type safety
interface FAQItem {
    question: string;
    answer: string;
}

const FaqSection: React.FC = () => {
    const { t } = useTranslation();
    const faqsRef = useRef<(HTMLDivElement | null)[]>([]);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        { question: t('faq.questions.additionalFees.question'), answer: t('faq.questions.additionalFees.answer') },
        { question: t('faq.questions.seoOptimized.question'), answer: t('faq.questions.seoOptimized.answer') },
        { question: t('faq.questions.creationTime.question'), answer: t('faq.questions.creationTime.answer') },
        { question: t('faq.questions.makingChanges.question'), answer: t('faq.questions.makingChanges.answer') },
        { question: t('faq.questions.ownership.question'), answer: t('faq.questions.ownership.answer') },
        { question: t('faq.questions.mobileResponsive.question'), answer: t('faq.questions.mobileResponsive.answer') },
        { question: t('faq.questions.educationalMaterials.question'), answer: t('faq.questions.educationalMaterials.answer') }
    ];
    useEffect(() => {
        faqsRef.current = faqsRef.current.slice(0, faqs.length); // Ensure refs array matches the number of FAQ items

        faqsRef.current.forEach((el, index) => {
            if (!el) return; // Skip if the ref is not assigned

            gsap.fromTo(el, { y: 20, autoAlpha: 0 }, {
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=200", // Adjust to control when the animation starts
                    end: "top center", // Adjust to control when the animation ends
                    toggleActions: "play none none reverse", // Ensures animation plays in reverse when scrolling up
                    markers: false, // Set to true to see start and end points during development
                },
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: "power1.out",
                stagger: 0.1, // Adjust time between the start of each item's animation
            });
        });
    }, [faqs]); // Dependency array

    return (
        <section id="faq" className='overflow-x-hidden'>
            <SectionContainer
                title={t('faq.title')}
                subtitle={t('faq.subtitle')}
            >
                <div className="max-w-6xl mx-auto relative flex flex-wrap">
                    {/* FAQ cards section, taking 2/3 of the width but offset to the left */}
                    <div className="w-full lg:w-2/3 lg:-mr-1/3 p-6 z-10">
                        {faqs.map((faq, index) => (
                            <div key={index}
                                ref={(el) => (faqsRef.current[index] = el)}
                                className={`bg-white p-5 rounded-2xl ${index === activeIndex ? 'mb-2' : 'mb-2'}`}>
                                <button onClick={() => setActiveIndex(index === activeIndex ? null : index)} className="flex items-center w-full text-left">
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${index === activeIndex ? 'bg-white text-black border-2 border-black' : 'bg-black text-white'}`}>
                                        {index === activeIndex ? '-' : '+'}
                                    </div>
                                    <span className="ml-4 font-bold">{faq.question}</span>
                                </button>
                                {index === activeIndex && (
                                    <div className="mt-4 text-gray-800">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 right-0 w-2/3 h-full lg:w-2/3 lg:-ml-1/3 z-0">
                        <div className="hidden lg:block h-full w-full bg-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${backgroundImage})` }}>
                            {/* Text positioned at the top right corner */}
                            <div className="absolute top-16 right-12 w-1/3">
                                <h2 className="text-white text-4xl font-bold">{t('faq.description')}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default FaqSection;
