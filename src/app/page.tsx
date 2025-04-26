"use client";
import React from "react";

import {useRouter} from "next/navigation";

import {
    Space,
    Avatar,
    Row,
    Col,
} from "antd";

import {
    faMusic,
    faLaptop,
    faRobot,
    faCloud,
    faBowlRice,
    faEnvelope,
    faPencil
} from "@fortawesome/free-solid-svg-icons";

import {LinkedinFilled} from "@ant-design/icons";

import {useAnimate} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Card from "@/components/card";
import HobbyCard from "@/components/hobby_card";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";
import {useLanguage} from "@/providers/language_provider";

import Layout from "@/layouts/layout";

import ProfileImage from '@/images/prof_2.jpg'
import Copyright from "@/components/copyright";

export default function Home() {
    const windowSize = WindowSize();
    const columnsSpan = windowSize.width <= CONFIG.BREAK_POINT ? 24 : 12
    const {translate} = useLanguage();
    const router = useRouter();

    const [scope, animate] = useAnimate()

    const onButtonClick = () => {
        animate([
            [`.about-button`, {scale: .8}, {duration: .1}],
            [`.about-button`, {scale: 1}, {duration: .2}]
        ])
        setTimeout(() => {
            router.push('/portfolio')
        }, 200)

    }

    const hobby_data = [
        {
            "text": "about.hobby_text_music",
            "icon": faMusic
        },
        {
            "text": "about.hobby_text_programming",
            "icon": faLaptop
        },
        {
            "text": "about.hobby_text_ai",
            "icon": faRobot
        },
        {
            "text": "about.hobby_text_cooking",
            "icon": faBowlRice
        },
        {
            "text": "about.hobby_text_draw",
            "icon": faPencil
        }
    ]

    return (
        <Layout>
            <main className="min-h-screen items-center justify-between p-10 mt-10">
                <Space className="w-100 avatar-name-space mb-4" direction={'vertical'}>
                    <Row className={'w-100'}>
                        <div className={'avatar-row'}>
                            <Avatar size={120} src={ProfileImage.src}/>
                        </div>
                        <div className={'name-row'}>
                            <h2 className="ml-3 mb-0 name-text">
                                Jakub Żurawski
                            </h2>
                        </div>
                    </Row>
                </Space>
                <Space direction="vertical" className="d-flex mb-8">
                    <Row className='w-100 p-4'>
                        <h2 className={'title'}>
                            {translate('about.personal_title')}
                        </h2>
                    </Row>
                    <Row className='w-100 p-4'>
                        <h4 className={'content'}>
                            {translate('about.personal_text')}
                        </h4>
                    </Row>
                    <Row className={'w-100 text-center'} ref={scope}>
                        <button
                            className="relative border-4 border-[#032e4b] bg-[#032e4b] text-[#f0e7db] font-bold text-xl rounded-2xl px-6 py-4 mx-auto text-center transition-colors duration-200
                            hover:bg-[#397bc5] hover:border-[#397bc5] hover:text-[#202023]
                            dark:bg-[#397bc5] dark:border-[#397bc5] dark:text-[#202023]
                            dark:hover:bg-[#00bbf0] dark:hover:border-[#00bbf0] dark:hover:text-[#202023] about-button"
                            onClick={onButtonClick}
                        >
                            {translate('navbar.portfolio')}
                        </button>
                    </Row>
                </Space>
                <Space className="d-flex mt-2 mb-4" direction="vertical">
                    <Row className={'w-100'}>
                        <Col span={columnsSpan} className={'p-2'}>
                            <Card
                                title={translate('about.experience_title')}
                                content={translate('about.experience_text')}
                                variant={'green'}
                                className={"h-[450px] overflow-scroll"}
                            />
                        </Col>
                        <Col span={columnsSpan} className={'p-2'}>
                            <Card
                                title={translate('about.student_title')}
                                content={translate('about.student_text')}
                                variant={'blue'}
                                className={"h-[450px] overflow-scroll"}
                            />
                        </Col>
                    </Row>
                </Space>
                <Space className="d-flex mt-6" direction="vertical">
                    <Row className='w-100 p-4'>
                        <h4 className={'title'}>
                            {translate('about.hobby_text')}
                        </h4>
                    </Row>
                    <Row className='w-100 p-4'>
                        {hobby_data.map(hobby => (
                            <HobbyCard
                                key={hobby.text}
                                text={hobby.text}
                                icon={hobby.icon}
                                windowSize={windowSize.width}
                            />
                        ))}

                    </Row>
                </Space>
                <Space className="d-flex mt-6 text-center" direction="vertical">
                    <Row className={'w-100'}>
                        <h2 className={'contact-me-text'}>
                            <FontAwesomeIcon icon={faEnvelope} className={'mr-2'}/>
                            {translate('contact.contact_me')} jakub.zurawski@outlook.com
                        </h2>
                    </Row>
                    <Row className={'w-100 text-center'}>
                        <h2 className={'contact-me-text'}>
                            {translate('standards.or')}
                        </h2>
                    </Row>
                    <Row className={'w-100 text-center'}>
                        <a target='_blank' className={'ml-auto mr-auto'}
                           href={'https://www.linkedin.com/in/jakub-%C5%BCurawski-2aa88726a/'}>
                            <h2 className={'text-2xl'}>
                                <LinkedinFilled className={'linked-in-icon'}/>
                            </h2>
                        </a>
                    </Row>
                    <Copyright/>
                </Space>
            </main>
        </Layout>
    )
}
