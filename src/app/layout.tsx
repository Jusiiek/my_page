"use client";
import './globals.css'
import '@/styles/global.scss'

import React from "react";

import {AnimatePresence} from "framer-motion";

import {LanguageProvider} from "@/providers/language_provider";
import {ThemeProvider} from "@/providers/theme_provider";

import Navbar from "@/components/navbar";
import PageMenu from "@/components/page_menu";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <ThemeProvider>
            <Navbar/>
            <PageMenu/>
            <AnimatePresence initial={true} mode='wait'>
                {children}
            </AnimatePresence>
            <Copyright/>
            <Footer/>
        </ThemeProvider>
        </html>
    )
}
