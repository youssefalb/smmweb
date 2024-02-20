import React from 'react';

const ConsultationSection = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex items-center max-w-7xl bg-purple w-3/5 rounded-3xl overflow-hidden">

                {/* Left side - Image */}
                <div className="w-3/10">
                    <img
                        src="/bench-accounting.png" // Update the src with the path to your image
                        alt="Person working on a laptop"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right side - Content */}
                <div className="w-7/10 p-10">
                    <h2 className="text-4xl font-bold text-white">
                        Masz jeszcze jakiekolwiek pytania?
                    </h2>
                    <p className="my-4 text-lg text-white">
                        Umówmy się na krótką, bezpłatną rozmowę, podczas której odpowiemy na Twoje pytania!
                    </p>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-purple-800 transition-colors my-4">
                        Uzyskaj bezpłatną konsultację
                    </button>
                    <img
                        src="/vector_yellow.png"
                        alt="Decorative element"
                        className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
                    />
                </div>

            </div>

        </div>
    );
};

export default ConsultationSection;
