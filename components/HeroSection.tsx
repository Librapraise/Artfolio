"use client";

import React, { useState, useEffect, useRef } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

export function HeroSection() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 200)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }))

  return (
    <>
      <section
        ref={heroRef}
        id="home"
        className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 animate-pulse"></div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animation: `float ${particle.duration}s ease-in-out infinite alternate`
            }}
          ></div>
        ))}

        {/* Dynamic Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div 
            className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-purple-200 to-purple-100 opacity-60 blur-3xl transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) scale(${1 + mousePosition.x * 0.1})`
            }}
          ></div>
          <div 
            className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-tl from-indigo-200 to-blue-100 opacity-60 blur-3xl transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -25}px) rotate(${mousePosition.x * 10}deg)`
            }}
          ></div>
          <div 
            className="absolute top-[40%] right-[25%] w-40 h-40 rounded-full bg-gradient-to-l from-pink-200 to-red-100 opacity-50 blur-2xl transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * -15}px) scale(${1 + mousePosition.y * 0.2})`
            }}
          ></div>
          
          {/* Additional animated shapes */}
          <div className="absolute top-[20%] right-[5%] w-32 h-32 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-40 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-[30%] left-[15%] w-48 h-48 bg-gradient-to-l from-green-200 to-teal-200 opacity-40 blur-3xl animate-bounce"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            {/* Animated Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight overflow-hidden">
              <span 
                className={`block transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'transform translate-y-0 opacity-100' 
                    : 'transform translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                Creative
              </span>
              <span 
                className={`block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-1000 ease-out bg-size-200 animate-gradient-x ${
                  isVisible 
                    ? 'transform translate-y-0 opacity-100' 
                    : 'transform translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                Design Portfolio
              </span>
            </h1>
            
            {/* Animated Description */}
            <p 
              className={`text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'transform translate-x-0 opacity-100' 
                  : 'transform -translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Crafting visual experiences that captivate, inspire, and communicate
              powerful messages through innovative design.
            </p>
            
            {/* Animated Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-size-200 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 animate-gradient-x relative overflow-hidden group"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:border-gray-400 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/80"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'transform translate-y-0 opacity-100' 
              : 'transform translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <a
            href="#portfolio"
            className="flex flex-col items-center text-gray-500 hover:text-indigo-600 transition-all duration-300 group"
          >
            <span className="text-sm mb-2 group-hover:mb-3 transition-all duration-300">Scroll</span>
            <div className="animate-bounce group-hover:animate-pulse">
              <ArrowDown size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </section>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:from-indigo-700 hover:to-purple-700 hover:scale-110 transition-all duration-300 backdrop-blur-sm ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </>
  )
}