import { motion } from "framer-motion";

export default function AppCard({ title, desc, icon }) {

  return (
    <motion.div
      whileHover={{
        scale:1.03,
        y:-8
      }}
      transition={{ duration:0.3 }}
      className="
      min-h-[220px]
      backdrop-blur-xl
      bg-white/10
      border
      border-white/10
      rounded-[30px]
      p-6
      shadow-2xl
      cursor-pointer
      flex
      flex-col
      justify-between
      "
    >

      <div>

        <div className="text-5xl">
          {icon}
        </div>

        <h2 className="text-3xl font-bold mt-5">
          {title}
        </h2>

        <p className="text-gray-300 mt-3 text-sm md:text-base">
          {desc}
        </p>

      </div>

      <button
        className="
        mt-8
        w-full
        py-3
        rounded-2xl
        bg-white/10
        hover:bg-white/20
        transition
        "
      >
        Open
      </button>

    </motion.div>
  );
}