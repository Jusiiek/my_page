import React from "react";

interface CardProps {
    title: string;
    content: string;
    variant: string;
    className?: string
}


const Card: React.FC<CardProps> = ({title, content, variant, className}) => {
    const getCustomCardClass = (): string => {
        return `neon-card neon-card-variant-${variant} w-100`
    };

    return (
        <div className={`${getCustomCardClass()} ${className} flex flex-col px-[20px] py-[20px]`}>
            <div className='neon-card-background'/>
            <h2 className='title neon-card-title'>
                {title}
            </h2>
            <div className="flex-1 flex items-center justify-center">
                <h4 className='content neon-card-content text-center'>
                    {content}
                </h4>
            </div>
        </div>
    );
}

export default Card;