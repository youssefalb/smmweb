import React from 'react';

const ConsultationSection = () => {
    return (
        <div className="flex min-h-52 items-center justify-center bg-white relative px-6 py-32">

            <div className="flex items-stretch bg-purple max-w-6xl rounded-3xl relative overflow-hidden">

                <div className="flex-1 self-stretch w-4/10 ">
                    <img
                        src="/vector_white.png"
                        alt="Decorative element"
                        className="absolute top-0 left-0 z-0 w-1/12" // Example: w-1/12 for 8.33%, adjust as needed

                    />
                    <img
                        src="/bench-accounting.png"
                        alt="Person working on a laptop"
                        className="h-full w-full object-center object-cover rounded-l-3xl"
                    />
                </div>

                {/* Right side - Content, set a higher z-index to ensure visibility over the decorative image */}
                <div className="w-7/10 p-10 relative z-20">
                    <h2 className="text-4xl font-bold text-white">
                        Masz jeszcze jakiekolwiek pytania?
                    </h2>
                    <p className="mt-4 text-lg text-white mb-8">
                        Umówmy się na krótką, bezpłatną rozmowę, podczas której odpowiemy na Twoje pytania!
                    </p>
                    <a href="#contact" className="bg-black text-white font-bold py-3 px-4 hover:bg-purple-800 transition-colors my-4 rounded-lg">
                        Uzyskaj bezpłatną konsultację
                    </a>
                </div>

                {/* Yellow decorative element, set a lower z-index to ensure it does not overlap the content */}
                <img
                    src="/vector_yellow.png"
                    alt="Decorative element"
                    className="absolute bottom-8 right-8 translate-x-1/2 translate-y-1/2 z-10"
                    style={{ width: '11%' }}

                />

            </div>

        </div>
    );
};

export default ConsultationSection;
