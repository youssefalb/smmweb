import React from 'react';
import ProfileCard from './ProfileCard';
import SectionContainer from './templates/SectionContainer';

const TeamSection = () => {
    return (
        <section id="aboutus">
            <SectionContainer
                title='Zespół WeboKraft'
                subtitle='ZESPÓŁ'
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div className="bg-purple p-8 rounded-2xl shadow-md max-w-md min-h-[360px] flex flex-col justify-between"> {/* Adjusted for button spacing */}
                        <div> {/* Content container */}
                            <h3 className="text-3xl text-white font-bold mb-3">Cześć! 👋</h3>
                            <p className="text-gray-300">
                                Nasz zespół składa się z profesjonalistów w dziedzinie rozwoju stron internetowych.
                                <br></br>
                                <span className='font-bold text-white'>Andrii,</span> specjalista od SMM, i <span className='font-bold text-white'>Youssef, </span> ekspert SEO, wspólnie podnoszą obecność każdej firmy w internecie. 🌐💪
                            </p>
                        </div>
                        <button className="mt-4 border-2 border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-purple transition duration-300 font-bold">Kontakt</button> {/* New Button */}
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
