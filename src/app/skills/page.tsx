"use client";
import React from "react";

import {Space, Row, Col} from "antd";

import {
    faKeyboard,
    faComputerMouse,
    faComputer,
    faDatabase,

} from "@fortawesome/free-solid-svg-icons";

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
                    key: 'cow-1',
                    icon: '',
                    header: 'Javascript',
                    text: 'skills.js_text'
                },
                {
                    key: 'cow-2',
                    icon: '',
                    header: 'Python',
                    text: 'skills.python_text'
                }
            ]
        },
        {
            key: 'row-2',
            children: [
                {
                    key: 'cow-3',
                    icon: '',
                    header: 'C++',
                    text: 'skills.cpp_text'
                },
                {
                    key: 'cow-4',
                    icon: '',
                    header: 'Docker',
                    text: 'skills.docker'
                },
            ]
        },
        {
            key: 'row-3',
            children: [
                {
                    key: 'cow-5',
                    icon: '',
                    header: 'skills.database',
                    text: 'skills.database_text'
                },
                {
                    key: 'cow-6',
                    icon: '',
                    header: 'skills.systems',
                    text: 'skills.linux'
                },
            ]
        },
        {
            key: 'row-4',
            children: [
                {
                    key: 'cow-7',
                    icon: '',
                    header: 'Git',
                    text: 'skills.git'
                }
            ]
        }
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
                {items.map(row =>
                    <Row key={row.key} className={'w-100 text-center'}>
                        {row.children.map(col =>
                            <Col span={columnsSpan} key={col.key} className={'p-4 mt-2 mb-2'}>
                                <Row className={'w-100 text-center'}>
                                    <h2 className={'title ml-auto mr-auto'}>
                                        {translate(col.header)}
                                    </h2>
                                </Row>
                                <Row className={'w-100'}>
                                    <h4 className={'content'}>
                                        {translate(col.text)}
                                    </h4>
                                </Row>
                            </Col>)}
                    </Row>)}
                <Copyright/>
            </Space>
        </Layout>
    )
}
