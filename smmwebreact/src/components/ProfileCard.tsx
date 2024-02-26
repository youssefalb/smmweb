import React from 'react';

const ProfileCard = ({ name, surname, titles, cardImg }: { name: string, surname: string, titles: string[], cardImg: string }) => {
    return (
        <div className="relative bg-white p-6 rounded-3xl shadow-md flex flex-col items-center min-h-[400px] min-w-60">            {/* Background image */}
            <img
                src={cardImg}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            />


            {/* Name and title */}
            <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold">{name}</h4>
                <h4 className="text-xl font-bold">{surname}</h4>
                {titles.map((title, index) => (
                    <p key={index} className="text-gray-600">{title}</p>
                ))}            </div>

        </div>
    );
};

export default ProfileCard;