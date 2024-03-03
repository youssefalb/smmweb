import React from 'react';
import SectionContainer from './templates/SectionContainer'; // Adjust the import path as necessary
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    
    const features = [
        {
            title: t('package.graphicDesign.title'),
            description: t('package.graphicDesign.description'),
            icon: '/projekt.svg',
        },
        {
            title: t('package.mobileVersion.title'),
            description: t('package.mobileVersion.description'),
            icon: "/mob.svg",
        },
        {
            title: t('package.privacy.title'),
            description: t('package.privacy.description'),
            icon: "/prywatnosc.svg",
        },
        {
            title: t('package.fastLoading.title'),
            description: t('package.fastLoading.description'),
            icon: '/lad.svg', 
        },
        {
            title: t('package.seoOptimization.title'),
            description: t('package.seoOptimization.description'),
            icon: '/opt.svg', 
        },
        {
            title: t('package.trainingAndConsulting.title'),
            description: t('package.trainingAndConsulting.description'),
            icon: '/szkolenie.svg', 
        },
    ];

    return (
        <SectionContainer title={t('package.title')} subtitle={t('package.subtitle')} backgroundColor="bg-purple" textColor="text-white" subtitleColor="text-gray-200">
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
