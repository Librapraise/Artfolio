"use client";

import React, { useState, useEffect } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

export function HeroSection() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px from top
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden bg-[#f8f8f8]"
      >
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-200 to-purple-100 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-tl from-indigo-200 to-blue-100 opacity-60 blur-3xl"></div>
          <div className="absolute top-[40%] right-[25%] w-40 h-40 rounded-full bg-gradient-to-l from-pink-200 to-red-100 opacity-50 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Creative</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Design Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
              Crafting visual experiences that captivate, inspire, and communicate
              powerful messages through innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#portfolio"
            className="flex flex-col items-center text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  )
}