import { motion } from "framer-motion";

import logo from "../assets/image.png";

export default function AIOrb() {

  const handleClick = () => {

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

  };

  return (

    <motion.button

      onClick={handleClick}

      whileHover={{
        scale: 1.05,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="
      relative
      w-64
      h-64
      rounded-full
      overflow-hidden
      shadow-[0_0_100px_rgba(59,130,246,0.7)]
      border
      border-white/20
      cursor-pointer
      group
      "
    >

      {/* Background Image */}
      <img
        src={logo}
        alt="NeuroCode"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        blur-sm
        scale-110
        opacity-80
        "
      />

      {/* Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/40
        "
      />

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        rounded-full
        bg-blue-500/10
        animate-pulse
        "
      />

      {/* Text */}
      <div
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        justify-center
        h-full
        text-center
        px-4
        "
      >

        <h1
          className="
          text-4xl
          font-black
          text-white
          drop-shadow-lg
          "
        >
          Neuro AI
        </h1>

        <p
          className="
          mt-2
          text-sm
          text-gray-200
          "
        >
          Explore Now 🚀
        </p>

      </div>

    </motion.button>

  );

}