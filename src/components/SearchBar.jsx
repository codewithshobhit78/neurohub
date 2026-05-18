import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
      mt-10
      mx-auto
      max-w-2xl
      "
    >

      <div
        className="
        flex
        items-center
        gap-3
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        px-5
        py-4
        rounded-full
        shadow-2xl
        "
      >

        <Search className="text-gray-400" />

        <input
          type="text"
          placeholder="Search YouTube, Google, LinkedIn, X..."
          className="
          bg-transparent
          outline-none
          w-full
          text-white
          placeholder:text-gray-400
          "
        />

      </div>

    </div>
  );
}