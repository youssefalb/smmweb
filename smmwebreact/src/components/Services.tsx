import React from 'react';
import speakerIcon from '../assets/icons/speaker.png';
import searchIcon from '../assets/icons/search.png';
import webIcon from '../assets/icons/web.png';
import backgroundYellow from '../assets/images/yellow-bg.svg'; 
import backgroundPurple from '../assets/images/purple-bg.svg'; 


interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    background: string; 
    textColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, background, textColor }) => {
    return (
        <div className={`rounded-2xl p-6 shadow-lg flex flex-col bg-cover bg-center relative`} style={{ backgroundImage: `url(${background})` }}>
            <div className="flex justify-start mb-4">
                <img src={icon} alt={`${title} icon`} className="h-12 w-12" />
            </div>
            <div style={{ maxWidth: '70%' }}> 
                <h2 className={`text-2xl font-bold mb-3 ${textColor}`}>{title}</h2>
                <p className={`${textColor} opacity-85`}>{description}</p>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
    return (
        <div className=" bg-gray-100 py-10">
            <div className="text-center">
                <p className="uppercase text-sm text-gray-500 mb-2">nasze usługi</p>
                <h2 className="text-4xl font-bold mb-20">Co Oferujemy?</h2>
            </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ServiceCard 
                icon={speakerIcon}
                title="Zarządzanie Mediami Społecznościowymi"
                description="Tworzenie i zarządzanie kontami, projektowanie postów, edycja wideo, reklama."
                background={backgroundPurple}
                textColor="text-white"
            />
            <ServiceCard 
                icon={webIcon}
                title="Projektowanie Stron Internetowych"
                description="Tworzenie strony internetowej z zachwycającą grafiką i doświadczeniem użytkownika."
                background={backgroundYellow}
                textColor="text-black"
            />
            <ServiceCard 
                icon={searchIcon}
                title="SEO Optymalizacja"
                description="Zwiększ widoczność i przyciągnij organiczny ruch dzięki naszym technikom SEO."
                background={backgroundPurple}
                textColor="text-white"
            />
        </div>
        </div>
    );
};

export default Services;
