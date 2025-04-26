"use client";
import React from "react";
import {useLanguage} from "@/providers/language_provider";

interface ImageCardProps {
    src: string;
    title?: string;
    text?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void
}

const ImageCard: React.FC<ImageCardProps> = ({src, title, text, children, className, onClick}) => {
    const {translate} = useLanguage();

    return (
        <div
            onClick={onClick}
            className={`${className} overflow-hidden rounded-2xl bg-white dark:bg-[#2D2D2D]`}
        >
            <img src={src} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-6 text-center">
                {
                    title ?
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                            {translate(title)}
                        </h2>
                        : null
                }
                {
                    text ?
                        <h4 className="text-gray-600 dark:text-gray-300 text-base">
                            {translate(text)}
                        </h4>
                        : null
                }
                {children && (
                    <div className="content mt-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageCard;
