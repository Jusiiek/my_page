"use client";
import React, {useState} from "react";
import Link from 'next/link'

import {Col, Row, Space} from "antd";

import ImageCard from "@/components/image-card";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";

import CHAT_APP_IMAGE from '@/images/chat_app_2.jpg';

import Layout from "@/layouts/layout";
import Copyright from "@/components/copyright";
import ProjectModal from "@/components/project-modal";

export default function Portfolio(): React.JSX.Element {
    const windowSize = WindowSize();
    const columnsSpan = windowSize.width <= CONFIG.BREAK_POINT ? 24 : 12
    const projects = [
        {
            key: 'projectsRow-1',
            children: [
                {
                    id: 'ai_chat_app',
                    src: CHAT_APP_IMAGE,
                    text: 'portfolio.ai_chat_app_text',
                    title: 'portfolio.ai_chat_app_title'
                },
            ]
        }
    ]

    const [showModal, setShowModal] = useState(false)
    const [projectId, setProjectId] = useState("")

    const showProjectDetails = (project_id: string) => {
        setProjectId(project_id);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setProjectId("");
    }

    if (showModal) {
        return (
            <Layout>
                <Space className={'mt-10 p-10 w-100'} direction={'vertical'}>
                    <ProjectModal
                        project_id={projectId}
                        show={showModal}
                        closeModal={closeModal}
                    />
                </Space>
            </Layout>
        )
    }

    return (
        <Layout>
            <Space className={'mt-10 p-10 w-100'} direction={'vertical'}>
                {projects.map(row =>
                    <Row
                        className={'w-100 mt-5 ml-auto mr-auto'}
                        key={row.key}
                    >
                        {row.children.map(col =>
                            <Col
                                key={col.id}
                                span={columnsSpan}
                                className={'p-2 text-center'}
                            >
                                <ImageCard
                                    src={col.src.src}
                                    text={col.text}
                                    title={col.title}
                                    className={"w-full max-w-sm mx-auto cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"}
                                    onClick={() => showProjectDetails(col.id)}
                                />
                            </Col>
                        )}
                    </Row>)}
                <Copyright/>
            </Space>
        </Layout>
    )
}
