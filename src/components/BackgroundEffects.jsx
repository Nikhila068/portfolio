import { useState } from 'react'

function BackgroundEffects() {
  const [stars] = useState(() => {
    // Generate static positions for crisp background stars
    return Array.from({ length: 45 }).map((_, idx) => {
      const top = Math.random() * 100
      const left = Math.random() * 100
      const size = Math.random() * 1.8 + 0.8 // crisp 0.8px to 2.6px stars
      const animationSpeed =
        idx % 3 === 0
          ? 'animate-twinkle-slow'
          : idx % 2 === 0
          ? 'animate-twinkle-medium'
          : 'animate-twinkle-fast'

      return {
        id: idx,
        style: {
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
        },
        animationSpeed,
      }
    })
  })

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-slate-950">
      {/* 1. Deep clear dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 opacity-95" />

      {/* 2. Soft, clean light accents for depth */}
      <div className="absolute top-[5%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] aspect-square rounded-full bg-cyan-500/8 blur-[100px] animate-orb-1" />
      <div className="absolute top-[50%] right-[10%] w-[35vw] h-[35vw] max-w-[450px] aspect-square rounded-full bg-blue-500/8 blur-[110px] animate-orb-2" />
      <div className="absolute bottom-[5%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] aspect-square rounded-full bg-indigo-500/6 blur-[90px] animate-orb-1" />

      {/* 3. Crisp modern grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.8) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      {/* 4. Elegant twinkling little stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            style={star.style}
            className={`absolute rounded-full bg-cyan-300/60 ${star.animationSpeed}`}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundEffects
