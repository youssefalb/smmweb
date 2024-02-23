import React from 'react';
import SectionContainer from './templates/SectionContainer';

const CustomSection = () => {
    return (
        <SectionContainer
            title="Nasza Misja"
            subtitle="Motto"
            backgroundColor="bg-white"
        >
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4"> {/* Adjust space between rows */}
                {/* First Row */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span className="text-2xl md:text-4xl  text-center">Łącząc Kreatywność</span> {/* Adjust font size */}
                    <div className="bg-purple rounded-3xl w-20 md:w-32 h-8 md:h-10"></div> {/* Adjust rectangle size */}
                    <span className="text-2xl md:text-4xl text-center">i Digital Kompetencje</span> {/* Adjust font size */}
                </div>

                {/* Second Row */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span className="text-2xl md:text-4xl text-center">Pracujemy</span> {/* Adjust font size */}
                    <div className="bg-yellow rounded-3xl w-20 md:w-32 h-8 md:h-10"></div> {/* Adjust rectangle size */}
                    <span className="text-2xl md:text-4xl text-center">Dla Twojej Firmy</span> {/* Adjust font size */}
                </div>

                {/* Third Row */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"> {/* Adjust layout and spacing */}
                    <span className="text-2xl md:text-4xl text-center">By Osiągnąć Najlepszą</span> {/* Adjust font size */}
                    <div className="bg-green-500 rounded-3xl w-20 md:w-32 h-8 md:h-10"></div> {/* Adjust rectangle size */}
                    <span className="text-2xl md:text-4xl text-center">Wydajność</span> {/* Adjust font size */}
                </div>
            </div>
        </SectionContainer>
    );
};

export default CustomSection;
