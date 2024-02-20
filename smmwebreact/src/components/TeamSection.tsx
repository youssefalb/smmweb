import React from 'react';
import ProfileCard from './ProfileCard';

const TeamSection = () => {
    return (
        <div className="bg-gray-100 p-10">
            <div className="text-center">
                <p className="uppercase text-sm text-gray-500 mb-10">ZESPÓL</p>

                <h2 className="text-4xl font-semibold mb-6">Zespól TopStrony</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 min-h-[400px]">
                {/* Text Description */}
                <div className="bg-yellow-200 p-6 rounded-3xl shadow-md max-w-md min-h-[360px]">
                    <h3 className="text-xl font-bold mb-3">Cześć!</h3>
                    {/* To change */}
                    <p className="text-gray-700">
                        Jako założyciele, ja, Andrii, specjalizuję się w rozwiązaniach technologicznych, natomiast Youssef w strategiach biznesowych. Nasza firma oferuje wysokiej jakości usługi w zakresie projektowania stron internetowych, SEO oraz zarządzania mediami społecznościowymi, gwarantując naszym klientom przewagę konkurencyjną na rynku.
                    </p>
                </div>

                <div className="flex justify-center items-center space-x-4">
                    <ProfileCard
                        name="Andrii"
                        surname=" Bobchuk"
                        titles={["Web Developer", "SMM Specialist"]}
                        profileImg="/path-to-andrii-image.png"
                    />
                    <ProfileCard
                        name="Youssef"
                        surname="Al bali"
                        titles={["Web Developer", "SEO Specialist"]}
                        profileImg="/path-to-youssef-image.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
