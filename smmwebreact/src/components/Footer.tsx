import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Footer = () => {
    const { t } = useTranslation();
    const newsletterRef = useRef(null);
    const aboutRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = [
            { ref: newsletterRef.current, x: '-100%', opacity: 0 },
            { ref: aboutRef.current, y: '100%', opacity: 0 },
            { ref: menuRef.current, x: '100%', opacity: 0 }
        ];

        elements.forEach(({ ref, x = 0, y = 0, opacity }) => {
            if (ref) {
                gsap.fromTo(ref, { x, y, autoAlpha: opacity }, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ref,
                        start: "top bottom+=50",
                        toggleActions: "play none none none",
                    }
                });
            }
        });
    }, []);

    return (
        <footer className="bg-gray-900 text-white p-10 rounded-t-3xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-4">
                <div ref={newsletterRef} className="">
                    <h3 className="font-bold text-lg mb-2">{t('footer.newsletter.title')}</h3>
                    <p className="mb-4 text-gray-400">{t('footer.newsletter.description')}</p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder={t('footer.newsletter.emailPlaceholder')}
                            className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-purple"
                        />
                        <button className="bg-purple p-2 rounded-r-lg">→</button>
                    </div>
                </div>

                <div ref={aboutRef} className='mt-10 lg:mt-0 lg:ml-24'>
                    <h2 className="font-bold text-lg mb-4">{t('footer.webokraft.title')}</h2>
                    <p className='text-gray-400'>{t('footer.webokraft.description')}</p>
                </div>

                <div ref={menuRef} className='mt-10 lg:mt-0 lg:ml-24'>
                    <h3 className="font-bold text-lg mb-2">Menu</h3>
                    <ul>
                        <li><a href="#services" className="text-gray-400 hover:text-purple">{t('footer.menu.services')}</a></li>
                        <li><a href="#faq" className="text-gray-400 hover:text-purple">{t('footer.menu.faq')}</a></li>
                        <li><a href="#portfolio" className="text-gray-400 hover:text-purple">{t('footer.menu.portfolio')}</a></li>
                        <li><a href="#aboutus" className="text-gray-400 hover:text-purple">{t('footer.menu.about')}</a></li>
                        <li><a href="#pricing" className="text-gray-400 hover:text-purple">{t('footer.menu.prices')}</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-purple">{t('footer.menu.contact')}</a></li>
                    </ul>
                    {/* Social Media Icons */}
                    {/* <div className="flex justify-center lg:justify-start mt-8 lg:mt-0 ml-24">
                    <a href="#" className="mr-4">wa</a>
                    <a href="#" className="mr-4">fb</a>
                    <a href="#" className="mr-4">tw</a>
                    <a href="#" className="mr-4">ig</a>
                </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

