"use client";
import React from "react";

import {Space, Row} from "antd";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

import {useLanguage} from "@/providers/language_provider";

export default function Copyright() {
    const {translate} = useLanguage();
    const getCurrentYear = () => {
        const date = new Date()
        return `${date.getFullYear()} `;
    }
    return (
        <Space className="d-flex mt-1 mb-12 text-center" direction="vertical">
            <Row className='w-100 p-4 text-center'>
                <h4 className={'rights_reserved'}>
                    <FontAwesomeIcon icon={faCopyright} className={'mr-3'}/>
                    {getCurrentYear()}
                    Jakub Żurawski {translate('standards.rights_reserved')}
                </h4>
            </Row>
        </Space>
    )
}