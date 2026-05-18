import { motion } from "framer-motion";

export default function Stats() {

  const stats = [
    {
      number:"10M+",
      label:"Searches"
    },
    {
      number:"50+",
      label:"Platforms"
    },
    {
      number:"AI",
      label:"Powered"
    }
  ];

  return (
    <div
      className="
      grid
      grid-cols-3
      gap-4
      mt-14
      "
    >

      {stats.map((item,index) => (
        <motion.div
          key={index}
          whileHover={{
            y:-5,
            scale:1.03
          }}
          className="
          backdrop-blur-xl
          bg-white/10
          border
          border-white/10
          rounded-3xl
          py-6
          px-4
          text-center
          "
        >

          <h2 className="text-2xl md:text-4xl font-black">
            {item.number}
          </h2>

          <p className="text-gray-300 mt-2 text-sm md:text-base">
            {item.label}
          </p>

        </motion.div>
      ))}

    </div>
  );
}