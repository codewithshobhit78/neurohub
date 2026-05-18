import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x:0,
    y:0
  });

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x:e.clientX,
        y:e.clientY
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
    <div
      className="
      pointer-events-none
      fixed
      z-0
      w-[300px]
      h-[300px]
      rounded-full
      bg-blue-500/20
      blur-[120px]
      transition-all
      duration-300
      "
      style={{
        left:position.x - 150,
        top:position.y - 150
      }}
    />
  );
}