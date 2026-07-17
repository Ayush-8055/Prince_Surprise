import { motion } from "framer-motion";

export default function GiftBox({ openGift }) {
  return (
    <motion.button
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.96, rotate: -4 }}
      onClick={openGift}
      className="gift-box"
      type="button"
      aria-label="Open your birthday gift"
    >
      <span className="gift-icon">🎁</span>
      <span>Open your gift</span>
    </motion.button>
  );
}