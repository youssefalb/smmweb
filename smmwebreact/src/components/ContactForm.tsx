import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionContainer from './templates/SectionContainer';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
            )
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again.');
                });

            form.current.reset();
        }
    };

    return (
        <section id="contact">
            <SectionContainer
                title={t('contact.title')}
                subtitle={t('contact.subtitle')}
            >
                <div className="bg-white p-12 rounded-2xl m-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.header')}</h2>
                    
                    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div> {/* First column for name, email, policy, and button */}
                        <p className="text-gray-600 mb-8">{t('contact.description')}</p>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder={t('contact.namePlaceholder')}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder={t('contact.emailPlaceholder')}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">{t('contact.privacyPolicy')}</span>
                                </label>
                            </div>
                            
                        </div>
                        <div> {/* Second column for message */}
                            <div className="mb-4 ">
                                <textarea
                                    name="message"
                                    placeholder={t('contact.messagePlaceholder')}
                                    className="w-full  px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-purple"
                                    rows={9} // Adjust based on your design
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 text-white bg-purple rounded-lg hover:bg-blue-700 focus:outline-none"
                            >
                                {t('contact.sendButton')}
                            </button>
                        </div>
                    </form>
                </div>

            </SectionContainer>

        </section>
    );


};

export default ContactForm;
