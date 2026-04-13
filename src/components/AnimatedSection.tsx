import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Direction-based slide animations
type Direction = "up" | "down" | "left" | "right";

const getDirectionOffset = (direction: Direction, distance: number = 60) => {
  switch (direction) {
    case "up": return { x: 0, y: distance };
    case "down": return { x: 0, y: -distance };
    case "left": return { x: distance, y: 0 };
    case "right": return { x: -distance, y: 0 };
  }
};

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideIn = ({ children, direction = "up", delay = 0, duration = 0.6, className }: SlideInProps) => {
  const offset = getDirectionOffset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animate on page load (not scroll)
export const SlideInOnLoad = ({ children, direction = "up", delay = 0, duration = 0.6, className }: SlideInProps) => {
  const offset = getDirectionOffset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale + fade
export const PopIn = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, type: "spring", stiffness: 150, damping: 15 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Rotate in
export const RotateIn = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Flip in
export const FlipIn = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: 90 }}
    whileInView={{ opacity: 1, rotateX: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    style={{ perspective: 1000 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container with direction
export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const staggerItemVariants = (direction: Direction = "up"): Variants => {
  const offset = getDirectionOffset(direction, 40);
  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
};

export const StaggerItem = ({ children, className, direction = "up" }: { children: ReactNode; className?: string; direction?: Direction }) => (
  <motion.div variants={staggerItemVariants(direction)} className={className}>
    {children}
  </motion.div>
);

// Animated card with hover
export const AnimatedCard = ({ children, className, delay = 0, direction = "up" as Direction }: { children: ReactNode; className?: string; delay?: number; direction?: Direction }) => {
  const offset = getDirectionOffset(direction, 40);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text reveal letter by letter
export const TextReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => (
  <motion.span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + i * 0.03 }}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

// Divider line animation
export const AnimatedDivider = ({ className }: { className?: string }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full origin-center ${className || ""}`}
  />
);

// Section title animation
export const AnimatedSection = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <SlideIn direction="up" delay={delay} className={className}>
    {children}
  </SlideIn>
);
