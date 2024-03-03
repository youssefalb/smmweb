import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white p-10 rounded-t-3xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12">

                <div className="">
                    <h3 className="font-bold text-lg mb-2">{t('footer.newsletter.title')}</h3>
                    <p className="mb-4 text-gray-400">{t('footer.newsletter.description')}</p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder={t('footer.newsletter.emailPlaceholder')}
                            className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-purple"
                        />
                        <button className="bg-purple p-2 rounded-r">→</button>
                    </div>
                </div>
                <div className='ml-24'>
                    <h2 className="font-bold text-lg mb-4">{t('footer.webokraft.title')}</h2>
                    <p className='text-gray-400'>{t('footer.webokraft.description')}</p>

                    {/* Newsletter Subscription */}

                </div>
                {/* Services */}
                <div className='ml-24'>
                    <h3 className="font-bold text-lg mb-2">Menu</h3>
                    <ul>
                        <ul>
                            <li><a href="#services" className="text-gray-400 hover:text-purple">{t('footer.menu.services')}</a></li>
                            <li><a href="#faq" className="text-gray-400 hover:text-purple">{t('footer.menu.faq')}</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-purple">{t('footer.menu.portfolio')}</a></li>
                            <li><a href="#aboutus" className="text-gray-400 hover:text-purple">{t('footer.menu.about')}</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-purple">{t('footer.menu.prices')}</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-purple">{t('footer.menu.contact')}</a></li>
                        </ul>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-start mt-8 lg:mt-0 ml-24">
                    <a href="#" className="mr-4">wa</a>
                    <a href="#" className="mr-4">fb</a>
                    <a href="#" className="mr-4">tw</a>
                    <a href="#" className="mr-4">ig</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

