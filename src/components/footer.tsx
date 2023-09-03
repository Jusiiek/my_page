"use client";
import {Space} from "antd";

import {
    LinkedinFilled,
    GithubOutlined
} from "@ant-design/icons";

import {WindowSize} from "@/helpers/window_size";
import {CONFIG} from "@/config/config";
import {useLanguage} from "@/providers/language_provider";

export default function Footer() {
    const windowSize = WindowSize();
    const desktopSize = windowSize.width > CONFIG.BREAK_POINT;
    const {translate} = useLanguage();

    const items = [
        {
            text: 'links.private_github',
            icon: <GithubOutlined className={'footer-icons github-icon'} />,
            to: 'https://github.com/Jusiiek'
        },
        {
            text: 'links.student_github',
            icon: <GithubOutlined className={'footer-icons github-icon'} />,
            to: 'https://github.com/s23047-jz'
        },
        {
            text: 'Linkedin',
            icon: <LinkedinFilled className={'footer-icons linked-in-icon'} />,
            to: 'https://www.linkedin.com/in/jakub-%C5%BCurawski-2aa88726a/'
        }
    ]
    return (
        <Space direction={'vertical'} className={'w-100 footer-container'}>
            <ul className={'navbar-list'}>
                {items.map(item =>
                <li
                    key={item.to}
                    className={'navbar-item text-center h-100 footer-item'}
                >
                    <a target='_blank' href={item.to}>
                        {item.icon}
                        {desktopSize ?
                            <h4>
                                {translate(item.text)}
                            </h4> :
                            ''
                        }
                    </a>
                </li>)}
            </ul>
        </Space>
    )
}