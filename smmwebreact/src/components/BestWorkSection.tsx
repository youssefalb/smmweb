import React, { useEffect, useRef } from 'react';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    redirectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, redirectUrl }) => {
    const { t } = useTranslation();

    return (
        <section id="portfolio">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-left">
                <div className="w-full bg-cover h-48" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="flex-1 p-6">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-700 text-base">{description}</p>
                    <button className="mt-5 bg-purple text-white font-bold py-2 px-6 rounded-xl" onClick={() => window.location.href = redirectUrl}>
                        {t('selectedProjects.projects.first.buttonText')}
                    </button>
                </div>
            </div>
        </section>
    );
};

const BestWorkSection = () => {
    const { t } = useTranslation();
    // Correctly type the useRef hook
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (section) {
            gsap.fromTo(
                section.children,
                { y: 50, opacity: 0 }, // Initial properties
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power1.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom-=300',
                        end: 'bottom top',
                        toggleActions: "play none play none",

                    },
                }
            );
        }
    }, []);


    return (
        <section className="">
            <SectionContainer
                title={t('selectedProjects.title')}
                subtitle={t('selectedProjects.subtitle')}
                backgroundColor="bg-white"
            >
                <div className="px-4 pb-20 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4" ref={sectionRef}>
                    <ProjectCard
                        title={t('selectedProjects.projects.first.name')}
                        description={t('selectedProjects.projects.first.description')}
                        imageUrl="/site1.png"
                        redirectUrl="https://andriybobchuk.com/"
                    />
                    <ProjectCard
                        title={t('selectedProjects.projects.second.name')}
                        description={t('selectedProjects.projects.second.description')}
                        imageUrl="/site2.png"
                        redirectUrl="https://twojezdrowie.pl/"
                    />
                </div>
            </SectionContainer>
        </section>
    );
};

export default BestWorkSection;
