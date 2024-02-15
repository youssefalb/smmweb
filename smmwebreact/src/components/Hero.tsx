import React from 'react';

const Hero = () => {
    return (

        <div className="flex justify-center items-center bg-white p-6 max-w-7xl space-x-16 mx-auto min-h-screen">
            <div>
                <h1 className="text-4xl font-bold text-blue-900 mb-4">
                    <div className='text-black-900'>
                        Twoja Firma w
                    </div>
                    <div className="text-purple-600">
                        Internecie
                    </div>
                </h1>


                <p className="text-base text-gray-700 mb-4">
                    Rozwijaj swoją działalność dzięki naszym ekspertom projektowania stron internetowych, SEO oraz zarządzania mediami społecznościowymi
                </p>
                <div>
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 mb-2 hover:bg-blue-700">
                        Uzyskaj bezpłatną konsultację
                    </button>
                    <button className="bg-transparent text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded mr-2 mb-2 hover:bg-blue-600 hover:text-white hover:border-transparent">
                        Nasze Usługi
                    </button>
                </div>
            </div>
            <div >
                <img src="/hero.png" alt="Hero" />

            </div>
        </div>
    );
};

export default Hero;
