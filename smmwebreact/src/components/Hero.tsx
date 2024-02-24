import React from 'react';
import heroImage from '../assets/images/hero.png'; // Ensure this path matches your image location

export default function HeroSection() {
    return (
        <section className=" bg-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl h-[80vh] mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:flex-1">
                <h1 className="text-7xl font-bold text-gray-900 mb-6">Twoja Firma w <span className="text-purple">Internecie!</span></h1>
                    <p className="text-lg text-black mb-4">
                    Umożliwiamy firmom korzystanie z innowacyjnych rozwiązań cyfrowych, które tworzą trwałe wrażenia. Podnieś swoją markę razem z nami!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    <a href="#consultation" className="bg-black text-white text-md font-medium px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-700">Skontaktuj Się z Nami</a>
                    <a href="#services" className="text-md font-medium px-5 py-2 underline decoration-black decoration-2 underline-offset-4 hover:text-gray-600">Usługi</a>
                </div>
                    <PricingSection/>
                </div>
                <div className="lg:flex-1 hidden lg:block">
                    <img src={heroImage} alt="Digital Solutions" className="max-w-lg mx-auto"/>
                </div>
            </div>
        </section>
    );
}

function PricingSection() {
    return (
        <div className="bg-white py-14">
            <div className="max-w-6xl mx-auto">
                <p className="text-lg text-center md:text-left">Strona WWW już od</p>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-10 mt-2">

                    <div className="text-center md:text-left">
                        <p className="text-5xl font-bold">990zł</p>
                        <p className="text-base font-light">z kodem #webokraft</p>
                    </div>

                    <div className="text-center md:text-left mt-4 md:mt-0">
                        <p className="text-5xl font-bold">14+</p>
                        <p className="text-base font-light">Branżom pomagamy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
