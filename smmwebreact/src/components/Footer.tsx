import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-10 rounded-t-3xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12">

                <div className="">
                    <h3 className="font-bold text-lg mb-2">Zapisz się na nasz newsletter</h3>
                    <p className="mb-4 text-gray-400">Zdobądż wiedzę o zarządzaniu obecnością online i zwiększ zainteresowanie Twoją marką.</p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Adres e-mail"
                            className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:border-purple"
                        />
                        <button className="bg-purple p-2 rounded-r">→</button>
                    </div>
                </div>
                <div className='ml-24'>
                    <h2 className="font-bold text-lg mb-4">WeboKraft</h2>
                    <p className='text-gray-400'>Dynamiczna firma oferująca spersonalizowane rozwiązania, wspierające rozwój biznesu i zwiększające zasięg w internecie.</p>

                    {/* Newsletter Subscription */}

                </div>
                {/* Services */}
                <div className='ml-24'>
                    <h3 className="font-bold text-lg mb-2">Menu</h3>
                    <ul>
                        <ul>
                            <li><a href="#services" className="text-gray-400 hover:text-purple">Usługi</a></li>
                            <li><a href="#faq" className="text-gray-400 hover:text-purple">FAQ</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-purple">Portfolio</a></li>
                            <li><a href="#aboutus" className="text-gray-400 hover:text-purple">O Nas</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-purple">Ceny</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-purple">Kontakt</a></li>
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

