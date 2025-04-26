"use client";
import React from "react";
import {Modal} from "antd";
import {
    GithubOutlined
} from "@ant-design/icons";

import {projectsList} from "@/app/data/data";
import {useLanguage} from "@/providers/language_provider";

interface ProjectModalProps {
    show: boolean
    project_id?: string;
    closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({show, project_id, closeModal}) => {
    const {translate} = useLanguage();

    const project = projectsList.filter(
        project => project.id === project_id
    )[0] || null

    if (!project) {
        return (
            <Modal open={show} footer={null} onCancel={() => closeModal()}>
                <div className="min-h-screen flex items-center justify-center p-8 bg-white dark:bg-[#202023]">
                    <h2 className="text-2xl font-bold text-center">
                        {translate("standards.project_not_found")}
                    </h2>
                </div>
            </Modal>
        );
    }
    return (
        <Modal
            open={show}
            footer={null}
            onCancel={() => closeModal()}
        >
            <div
                className={`overflow-hidden rounded-2xl bg-white dark:bg-[#202023]`}
            >
                <img src={project.main_image.src} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-6 text-center">

                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                        {translate(project.title)}
                    </h2>
                    <h4 className="text-gray-600 dark:text-gray-300 text-base mb-5">
                        {translate(project.description)}
                    </h4>
                    <a href={project.link} target="_blank">
                        <button
                            className="relative border-4 border-[#032e4b] bg-[#032e4b] text-[#f0e7db] font-bold text-xl rounded-2xl px-6 py-4 mx-auto text-center transition-colors duration-200
                            hover:bg-[#397bc5] hover:border-[#397bc5] hover:text-[#202023]
                            dark:bg-[#397bc5] dark:border-[#397bc5] dark:text-[#202023]
                            dark:hover:bg-[#00bbf0] dark:hover:border-[#00bbf0] dark:hover:text-[#202023] about-button"
                        >
                            <GithubOutlined className={'mr-2'}/>
                            Github
                            <GithubOutlined className={'ml-2'}/>
                        </button>
                    </a>
                </div>
                <div className={"flex flex-col items-center justify-center p-8"}>
                    {project.images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg mb-3"
                        />
                    ))}
                </div>
            </div>

        </Modal>
    );
};

export default ProjectModal;
