import React from "react";

import {Space} from "antd";

import {ThemeProvider} from "@/providers/theme_provider";

import Navbar from "@/components/navbar";
import PageMenu from "@/components/page_menu";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";

export default function Main({children}: {children: React.ReactNode})  {
    return (
        <Space direction={'vertical'} className={'w-100'}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Jacob's homepage" />
                <meta name="author" content="Jakub Żurawski" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Jakub Żurawski</title>
            </head>
            <ThemeProvider>
                <Navbar/>
                <PageMenu/>
                {children}
                <Copyright/>
                <Footer/>
            </ThemeProvider>
        </Space>
    )
}
