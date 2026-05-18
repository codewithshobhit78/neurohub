import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ darkMode, setDarkMode }) {

  return (

    <button

      onClick={() => setDarkMode(!darkMode)}

      className="
      fixed
      top-6
      right-6
      z-[99999]
      p-4
      rounded-full
      backdrop-blur-xl
      bg-white/10
      border
      border-white/10
      hover:scale-110
      transition
      shadow-xl
      "
    >

      {darkMode ? (

        <Sun className="text-yellow-300" />

      ) : (

        <Moon className="text-white" />

      )}

    </button>

  );

}