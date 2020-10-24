import React from "react";
import { AnimatePresence, motion } from 'framer-motion'

function TransitionWrapper(props) {

    return <AnimatePresence exitBeforeEnter>
        <motion.div
            key={props.location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}>
            {props.children}
        </motion.div>
    </AnimatePresence>
}

export default TransitionWrapper;