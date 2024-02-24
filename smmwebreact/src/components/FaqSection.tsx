import React, { useState } from 'react';
import backgroundImage from '../assets/images/faq.svg';  // Update the path to your actual image
import SectionContainer from './templates/SectionContainer';

// Define a type for the FAQ data to ensure type safety
interface FAQItem {
    question: string;
    answer: string;
}

// Sample FAQ data
const faqs: FAQItem[] = [
    { question: 'Czy są jakieś dodatkowe opłaty związane z tworzeniem strony internetowej?', answer: 'Płatność za stworzenie witryny internetowej jest jednorazowa. Otrzymasz od nas szczegółową wycenę przed rozpoczęciem prac, która pozostanie niezmieniona przez cały czas tworzenia projektu. Możesz zdecydować się na dodatkowe usługi, które są płatne, ale nie są obowiązkowe.' },
    { question: 'Czy moja nowa strona internetowa będzie zoptymalizowana pod kątem pozycjonowania?', answer: 'Tak, tworzymy nowoczesne witryny internetowe zgodne z aktualnymi wytycznymi Google. Dzięki temu strony są przygotowane do skutecznego pozycjonowania w wynikach wyszukiwania.' },
    { question: 'Jak długo trwa proces tworzenia strony internetowej?', answer: 'Standardowe strony internetowe tworzymy w ciągu 48 godzin od otrzymania wszystkich niezbędnych informacji. Dla bardziej zaawansowanych projektów czas realizacji może być dłuższy.' },
    { question: 'Czy mogę wprowadzać zmiany w trakcie tworzenia strony?', answer: 'Tak, w procesie projektowania przewidziane są trzy rundy korekt. Możesz przedstawić nam swoje sugestie w każdym momencie tworzenia strony.' },
    { question: 'Czy po zakończeniu projektu strona internetowa będzie moją własnością?', answer: 'Tak, po zakończeniu projektu otrzymasz pełne prawa do strony wraz z wszystkimi niezbędnymi dostępami do jej zarządzania i kopią zapasową.' },
    { question: 'Czy strona będzie odpowiednio wyświetlać się na urządzeniach mobilnych?', answer: 'Tak, wszystkie nasze strony są responsywne, co oznacza, że będą się one poprawnie wyświetlać na różnych urządzeniach, w tym na tabletach, komputerach i smartfonach.' },
    { question: 'Czy otrzymam materiały edukacyjne, jak zarządzać moją stroną internetową oraz inne przydatne materiały dotyczące poprawy obecności mojego biznesu w internecie?', answer: 'Tak, po zakończeniu projektu strony WWW dostarczymy Ci materiały edukacyjne dotyczące zarządzania Twoją stroną oraz poradnik, jak poprawić widoczność Twojego biznesu w internecie.' }
];

const FaqSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq">
            <SectionContainer
                title="Często Zadawane Pytania"
                subtitle="faq"
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
                                <h2 className="text-white text-4xl font-bold">Odpowiedzi na Twoje pytania</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default FaqSection;
