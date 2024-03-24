import * as React from 'react';
import { motion } from 'framer-motion';

export const Draggable = ({ children }) => {
    return (
        <motion.div dragSnapToOrigin className="object" drag>
            {children}
        </motion.div>
    );
};
