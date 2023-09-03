import React from "react";

import {motion} from "framer-motion";

export default function Layout({children}: {children: React.ReactNode}) {
    const variants = {
        hidden: {opacity: 0, x: 0, y: 50},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: 0, y: 50},
    }
    return (
        <motion.div initial='hidden' animate='enter' exit='exit' variants={variants} transition={{duration: 0.4, type: 'easeInOut'}}>
            {children}
        </motion.div>
    )
}