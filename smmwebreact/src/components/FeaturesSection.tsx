import React from 'react';
import SectionContainer from './templates/SectionContainer'; // Adjust the import path as necessary

interface FeatureCardProps {
    title: string;
    description: string;
    iconPath: string;
  }

  const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconPath }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg flex"> 
            <div className="flex-shrink-0 rounded-full mr-5"> 
                <img src={iconPath} alt={title} className="w-14 h-14" /> 
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
                <p className="text-black">{description}</p>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            title: "Projekt Graficzny",
            description: "Profesjonalny projekt graficzny strony dostosowanydo indywidualnych potrzeb klienta",
            icon: '/projekt.svg',
        },
        {
            title: "Mobilna Wersja",
            description: "Dostosowujemy stronę do urządzeń mobilnych, zapewniając płynne doświadczenie użytkownika.",
            icon: "/mob.svg",
        },
        {
            title: "Prywatność",
            description: "Zapewniamy, że strona jest zgodna z aktualnymi przepisami dotyczącymi prywatności i ochrony danych",
            icon: "/prywatnosc.svg",
        },
        {
            title: "Szybkie Ładowanie",
            description: "Optymalizujemy prędkość ładowania strony, co przekłada się na lepsze rankingi w wyszukiwarkach i satysfakcję użytkowników",
            icon: '/lad.svg', 
        },
        {
            title: "Optymalizacja Pozycjonowania",
            description: "Zwiększ widoczność strony w wynikach wyszukiwania dzięki zaawansowanym strategiom SEO.",
            icon: '/opt.svg', 
        },
        {
            title: "Szkolenie & Doradztwo",
            description: "Oferujemy profesjonalne szkolenia, aby pomóc Ci lepiej zarządzać stroną internetową i strategiami cyfrowymi.",
            icon: '/szkolenie.svg', 
        },
    ];

    return (
        <SectionContainer title="Co w Zestawie?" subtitle='STANDARDOWA STRONA' backgroundColor="bg-purple" textColor="text-white" subtitleColor="text-gray-200">
            <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        iconPath={feature.icon}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default FeaturesSection;
