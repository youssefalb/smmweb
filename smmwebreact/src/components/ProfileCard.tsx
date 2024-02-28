import React from 'react';

const ProfileCard = ({ name, surname, titles, cardImg, className }: { name: string, surname: string, titles: string[], cardImg: string, className?: string }) => {
    return (
        <div className={`relative bg-white p-6 rounded-2xl shadow-md flex flex-col items-center min-h-[400px] min-w-[240px] ${className}`}>
            {/* Background image */}
            <img
                src={cardImg}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-0"
            />
            {/* Overlay rectangle inside the card, snapped to the bottom and see-through */}
            <div className="absolute bottom-0 left-0 bg-yellow bg-opacity-95 h-20 w-full z-10 rounded-b-2xl flex items-center justify-center">
                {/* Content on top of the overlay */}
                <div className="z-20 relative p-6">
                    <h4 className="text-xl font-bold">{name} {surname}</h4>
                    {titles.map((title, index) => (
                        <p key={index} className="text-gray-600">{title}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
