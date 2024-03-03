import React from 'react';
import ProfileCard from './ProfileCard';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';

const TeamSection = () => {
    const { t } = useTranslation();

    return (
        <section id="aboutus">
            <SectionContainer
                title={t('teamSection.title')}
                subtitle={t('teamSection.subtitle')}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-purple relative justify-between items-start p-6 rounded-2xl shadow-md flex flex-col min-h-[400px] min-w-[240px] ${className}"> {/* Adjusted for button spacing */}
                        <div> {/* Content container */}
                            <h3 className="text-3xl text-white font-bold mb-3">{t('teamSection.hello')}</h3>
                            <p className="text-gray-300">
                            {t('teamSection.introduction')}
                            </p>
                        </div>
                        <a href="#contact" className="w-full mt-4 border-2 text-center border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple transition duration-300 font-bold">{t('teamSection.contactButton')}</a> {/* New Button */}
                    </div>

                    <ProfileCard
                        name="Andrii"
                        surname=" Bobchuk"
                        titles={["Web Developer, SMM Specialist"]}
                        cardImg="/IMG_1757.jpg"
                    />
                    <ProfileCard
                        name="Youssef"
                        surname="Al bali"
                        titles={["Web Developer, SEO Specialist"]}
                        cardImg="/youssef_card.png"
                    />
                </div>
            </SectionContainer>

        </section>
    );
};

export default TeamSection;
