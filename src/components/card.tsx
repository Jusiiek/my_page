import React from "react";

interface CardProps {
    title: string;
    content: string;
    variant: 'green' | 'blue';
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, variant, className }) => {
    const getBackground = () => {
        if (variant === 'green') {
            return 'bg-gradient-to-br from-green-600 via-green-700 to-green-800';
        } else if (variant === 'blue') {
            return 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800';
        }
        return '';
    };

    return (
        <div className={`${className} ${getBackground()} w-100 flex flex-col px-6 py-6 rounded-2xl shadow-lg`}>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
                {title}
            </h2>
            <div className="flex-1 flex items-center justify-center">
                <h4 className="text-lg text-white text-center p-4 rounded-xl">
                    {content}
                </h4>
            </div>
        </div>
    );
}

export default Card;
