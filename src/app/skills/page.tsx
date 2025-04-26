"use client";
import React from "react";

import {Space, Row, Col, Card} from "antd";

import {
    faKeyboard,
    faComputerMouse,
    faComputer,
    faDatabase
} from "@fortawesome/free-solid-svg-icons";
import SkillCard from "@/components/skill_card";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";
import {useLanguage} from "@/providers/language_provider";

import Layout from "@/layouts/layout";
import Copyright from "@/components/copyright";

export default function Skills(): React.JSX.Element {
    const windowSize = WindowSize();
    const columnsSpan = windowSize.width <= CONFIG.BREAK_POINT ? 24 : 12
    const {translate} = useLanguage();
    const icons = [
        {
            key: 'icon-1',
            icon: faKeyboard
        },
        {
            key: 'icon-2',
            icon: faComputerMouse
        },
        {
            key: 'icon-3',
            icon: faComputer
        },
        {
            key: 'icon-4',
            icon: faDatabase
        }
    ]
    const items = [
        {
            key: 'row-1',
            children: [
                {
                    key: 'col-1',
                    title: "Frontend",
                    text: "skills.frontend"
                },
                {
                    key: 'col-2',
                    title: 'Backend',
                    text: 'skills.backend'
                }
            ]
        },
        {
            key: 'row-2',
            children: [
                {
                    key: 'col-4',
                    title: 'Docker',
                    text: 'skills.docker'
                },
                {
                    key: 'col-5',
                    title: 'skills.database_title',
                    text: 'skills.database_text'
                }
            ]
        },
        {
            key: 'row-3',
            children: [
                {
                    key: 'col-6',
                    title: 'skills.systems_title',
                    text: 'skills.systems_text'
                },
                {
                    key: 'col-7',
                    title: 'Git',
                    text: 'skills.git'
                }
            ]
        },

    ]
    return (
        <Layout>
            <Space direction={'vertical'} className={'mt-10 p-10 w-100'}>
                <Row className={'w-100 icons-row'}>
                    <ul className={'navbar-list w-100'}>
                        {icons.map(icon =>
                            <li key={icon.key}>
                                <FontAwesomeIcon icon={icon.icon} className={'icons-row-icon'}/>
                            </li>)}
                    </ul>
                </Row>
                <Row className={"w-100 text-center"}>
                    <Col span={columnsSpan} className={'p-4 mt-2 mb-2'}>
                        <Row className={'w-100 text-center'}>
                        </Row>
                    </Col>
                </Row>
                {items.map(row =>
                    <Row key={row.key} className={'w-100 text-center'}>
                        {row.children.map(col =>
                            <Col span={columnsSpan} key={col.key} className={'p-4 mt-2 mb-2'}>
                                <SkillCard
                                    title={translate(col.title)}
                                    description={translate(col.text)}
                                    className={"h-[260px] overflow-scroll"}
                                />
                            </Col>)}
                    </Row>)}
                <Copyright/>
            </Space>
        </Layout>
    )
}
