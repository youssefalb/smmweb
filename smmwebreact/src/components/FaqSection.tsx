import React, { useState } from 'react';
import backgroundImage from '../assets/images/faq.svg';  // Update the path to your actual image

// Define a type for the FAQ data to ensure type safety
interface FAQItem {
    question: string;
    answer: string;
}

// Sample FAQ data
const faqs: FAQItem[] = [
    { question: 'Do you offer flexible payment options?', answer: 'Yes, we provide a variety of payment options to suit our customers\' needs and ensure easy payment process.' },
    { question: 'What services do you offer?', answer: 'We offer a wide range of digital services including digital marketing, web design, SEO, graphic design, content creation, and social media management.' },
    { question: 'How long does it take to see results?', answer: 'The time to see results can vary depending on several factors including the nature of your project and the specific services engaged. Typically, clients start to see tangible results within a few weeks to a few months.' },
    { question: 'How can I request a quote for your service?', answer: 'You can request a quote by contacting us through our website, via email, or by phone. We will get back to you with a detailed proposal after understanding your requirements.' },
    { question: 'How can I request a quote for your service?', answer: 'You can request a quote by contacting us through our website, via email, or by phone. We will get back to you with a detailed proposal after understanding your requirements.' },
    { question: 'How can I request a quote for your service?', answer: 'You can request a quote by contacting us through our website, via email, or by phone. We will get back to you with a detailed proposal after understanding your requirements.' }
];

const FaqSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="bg-gray-100 ">
            <div className="text-center">
                <p className="uppercase text-sm text-gray-500 mb-2">faq</p>
                <h2 className="text-4xl font-bold mb-20">Często Zadawane Pytania</h2>
            </div>
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
                            <h2 className="text-white text-4xl font-bold">Odpowiedzi na Twoje pytania</h2>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default FaqSection;
