import { useState } from "react";

import {
  Search,
  PlaySquare,
  Briefcase,
  Globe,
  MessageCircle
} from "lucide-react";

import { motion } from "framer-motion";

export default function UniversalSearch() {

  const [query, setQuery] = useState("");

  const searches = [
    {
      name:"Google",
      icon:<Globe />,
      color:"from-blue-500 to-cyan-500",
      url:`https://www.google.com/search?q=${query}`
    },

    {
      name:"YouTube",
      icon:<PlaySquare />,
      color:"from-red-500 to-orange-500",
      url:`https://www.youtube.com/results?search_query=${query}`
    },

    {
      name:"LinkedIn",
      icon:<Briefcase />,
      color:"from-blue-700 to-blue-500",
      url:`https://www.linkedin.com/search/results/all/?keywords=${query}`
    },

    {
      name:"Instagram",
      icon:<MessageCircle />,
      color:"from-gray-700 to-gray-500",
      url:`https://instagram.com/search?q=${query}`
    }
  ];

  const openSearch = (url) => {

    if(!query.trim()) return;

    window.open(url, "_blank");
  };

  return (
    <div
      className="
      mt-14
      max-w-5xl
      mx-auto
      "
    >

      {/* Search Input */}
      <div
        className="
        backdrop-blur-2xl
        bg-white/10
        border
        border-white/10
        rounded-full
        px-6
        py-5
        flex
        items-center
        gap-4
        shadow-2xl
        "
      >

        <Search className="text-gray-400" />

        <input
          type="text"
          placeholder="Search across the universe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
          bg-transparent
          outline-none
          w-full
          text-white
          placeholder:text-gray-400
          "
        />

      </div>

      {/* Platform Buttons */}
      <div
        className="
        mt-8
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        "
      >

        {searches.map((item,index) => (

          <motion.button

            key={index}

            whileHover={{
              scale:1.05,
              y:-5
            }}

            whileTap={{
              scale:0.95
            }}

            onClick={() => openSearch(item.url)}

            className={`
            p-5
            rounded-3xl
            bg-gradient-to-r
            ${item.color}
            text-white
            shadow-2xl
            flex
            flex-col
            items-center
            justify-center
            gap-3
            font-semibold
            `}
          >

            <div className="text-3xl">
              {item.icon}
            </div>

            {item.name}

          </motion.button>

        ))}

      </div>

    </div>
  );
}