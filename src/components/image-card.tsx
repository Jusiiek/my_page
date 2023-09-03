"use client";

import {Row, Space} from "antd";

import {useLanguage} from "@/providers/language_provider";
export default function ImageCard({src, text, title, develop}: {src:string, text: string, title: string, develop: boolean}) {
    const {translate} = useLanguage();
    return (
        <Space direction={'vertical'} className={'w-100 image-card text-center ml-auto mr-auto'}>
            <Row className={'image-card-header w-100'}>
                <img src={src} className={'image-card-image'}/>
            </Row>
            <Row className={'image-card-text w-100 p-4'}>
                <Row className={'w-100 mb-3'}>
                    <h2 className={'title ml-auto mr-auto'}>
                        {translate(title)}
                    </h2>
                </Row>
                <Row className={'content-row w-100'}>
                    <h4 className={'content'}>
                        {translate(text)}
                    </h4>
                </Row>
                {develop ?
                <Row className={'w-100 mt-5'}>
                    <h4 className={'develop-content'}>
                        {translate('portfolio.developing')}
                    </h4>
                </Row> : ''
                }
            </Row>
        </Space>
    )
}
