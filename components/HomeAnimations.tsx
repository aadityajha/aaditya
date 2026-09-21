"use client";

import { motion } from "motion/react";

export default function HomeAnimations() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 8,
                letterSpacing: ".28em",
            }}
            animate={{
                opacity: 1,
                y: 0,
                letterSpacing: ".18em",
            }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="eyebrow"
        >
            MBBS STUDENT · CHITWAN MEDICAL COLLEGE
        </motion.div>
    );
}