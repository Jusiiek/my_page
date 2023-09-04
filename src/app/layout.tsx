"use client";
import './globals.css'
import '@/styles/global.scss'

import React from "react";

import {AnimatePresence} from "framer-motion";

import Main from '@/layouts/main'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Main>
                <AnimatePresence initial={true} mode='wait' onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({top: 0})
                    }
                }}>
                    {children}
                </AnimatePresence>
            </Main>
        </html>
    )
}
