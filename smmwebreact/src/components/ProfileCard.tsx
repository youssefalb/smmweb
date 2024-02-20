import React from 'react';

const ProfileCard = ({ name, surname, titles, profileImg }: { name: string, surname: string, titles: string[], profileImg: string }) => {
    return (
        <div className="relative bg-white p-6 rounded-3xl shadow-md flex flex-col items-center min-h-[400px] min-w-60">            {/* Background image */}
            <img
                src="/profile-background.png"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            />

            {/* Profile image */}
            {profileImg && (
                <div className="mt-4 z-10">
                    <img
                        src={profileImg}
                        alt={name}
                        className="h-24 w-24 rounded-full"
                    />
                </div>
            )}

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