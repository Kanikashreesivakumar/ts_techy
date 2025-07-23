"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Loader from "@/components/Loader"

export default function Home() {
  const [slide, setSlide] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const updateHeight = () => setWindowHeight(window.innerHeight)
    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  const handleHoverScroll = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Loader />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-blue-950 to-slate-800 text-white overflow-x-hidden relative">
        
        <Hero />
        <Services />
        <WhyChooseUs />
        <div id="contact-form">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  )
}
