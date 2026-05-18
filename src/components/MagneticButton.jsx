import { motion } from "framer-motion";

export default function MagneticButton() {

  return (
    <motion.button

      whileHover={{
        scale:1.08,
      }}

      whileTap={{
        scale:0.95
      }}

      className="
      mt-10
      px-10
      py-5
      rounded-full
      bg-gradient-to-r
      from-blue-500
      to-purple-600
      text-white
      font-bold
      text-lg
      shadow-[0_0_40px_rgba(59,130,246,0.7)]
      transition
      "
    >

      Search Anything Single Click 🚀

    </motion.button>
  );
}