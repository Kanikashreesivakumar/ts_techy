"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, User, MessageSquare, CheckCircle, Phone, MapPin, Clock, Zap } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 relative">
  
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-amber-500/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/15 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/8 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-black/30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
    
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/8 backdrop-blur-md rounded-full border border-amber-400/20 mb-8 hover:bg-white/12 transition-all duration-300">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide">READY TO BOOST</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-white bg-clip-text text-transparent animate-gradient">
              Ready To Boost
            </span>
            <br />
            <span className="text-white">Your SEO?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can transform your digital presence and drive{" "}
            <span className="text-amber-400 font-semibold">exponential growth</span> for your business.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-16">
         
          <div className="relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-white/10 rounded-3xl blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-white/5 rounded-3xl blur-2xl scale-105"></div>

            
            <div className="relative p-10 bg-white/8 backdrop-blur-md rounded-3xl border border-white/15 hover:bg-white/12 transition-all duration-500 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
      
                <div className="relative">
                  <div className="relative">
                    <User
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === "name" ? "text-amber-400" : "text-gray-400"}`}
                    />
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-16 bg-white/8 border-white/15 text-black placeholder-gray-400 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 hover:bg-white/12 text-lg"
                      required
                    />
                  </div>
                  {focusedField === "name" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-white/8 rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </div>

    
                <div className="relative">
                  <div className="relative">
                    <Mail
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === "email" ? "text-amber-400" : "text-gray-400"}`}
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-16 bg-white/8 border-white/15 text-black placeholder-gray-400 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 hover:bg-white/12 text-lg"
                      required
                    />
                  </div>
                  {focusedField === "email" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-white/8 rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </div>

                
                <div className="relative">
                  <div className="relative">
                    <Phone
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === "phone" ? "text-amber-400" : "text-gray-400"}`}
                    />
                    <Input
                      type="tel"
                      placeholder="Your Phone (Optional)"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-16 bg-white/8 border-white/15 text-black placeholder-gray-400 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 hover:bg-white/12 text-lg"
                    />
                  </div>
                  {focusedField === "phone" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-white/8 rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </div>

                
                <div className="relative">
                  <div className="relative">
                    <MessageSquare
                      className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === "message" ? "text-amber-400" : "text-gray-400"}`}
                    />
                    <Textarea
                      placeholder="Tell us about your project and goals..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 pt-4 min-h-40 bg-white/8 border-white/15 text-black placeholder-gray-400 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none hover:bg-white/12 text-lg"
                      required
                    />
                  </div>
                  {focusedField === "message" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 to-white/8 rounded-xl blur opacity-50 -z-10"></div>
                  )}
                </div>

                
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="group relative px-16 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 border-0 rounded-xl text-xl font-bold text-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
                    disabled={isSubmitted}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></span>
                    <span className="relative flex items-center gap-3 text-black font-bold">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-6 h-6" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </form>

              {isSubmitted && (
                <div className="mt-8 p-6 bg-amber-500/15 border border-amber-400/30 rounded-xl text-center backdrop-blur-md">
                  <p className="text-amber-400 font-semibold text-lg">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>

        
          <div className="space-y-8">
           =
            <div className="relative p-10 bg-white/8 backdrop-blur-md rounded-3xl border border-white/15 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold text-lg">support@tstechy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold text-lg">+91 7845105058</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-semibold text-lg">Ts-Techy, Coimbatore ,Tamilnadu</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="relative p-8 bg-white/8 backdrop-blur-md rounded-3xl border border-white/15 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Response Time</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
              <div className="space-y-2 text-amber-400 font-medium">
                <p>Mon - Fri: 9:00 AM - 6:00 PM </p>
                
              </div>
            </div>

         
            <div className="relative p-8 bg-white/8 backdrop-blur-md rounded-3xl border border-white/15 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">2-4h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Free</div>
                  <div className="text-sm text-gray-400">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Confidential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
