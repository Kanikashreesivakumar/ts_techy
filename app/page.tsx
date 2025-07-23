"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Loader from "@/components/Loader"

export default function Home() {
  useEffect(() => {
   
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <>
      <Loader />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-blue-950 to-slate-800 text-white overflow-x-hidden relative">
    
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-white/12 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-amber-400/6 rounded-full blur-3xl animate-pulse animation-delay-6000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/8 rounded-full blur-xl animate-pulse animation-delay-3000"></div>
      </div>

      {/* Enhanced grid overlay with white and golden accents */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-ping animation-delay-1000 pointer-events-none"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-3000 pointer-events-none"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 border border-amber-400/30 rounded-full animate-spin-slow cursor-pointer z-50 pointer-events-auto"
          onClick={() => {
            const nextSection = document.getElementById("services")
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
        ></div>
      </div>

      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </div>
    </>
  )
}
