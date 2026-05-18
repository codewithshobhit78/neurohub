import { motion } from "framer-motion";

export default function Loader() {

  return (

    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className="
      fixed
      inset-0
      z-[9999]
      bg-[#050014]
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        w-[400px]
        h-[400px]
        rounded-full
        bg-purple-600/30
        blur-[120px]
        "
      />

      {/* Content */}
      <div className="relative z-10 text-center">

        <motion.h1

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          className="
          text-5xl
          md:text-7xl
          font-black
          bg-gradient-to-r
          from-blue-400
          to-purple-500
          text-transparent
          bg-clip-text
          "
        >

          NeuroHub ⚡

        </motion.h1>

        <motion.div

          initial={{
            width:0
          }}

          animate={{
            width:"220px"
          }}

          transition={{
            duration:2
          }}

          className="
          h-2
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-600
          mt-8
          mx-auto
          "
        />

        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:1
          }}

          className="
          mt-6
          text-gray-400
          tracking-widest
          "
        >

          INITIALIZING AI SYSTEM...

        </motion.p>

      </div>

    </motion.div>

  );
}