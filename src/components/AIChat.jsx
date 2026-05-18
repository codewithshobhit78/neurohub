import { useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

export default function AIChat() {

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello Shobhit 👋 I am Neuro AI."
    }
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const handleSend = async () => {

    if (!input.trim()) return;

    const currentInput = input;

    const userMessage = {
      role: "user",
      text: currentInput
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    setInput("");

    setLoading(true);

    try {

     const response = await axios.post(
  `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
  {
    contents: [
      {
        parts: [
          {
            text: currentInput,
          },
        ],
      },
    ],
  }
);

const aiText =
  response.data.candidates[0].content.parts[0].text;

setMessages((prev) => [
  ...prev,
  {
    role: "ai",
    text: aiText,
  },
]);

    }

   catch(error) {

  console.log(error);

  setTimeout(() => {

    setMessages((prev) => [
      ...prev,
      {
        role:"ai",
        text:`You said: "${currentInput}" 🚀

This is Neuro AI demo response.
Real AI backend will be connected soon 😈`
      }
    ]);

  },1000);

}

    finally {

      setLoading(false);

    }

  };

  return (
    <div
      className="
      mt-10
      max-w-4xl
      mx-auto
      backdrop-blur-2xl
      bg-white/10
      border
      border-white/10
      rounded-[35px]
      p-6
      shadow-2xl
      "
    >

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">
            Neuro AI 🤖
          </h2>

          <p className="text-gray-400 mt-1">
            Powered by Gemini
          </p>

        </div>

        <div
          className="
          w-4
          h-4
          rounded-full
          bg-green-400
          animate-pulse
          "
        />

      </div>

      {/* Messages */}
      <div
        className="
        mt-8
        h-[400px]
        overflow-y-auto
        space-y-4
        pr-2
        "
      >

        {messages.map((msg, index) => (

          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            className={`
            max-w-[80%]
            p-4
            rounded-3xl
            text-sm
            md:text-base
            whitespace-pre-wrap
            ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-white/10 text-white"
            }
            `}
          >

            {msg.text}

          </motion.div>

        ))}

        {loading && (

          <div
            className="
            bg-white/10
            px-4
            py-3
            rounded-3xl
            inline-block
            "
          >

            Neuro AI is typing...

          </div>

        )}

      </div>

      {/* Input */}
      <div
        className="
        mt-6
        flex
        gap-4
        "
      >

        <input

          type="text"

          placeholder="Ask Neuro AI..."

          value={input}

          onChange={(e) => setInput(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}

          className="
          flex-1
          px-5
          py-4
          rounded-full
          bg-white/10
          border
          border-white/10
          outline-none
          text-white
          placeholder:text-gray-400
          "
        />

        <button

          onClick={handleSend}

          className="
          px-8
          py-4
          rounded-full
          bg-gradient-to-r
          from-blue-500
          to-purple-600
          font-bold
          hover:scale-105
          transition
          "
        >

          Send

        </button>

      </div>

    </div>
  );
}