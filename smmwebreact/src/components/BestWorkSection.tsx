import React from 'react';
import SectionContainer from './templates/SectionContainer';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    redirectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, redirectUrl }) => {
    return (
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-left">
            <div className="w-full bg-cover h-48" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            {/* Content section below the image */}
            <div className="flex-1 p-6 ">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 text-base">{description}</p>
                <button className="mt-5 bg-purple text-white font-bold py-2 px-6 rounded-xl" onClick={() => window.location.href = redirectUrl}>
                    Przejdź do Strony
                </button>
            </div>
        </div>
    );
};

const BestWorkSection = () => {
    return (
        <section className="">
            <SectionContainer
                title="Wybrane Projekty"
                subtitle="Portfolio"
                backgroundColor="bg-white"
            >
                <div className="px-4 pb-20 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <ProjectCard
                            title="Prywatna Strona-Wizytówka"
                            description="Strona-Wizytówka to idealne rozwiązanie dla małych firm i freelancerów pragnących zaistnieć w internecie z kluczowymi informacjami o swojej działalności. "
                            imageUrl="/site1.png"
                            redirectUrl="https://andriybobchuk.com/"
                        />
                        <ProjectCard
                            title="Strona Firmy Konsultacyjnej"
                            description="Strona Firmy to rozwiązanie dla różnych branż, takich jak opieka zdrowotna, księgowość czy prawo, umożliwiające skuteczną prezentację usług i wzmocnienie wizerunku firmy w internecie."
                            imageUrl="/site2.png"
                            redirectUrl="https://asaco-global.com/"
                        />
                    </div>
            </SectionContainer>

        </section>
    );
};

export default BestWorkSection;
