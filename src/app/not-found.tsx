"use client";
import Link from 'next/link'
import {Space, Row} from "antd";
import {useLanguage} from "@/providers/language_provider";
import React from "react";
import Copyright from "@/components/copyright";

export default function NotFound() {
    const {translate} = useLanguage();
    return (
        <Space className={'w-100 p-5 not-found-page'} direction={'vertical'}>
            <Row className={'w-100'}>
                <h2 className={'not-found-text'}>
                    {translate('standards.not_found')}
                </h2>
            </Row>
            <Row className={'w-100 mt-5'}>
                <Link href='/' className={'ml-auto mr-auto'}>
                    <button className={'about-button'}>
                        {translate('standards.return_to_home')}
                    </button>
                </Link>
            </Row>
            <Copyright/>
        </Space>
    )
}
