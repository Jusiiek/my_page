"use client";
import React, {useState} from "react";

import {Space} from "antd";
import {useAnimate} from "framer-motion";

import {useTheme} from "@/providers/theme_provider";

import {
    faLanguage,
    faMoon,
    faSun
} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import LangModal from "@/components/lang_modal";

export default function PageMenu() {
    const {switchTheme, theme} = useTheme()

    const [scope, animate] = useAnimate()
    const [showModal, setShowModal] = useState(false)

    const onButtonClick = (className: string) => {
        animate([
            [`.translate-icon`, {scale: .6}, {duration: .1}],
            [`.translate-icon`, {scale: 1}, {duration: .1}]
        ])
        setShowModal(true)

    }

    const onChangeThemeClick = () => {
        animate([
            [`.light-icon`, {x: -60, opacity: 0}, {duration: .2}],
            [`.light-icon`, {x: 60, opacity: 0}, {duration: .1}],
            [`.light-icon`, {x: 30, opacity: 0}, {duration: .2}],
            [`.light-icon`, {x: 0, opacity: 1}, {duration: .1}]
        ])
        setTimeout(() => {changeTheme()}, 100)
    }



    const changeTheme = () => {
        const th = theme === 'light' ? 'dark' : 'light'
        switchTheme(th)
    }

    return (
        <Space direction={'vertical'} className={'page-menu w-100 p-3'}>
            <LangModal showModal={showModal} closeModal={() => setShowModal(false)} />
            <ul className={'w-100 text-center'} ref={scope}>
                <li
                    className={'w-100 h-100 text-center menu-page-item menu-page-item-language translate-icon'}
                    onClick={() => onButtonClick('translate-icon')}
                >
                    <FontAwesomeIcon icon={faLanguage} />
                </li>
                <li
                    className={'w-100 h-100 text-center menu-page-item mt-2 light-icon'}
                    onClick={() =>  onChangeThemeClick()}
                >
                    <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
                </li>
            </ul>
        </Space>
    )
}
