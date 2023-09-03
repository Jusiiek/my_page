import React from "react";
import {Space, Row, Col} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {CONFIG} from "@/config/config";
import {useLanguage} from "@/providers/language_provider";

export default function HobbyCard({text, icon, windowSize}:
{text: string, icon: any, windowSize: number}) {
    const {translate} = useLanguage();
    const iconCol = windowSize <= CONFIG.BREAK_POINT ? 24 : 4
    const iconText = windowSize <= CONFIG.BREAK_POINT ? 24 : 20
    return (
        <Space direction={'vertical'} className={'w-100 p-3'}>
            <Row className={'w-100'}>
                <Col
                    span={iconCol}
                    className={'text-center justify-center align-middle mb-2'}
                >
                    <FontAwesomeIcon
                        icon={icon}
                        size={iconCol === 4 ? '3x' : '2x'}
                        className={iconCol === 4 ? 'mt-3' : ''}
                    />
                </Col>
                <Col
                    span={iconText}
                    className={iconText === 24 ? 'mb-4' : ''}
                >
                    <h4 className={'content'}>{translate(text)}</h4>
                </Col>
            </Row>
        </Space>
    )
}
