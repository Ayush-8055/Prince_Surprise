import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <>
      {[...Array(20)].map((_, i) => {
        const startX = Math.random() * 100;
        const startY = 110;
        const endX = (startX + (Math.random() * 40 - 20) + 100) % 100;
        const endY = -10;
        const duration = Math.random() * 6 + 5;

        return (
          <motion.div
            key={i}
            initial={{
              x: `${startX}%`,
              y: `${startY}%`,
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              x: [`${startX}%`, `${(startX + endX) / 2}%`, `${endX}%`],
              y: [`${startY}%`, `${(startY + endY) / 2 - 10}%`, `${endY}%`],
              opacity: [0, 1, 0],
              scale: [0.7, 1, 0.8],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="fixed text-pink-500 text-2xl pointer-events-none"
            style={{
              left: 0,
              top: 0,
            }}
          >
            ❤️
          </motion.div>
        );
      })}
    </>
  );
}