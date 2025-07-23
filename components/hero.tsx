"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Search, Target, BarChart3, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/90 to-blue-950/70 pointer-events-none"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-4 h-4 border border-amber-400/20 rotate-45 animate-float"
          style={{
            left: `${15 + mousePosition.x * 0.008}%`,
            top: `${25 + mousePosition.y * 0.008}%`,
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px) rotate(45deg)`,
          }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-amber-400/30 rounded-full animate-float animation-delay-2000"
          style={{
            right: `${20 + mousePosition.x * 0.006}%`,
            top: `${30 + mousePosition.y * 0.006}%`,
            transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * -0.012}px)`,
          }}
        ></div>
        <div
          className="absolute w-6 h-6 border border-blue-300/15 rounded-full animate-float animation-delay-4000"
          style={{
            left: `${75 + mousePosition.x * 0.01}%`,
            bottom: `${35 + mousePosition.y * 0.01}%`,
            transform: `translate(${mousePosition.x * 0.018}px, ${mousePosition.y * 0.018}px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
          <div className="text-center lg:text-left space-y-8">
            
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative p-3 bg-black/30 backdrop-blur-md rounded-2xl border border-amber-400/20">
                  <Image
                    src="/images/ts-logo.webp"
                    alt="TS Techy Logo"
                    width={160}
                    height={160}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>
            </div>

           
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient">
                  Grow Your Business
                </span>
                <br />
                <span className="text-white">with Smart SEO</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                At <span className="text-amber-400 font-semibold">TS Techy</span>, we help your website rank higher and
                convert better with data-driven SEO strategies that deliver{" "}
                <span className="text-amber-300">measurable results</span>.
              </p>
            </div>

            
            <div className="flex justify-center lg:justify-start z-30 relative">
  <Button
    onClick={scrollToContact}
    size="lg"
    className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 border-0 rounded-xl text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
    <span className="relative flex items-center gap-2 text-black font-bold">
      Get Free Consultation
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </Button>
</div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  100+
                </div>
                <div className="text-sm text-gray-400">Websites Optimized</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-white group-hover:text-amber-100 transition-colors">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

         
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
             
              <div className="absolute top-16 left-12 group">
                <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-amber-400/20 animate-float hover:scale-110 transition-all duration-300 hover:-rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-Transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Search className="w-10 h-10 text-amber-400 relative z-10" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              <div className="absolute top-8 right-8 group">
                <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-blue-400/20 animate-float animation-delay-2000 hover:scale-110 transition-all duration-300 hover:rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <TrendingUp className="w-10 h-10 text-blue-300 relative z-10" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              <div className="absolute bottom-20 left-8 group">
                <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-amber-400/20 animate-float animation-delay-4000 hover:scale-110 transition-all duration-300 hover:-rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <BarChart3 className="w-10 h-10 text-amber-300 relative z-10" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              <div className="absolute bottom-12 right-16 group">
                <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-blue-400/20 animate-float animation-delay-1000 hover:scale-110 transition-all duration-300 hover:rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Target className="w-10 h-10 text-blue-200 relative z-10" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                <div className="relative p-4 bg-white/5 backdrop-blur-md rounded-full border border-amber-400/30 animate-float animation-delay-3000 hover:scale-110 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Zap className="w-8 h-8 text-amber-400 relative z-10" />
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 80 Q 200 150 300 120"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M 80 300 Q 180 200 280 280"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse animation-delay-2000"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
