import { motion } from "framer-motion";
import AIOrb from "../components/AIOrb";
import Particles from "../components/Particles";
import MouseGlow from "../components/MouseGlow";
import TypingText from "../components/TypingText";
import SearchBar from "../components/SearchBar";
import AppCard from "../components/AppCard";
import Dock from "../components/Dock";
import Stats from "../components/Stats";
import MagneticButton from "../components/MagneticButton";
import UniversalSearch from "../components/UniversalSearch";
import AIChat from "../components/AIChat";
import CustomCursor from "../components/CustomCursor";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <section
      className={`
      relative
      min-h-screen
      overflow-hidden
      transition-all
      duration-500
      ${
        darkMode
          ? "bg-[#030014] text-white"
          : "bg-gray-100 text-black"
      }
      `}
    >

      {/* Effects */}
      <MouseGlow />
      <Particles /> 

      {/* Dock */}
      <Dock />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Purple Glow */}
        <div
          className="
          absolute
          top-[-200px]
          left-[-150px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          rounded-full
          blur-[120px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
          absolute
          bottom-[-200px]
          right-[-150px]
          w-[500px]
          h-[500px]
          bg-blue-500/20
          rounded-full
          blur-[120px]
          "
        />

      </div>

      {/* Main Content */}
      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-4
        md:px-10
        pt-32
        pb-40
        "
      >

        {/* HERO SECTION */}
        <div
          id="hero"
          className="text-center"
        >

          {/* Heading */}
          <motion.h1
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
            className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-tight
            "
          >

            Welcome To

            <br />

            <span
              className="
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              NeuroHub 🚀
            </span>

          </motion.h1>

          {/* Typing Text */}
          <div className="mt-4">
            <TypingText />
          </div>

         

          {/* AI Orb */}
          <div className="mt-14 flex justify-center">
            <AIOrb />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <MagneticButton />
          </div>

          {/* Stats */}
          <Stats />

          {/* Universal Search */}
          <div id="search">
            <UniversalSearch />
          </div>

          {/* AI Chat */}
          <AIChat />

          {/* Theme Toggle */}
          <div id="settings">

            <ThemeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

          </div>

          {/* Custom Cursor */}
          <CustomCursor />

        </div>

        {/* DASHBOARD SECTION */}
        <div
          className="
          mt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          "
        >

        </div>

      </div>

    </section>
  );
}