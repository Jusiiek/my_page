import { usePathname } from 'next/navigation'
import React from "react";

import {motion, AnimatePresence} from "framer-motion";

export default function PageMotion({children, delay=0}: {children: React.ReactNode, delay: number}) {
    const pathname = usePathname();
    return (
        <motion.div key={pathname} initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay}}>
            {children}
        </motion.div>
    )
}
