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
                    <button
                        className="relative border-4 border-[#032e4b] bg-[#032e4b] text-[#f0e7db] font-bold text-xl rounded-2xl px-6 py-4 mx-auto text-center transition-colors duration-200
                            hover:bg-[#397bc5] hover:border-[#397bc5] hover:text-[#202023]
                            dark:bg-[#397bc5] dark:border-[#397bc5] dark:text-[#202023]
                            dark:hover:bg-[#00bbf0] dark:hover:border-[#00bbf0] dark:hover:text-[#202023] about-button"
                    >
                        {translate('standards.return_to_home')}
                    </button>
                </Link>
            </Row>
            <Copyright/>
        </Space>
    )
}
