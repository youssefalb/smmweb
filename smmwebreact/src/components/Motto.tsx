import React from 'react';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';

const CustomSection = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer
            title={t('mission.title')}
            subtitle={t('mission.subtitle')}
            backgroundColor="bg-white"
        >
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4 mb-20"> {/* Adjust space between rows */}
                {/* First Row */}
                <div className="flex md:flex-row items-center space-y-2 space-x-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span className="text-md md:text-4xl  text-center">{t('mission.part1')}</span> {/* Adjust font size */}
                    <div className="bg-purple rounded-3xl w-8 md:w-32 h-6 md:h-10"></div> {/* Adjust rectangle size */}
                    <span className="text-md md:text-4xl text-center">{t('mission.part2')}</span> {/* Adjust font size */}
                </div>

                {/* Second Row */}
                <div className="flex md:flex-row items-center space-y-2 space-x-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span className="text-md md:text-4xl text-center">{t('mission.part3')}</span> {/* Adjust font size */}
                    <div className="bg-yellow rounded-3xl w-14 md:w-32 h-6 md:h-10"></div> {/* Adjust rectangle size */}
                    <span className="text-md md:text-4xl text-center">{t('mission.part4')}</span> {/* Adjust font size */}
                </div>

                {/* Third Row */}
                <div className="flex md:flex-row items-center space-y-2 space-x-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span className="text-md md:text-4xl text-center">{t('mission.part5')}</span> {/* Adjust font size */}
                    <div className="bg-green-500 rounded-3xl w-14 md:w-32 h-6 md:h-10"></div> {/* Adjust rectangle size */}
                    <span className="text-md md:text-4xl text-center">{t('mission.part6')}</span> {/* Adjust font size */}
                </div>
            </div>
        </SectionContainer>
    );
};

export default CustomSection;
