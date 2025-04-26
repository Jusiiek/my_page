import React from 'react';

interface SkillCardProps {
    title: string;
    description: string;
    className?: string
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, className }) => {
    return (
        <div
            className={`flex flex-col bg-white/80 dark:bg-[#2D2D2D] border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ${className}`}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {title}
            </h2>
            <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-700 dark:text-gray-300 text-base text-center">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SkillCard;
