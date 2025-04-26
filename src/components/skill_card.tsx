import React from 'react';

interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white/80 dark:bg-[#2D2D2D] border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
    </div>
  );
};

export default SkillCard;
