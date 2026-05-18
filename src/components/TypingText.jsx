import { useEffect, useState } from "react";

export default function TypingText() {

  const text = "Everything You Need. One Intelligent Workspace.";

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setDisplayed(text.slice(0,index));

      index++;

      if(index > text.length){
        clearInterval(interval);
      }

    }, 50);

    return () => clearInterval(interval);

  }, []);

  return (
    <p
      className="
      mt-4
      text-gray-300
      text-sm
      md:text-lg
      "
    >
      {displayed}
    </p>
  );
}