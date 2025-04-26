"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {Space, Dropdown, Button} from "antd";
import type { MenuProps } from 'antd';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faPaw} from "@fortawesome/free-solid-svg-icons";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";
import {useLanguage} from "@/providers/language_provider";

export default function Navbar() {
    const pathname = usePathname()

    const windowSize = WindowSize();
    const desktopSize = windowSize.width > CONFIG.BREAK_POINT;
    const {translate} = useLanguage();

    const desktopItems = [
        {
            key: 1,
            text: 'navbar.skills',
            to: '/skills',
            label: (
                <Link href="/skills">
                    {translate('navbar.skills')}
                </Link>
            ),
        },
        {
            key: 2,
            text: 'navbar.portfolio',
            to: '/portfolio',
            label: (
                <Link href="/portfolio">
                    {translate('navbar.portfolio')}
                </Link>
            ),
        }
    ];
    const items:  MenuProps['items'] = [
        {
            key: 0,
            label: (
                <Link href="/">
                    {translate('navbar.home')}
                </Link>
            ),
        },
        ...desktopItems
    ]
    return (
        <Space direction={'vertical'} className={'w-100 navbar-container p-4'}>
            {desktopSize ?
            <ul className={'navbar-list'}>
                <li
                    className={`navbar-item navbar-item-home text-center ${pathname === '/' ? 'active-page' : ''}`}
                >
                    <Link href={'/'}>
                        <FontAwesomeIcon icon={faPaw} />
                        `<h4 className={'ml-1'}>
                            {translate('navbar.home')}
                        </h4>
                    </Link>
                </li>
                {
                    desktopItems.map(item => (
                        <li
                            key={item.key}
                            className={`navbar-item text-center ${pathname === item.to ? 'active-page' : ''}`}
                        >
                            <Link href={item.to}>
                                <h4>
                                    {translate(item.text)}
                                </h4>
                            </Link>
                        </li>
                    ))
                }
            </ul> :
                <div className={'mobile-navbar-items'}>
                    <Dropdown menu={{items}}>
                        <Button className={'hamburger-btn'}>
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                    </Dropdown>
                    <Link href={'/'} className={'navbar-item-home'}>
                        <FontAwesomeIcon icon={faPaw} />
                        <h4 className={'ml-2'}>
                            Jakub Żurawski
                        </h4>
                        </Link>
                </div>
            }
        </Space>
    )
}