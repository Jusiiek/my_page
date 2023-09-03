"use client";
import React from "react";

import {Col, Row, Space} from "antd";

import ImageCard from "@/components/image-card";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";

import CHAT_APP_IMAGE from '@/images/chat_app_2.jpg';
import DC_BOT_IMAGE from '@/images/dc_bot.png';

import Layout from "@/layouts/layout";

export default function Portfolio(): React.JSX.Element {
    const windowSize = WindowSize();
    const columnsSpan = windowSize.width <= CONFIG.BREAK_POINT ? 24 : 12
    const portData = [
        {
            key: 'portRow-1',
            children: [
                {
                    key: 'portRow-1-1',
                    src: CHAT_APP_IMAGE,
                    text: 'portfolio.chat_app_text',
                    title: 'portfolio.chat_app_title',
                    develop: true
                },
                {
                    key: 'portRow-1-2',
                    src: DC_BOT_IMAGE,
                    text: 'portfolio.dc_bot_text',
                    title: 'portfolio.dc_bot_title',
                    develop: true
                }
            ]
        }
    ]
    return (
        <Layout>
            <Space className={'mt-10 p-10 w-100'} direction={'vertical'}>
                {portData.map(row =>
                    <Row
                        className={'w-100 mt-5 ml-auto mr-auto'}
                        key={row.key}
                    >
                        {row.children.map(col =>
                            <Col
                                key={col.key}
                                span={columnsSpan}
                                className={'p-2 text-center'}
                            >
                                <ImageCard
                                    src={col.src.src}
                                    text={col.text}
                                    title={col.title}
                                    develop={col.develop}
                                />
                            </Col>
                        )}
                    </Row>)}
            </Space>
        </Layout>
    )
}
