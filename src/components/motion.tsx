"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type MotionProps = ComponentProps<typeof motion.div>;

export function MotionGroup({ children, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      viewport={{ once: true, margin: "-80px" }}
      whileInView="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09 } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, ...props }: MotionProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
