import React from 'react';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';

const CooperationPlan = () => {
    const { t } = useTranslation();

    return (
        <section id="process">
            <SectionContainer
                title={t('cooperationPlan.title')}
                subtitle={t('cooperationPlan.subtitle')}
                backgroundColor="bg-gray-100"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 mb-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/messageicon.png" alt="Wywiad" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.interview.title')}</h3>
                        <p className="text-gray-600">
                        {t('cooperationPlan.steps.interview.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/bookicon.png" alt="Projekt" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.design.title')}</h3>
                        <p className="text-gray-600">
                        {t('cooperationPlan.steps.design.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/shareicon.png" alt="Wykonanie" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.implementation.title')}</h3>
                        <p className="text-gray-600">
                        {t('cooperationPlan.steps.implementation.description')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img src="/messageicon2.png" alt="Akceptacja i Wdrożenie" className="h-12 w-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('cooperationPlan.steps.acceptance.title')}</h3>
                        <p className="text-gray-600">
                        {t('cooperationPlan.steps.acceptance.description')}
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default CooperationPlan;
