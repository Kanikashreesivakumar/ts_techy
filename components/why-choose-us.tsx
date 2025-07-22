"use client"

import { useEffect, useRef, useState } from "react"
import { DollarSign, Users, Target, Award, Clock, TrendingUp, Star, CheckCircle } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Plans",
    description:
      "Get premium SEO services at competitive prices with flexible packages tailored to your budget and business goals. No hidden fees, transparent pricing.",
    gradient: "from-amber-500 to-amber-600",
    accentColor: "amber",
    image: "/images/affordable-plans.png",
    stats: "Starting at $299/month",
    highlights: ["No Setup Fees", "Flexible Contracts", "Money-Back Guarantee"],
  },
  {
    icon: Users,
    title: "Expert SEO Team",
    description:
      "Work with certified SEO professionals who stay updated with the latest algorithm changes and industry best practices. Our team has 10+ years of experience.",
    gradient: "from-blue-500 to-blue-600",
    accentColor: "blue",
    image: "/images/expert-team.png",
    stats: "10+ Years Experience",
    highlights: ["Certified Professionals", "Continuous Training", "Proven Track Record"],
  },
  {
    icon: Target,
    title: "Real Measurable Results",
    description:
      "Track your progress with detailed analytics and see tangible improvements in your rankings, traffic, and conversions. We deliver results you can measure.",
    gradient: "from-amber-600 to-blue-600",
    accentColor: "amber",
    image: "/images/measurable-results.png",
    stats: "Average 150% Growth",
    highlights: ["Detailed Reporting", "Real-Time Analytics", "ROI Tracking"],
  },
]

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false])
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate active feature
  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoRotating])

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
    setIsAutoRotating(false)
    setTimeout(() => setIsAutoRotating(true), 10000) // Resume auto-rotation after 10 seconds
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background with white accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-56 h-56 bg-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-56 h-56 bg-white/12 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/8 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-amber-400/20 mb-8 hover:bg-white/8 transition-all duration-300">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-white bg-clip-text text-transparent animate-gradient">
              Experience The
            </span>
            <br />
            <span className="text-white">Difference</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover why businesses trust us with their SEO success and{" "}
            <span className="text-amber-400 font-semibold">digital transformation</span> journey.
          </p>
        </div>

        {/* Restructured dynamic layout with horizontal scrolling capability */}
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          {/* Left side - Interactive feature selector with enhanced design */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isVisible = visibleItems[index]
              const isActive = activeFeature === index

              return (
                <div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                  } ${isActive ? "scale-105" : ""}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => handleFeatureClick(index)}
                >
                  {/* Enhanced multi-layer glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 transition-opacity duration-700 ${
                      isActive ? "opacity-20" : "group-hover:opacity-15"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-2xl opacity-0 transition-opacity duration-700 ${
                      isActive ? "opacity-10" : "group-hover:opacity-8"
                    }`}
                  ></div>

                  {/* Enhanced card with 3D effects */}
                  <div
                    className={`relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border transition-all duration-700 ${
                      isActive
                        ? "border-amber-400/40 bg-white/12 shadow-2xl shadow-amber-500/10"
                        : "border-white/10 hover:bg-white/8 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Enhanced icon with 3D effect */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center transition-all duration-500 shadow-2xl ${
                          isActive ? "scale-110 rotate-6" : "group-hover:scale-105 group-hover:rotate-3"
                        }`}
                        style={{
                          boxShadow: isActive
                            ? "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(245, 158, 11, 0.4)"
                            : "0 5px 15px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3
                            className={`text-2xl font-bold transition-all duration-500 ${
                              isActive
                                ? "text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text"
                                : "text-white group-hover:text-amber-100"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <span className="text-sm text-amber-400 font-semibold px-3 py-1 bg-amber-400/10 rounded-full">
                            {feature.stats}
                          </span>
                        </div>

                        <p
                          className={`text-gray-300 leading-relaxed mb-4 transition-colors duration-500 ${
                            isActive ? "text-gray-200" : "group-hover:text-gray-200"
                          }`}
                        >
                          {feature.description}
                        </p>

                        {/* Feature highlights */}
                        <div className="flex flex-wrap gap-2">
                          {feature.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                                  : "bg-white/10 text-gray-400 border border-white/20"
                              }`}
                            >
                              <CheckCircle className="w-3 h-3" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Active indicator with enhanced design */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient} transition-all duration-700 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    {/* Corner accent */}
                    <div
                      className={`absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right side - Enhanced dynamic visual showcase */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              {/* Background image with enhanced effects */}
              <img
                src={features[activeFeature].image || "/placeholder.svg"}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover transition-all duration-1000"
              />

              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Floating stats with enhanced design */}
              <div className="absolute top-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className="text-3xl font-bold text-amber-400 mb-1">{features[activeFeature].stats}</div>
                <div className="text-sm text-gray-300">Success Metric</div>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Feature title overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold text-white mb-2">{features[activeFeature].title}</h3>
                <div className="flex gap-2">
                  {features[activeFeature].highlights.slice(0, 3).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 bg-amber-400/20 backdrop-blur-md rounded-full border border-amber-400/30 text-xs text-amber-300 font-medium"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature indicators with enhanced design */}
              <div className="absolute bottom-8 right-8 flex gap-3">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index === activeFeature
                        ? "bg-amber-400 scale-125 shadow-lg shadow-amber-400/50"
                        : "bg-white/30 hover:bg-white/50 hover:scale-110"
                    }`}
                  />
                ))}
              </div>

              {/* Enhanced animated elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-12 left-12 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-4000"></div>
              </div>
            </div>

            {/* Enhanced 3D floating elements around the showcase */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl animate-float shadow-2xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl animate-float animation-delay-2000 shadow-2xl flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 border-2 border-amber-400/50 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-8 w-4 h-4 border border-white/50 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Enhanced additional stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: TrendingUp, value: "500+", label: "Projects Completed", gradient: "from-amber-500 to-amber-600" },
            { icon: Users, value: "95%", label: "Client Satisfaction", gradient: "from-blue-500 to-blue-600" },
            { icon: Clock, value: "24/7", label: "Support Available", gradient: "from-amber-600 to-blue-600" },
            { icon: Award, value: "5★", label: "Average Rating", gradient: "from-amber-500 to-amber-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                visibleItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 3) * 200}ms` }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
