export default function Particles() {

  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden">

      {particles.map((_, i) => (
        <span
          key={i}
          className="
          absolute
          w-1
          h-1
          bg-white/40
          rounded-full
          animate-pulse
          "
          style={{
            top:`${Math.random()*100}%`,
            left:`${Math.random()*100}%`,
            animationDuration:`${2 + Math.random()*3}s`
          }}
        />
      ))}

    </div>
  );
}