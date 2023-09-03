import React from "react";

import {Row, Space} from "antd";

export default function Card({title, content, variant}: {title:string, content: string, variant: string}) {
    const getCustomCardClass = (): string => {
        return `neon-card neon-card-variant-${variant} w-100`
    };
    return (
        <Space className={getCustomCardClass()}>
            <div className='neon-card-background' />
            <Row className='w-100'>
                <Row className='w-100 p-4 ml-1 mt-1'>
                    <h2 className='title neon-card-title'>
                        { title }
                    </h2>
                </Row>
                <Row className='w-100 p-4'>
                    <h4 className={'content neon-card-content'}>
                        { content }
                    </h4>
                </Row>
            </Row>
        </Space>
    )
}