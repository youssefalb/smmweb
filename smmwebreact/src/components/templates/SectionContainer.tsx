// Put all the sections you make inside of this container, it contains proper spacing and headers

import React from 'react';

interface SectionContainerProps {
    title: string;
    subtitle?: string; // Optional
    children: React.ReactNode;
    backgroundColor?: string; // Optional
    textColor?: string; // Optional
    subtitleColor?: string; // Optional
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    title,
    subtitle,
    children,
    backgroundColor = 'bg-gray-100', // Default background color
    textColor = 'text-gray-700', // Default main text color
    subtitleColor = 'text-gray-500', // Default subtitle color
}) => {
    return (
        <div className={`${backgroundColor} py-20`}>
            <div className="text-center">
                {subtitle && (
                    <p className={`uppercase text-sm mb-2 ${subtitleColor}`}>
                        {subtitle}
                    </p>
                )}
                <h2 className={`text-4xl font-bold mb-20 ${textColor}`}>{title}</h2>
            </div>
            <div className={`max-w-6xl mx-auto ${textColor}`}>
                {children} {/* Custom section content */}
            </div>
        </div>
    );
};

export default SectionContainer;