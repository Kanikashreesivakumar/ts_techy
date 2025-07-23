import { useEffect, useState } from "react"
import Image from "next/image"

export default function Loader() {
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #000 0%, #1e293b 60%, #172554 100%)",
      }}
    >
      {/* Animated blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>

      {/* Central logo with animated glowing ring */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center w-44 h-44">
          {/* Animated glowing ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-tr from-amber-400/60 via-blue-400/40 to-white/30 blur-lg animate-spin-slow"></span>
          {/* Logo */}
          <div className="relative w-32 h-32 rounded-full bg-black/70 flex items-center justify-center border-4 border-amber-400/40 shadow-lg">
            <Image
              src="/images/ts-logo.webp"
              alt="TS Techy Logo"
              width={128}
              height={128}
              className="object-contain"
              priority
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}