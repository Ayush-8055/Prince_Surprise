import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 500 }}
          animate={{ y: -500 }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity
          }}
          className="fixed text-pink-500 text-2xl"
          style={{
            left: `${Math.random() * 100}%`
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}