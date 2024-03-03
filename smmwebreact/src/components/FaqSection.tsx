import React, { useState } from 'react';
import backgroundImage from '../assets/images/faq.svg';  // Update the path to your actual image
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';

// Define a type for the FAQ data to ensure type safety
interface FAQItem {
    question: string;
    answer: string;
}

const FaqSection: React.FC = () => {
    const { t } = useTranslation();

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

    return (
        <section id="faq">
            <SectionContainer
                title={t('faq.title')}
                subtitle={t('faq.subtitle')}
            >
                <div className="max-w-6xl mx-auto relative flex flex-wrap">
                    {/* FAQ cards section, taking 2/3 of the width but offset to the left */}
                    <div className="w-full lg:w-2/3 lg:-mr-1/3 p-8 z-10">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`bg-white p-5 rounded-2xl ${index === activeIndex ? 'mb-2' : 'mb-2'}`}>
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
