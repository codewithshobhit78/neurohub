import {
  PlaySquare,
  Globe,
  Briefcase,
  MessageCircle,
  Camera
} from "lucide-react";

export default function Dock() {

  const apps = [
    {
      icon: <PlaySquare />,
      link: "https://youtube.com"
    },

    {
      icon: <Globe />,
      link: "https://instagram.com"
    },

    {
      icon: <Briefcase />,
      link: "https://linkedin.com"
    },

    {
      icon: <MessageCircle />,
      link: "https://twitter.com"
    },

    {
      icon: <Camera />,
      link: "https://github.com"
    }
  ];

  return (
    <div
      className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      z-50
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      px-6
      py-4
      rounded-full
      flex
      items-center
      gap-5
      shadow-2xl
      "
    >

      {apps.map((app,index) => (

        <a
          key={index}
          href={app.link}
          target="_blank"
          rel="noreferrer"
          className="
          p-3
          rounded-full
          hover:bg-white/10
          hover:scale-125
          transition
          duration-300
          "
        >

          {app.icon}

        </a>

      ))}

    </div>
  );
}