"use client"

import { Mail, Linkedin, Instagram, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced footer content */}
        <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/8 transition-all duration-300">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Enhanced company info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative p-2 bg-black/20 backdrop-blur-md rounded-xl border border-amber-400/20">
                    <Image
                      src="/images/ts-logo.webp"
                      alt="TS Techy Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">TS Techy</span>
                  <p className="text-amber-400 text-sm font-medium">Transform Ideas Into Impact</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                We specialize in innovative SEO solutions and digital transformation services that help businesses
                achieve
                <span className="text-amber-400"> measurable growth</span> and online success.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:support@tstechy.com">support@tstechy.com</a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>Digital Innovation Hub, Tech City</span>
                </div>
              </div>
            </div>

            {/* Enhanced services */}
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform">
                  Keyword Research
                </li>
                <li className="text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform">
                  On-Page SEO
                </li>
                <li className="text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform">
                  SEO Analytics
                </li>
                <li className="text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform">
                  Digital Strategy
                </li>
                <li className="text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform transition-transform">
                  Consultation
                </li>
              </ul>
            </div>

            {/* Enhanced social and quick links */}
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="group relative p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-rotate-3"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#"
                  className="group relative p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                  <Instagram className="w-6 h-6 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">Business Hours:</p>
                <p className="text-sm text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-300">Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Enhanced copyright */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} TS Techy. All rights reserved. | Transforming Ideas Into Impact
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
