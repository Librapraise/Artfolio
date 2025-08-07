"use client"
import React, { useState, useEffect, useRef } from 'react'

type PortfolioItem = {
  id: number
  title: string
  category: string
  image: string
  description: string
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: './Brivic.png',
    description: 'Complete brand identity design for a real-estate company.',
  },
  {
    id: 2,
    title: 'Layout Design for Kays Agro',
    category: 'Print',
    image: 'kaysagro.png',
    description: 'Layout design for an agricultural consulting company.',
  },
  {
    id: 3,
    title: 'Pet Care Service Branding',
    category: 'Product',
    image: './petcare.png',
    description: 'Brand design for a pet care service provider',
  },
  {
    id: 4,
    title: 'Product Packaging',
    category: 'Packaging',
    image: './petshop-1.png',
    description: 'Creative packaging design for a pet shop brand.',
  },
  {
    id: 5,
    title: 'Pet Adoption Branding',
    category: 'Product',
    image: './petspic.png',
    description: 'Branding and UI design for a pet adoption platform.',
  },
  {
    id: 6,
    title: 'Delicious Food Delivery',
    category: 'Product',
    image: './delicious.png',
    description: 'Food delivery service branding and menu design.',
  },
  {
    id: 7,
    title: 'Delicious Food Delivery',
    category: 'Product',
    image: './yukkys.png',
    description: 'Food delivery service branding and menu design.',
  },
  {
    id: 8,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: './kaysagro-2.png',
    description: 'Complete brand identity design for a agricultural production company.',
  },
  {
    id: 9,
    title: 'Pet Adoption Branding',
    category: 'Product',
    image: './petsabode-1.png',
    description: 'Branding and UI design for a pet adoption platform.',
  },
  {
    id: 10,
    title: 'Pet Adoption Branding',
    category: 'Product',
    image: './petshop.png',
    description: 'Branding and UI design for a pet adoption platform.',
  },
  {
    id: 11,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: './kaysenterprise.png',
    description: 'Complete brand identity design for a agricultural production company.',
  },
  {
    id: 12,
    title: 'Florist & Gardening Firm',
    category: 'Print',
    image: './trippleg.png',
    description: 'Complete brand identity design for a professional florist & gardening firm.',
  },
]

// Get unique categories
const categories = [
  'All',
  ...new Set(portfolioItems.map((item) => item.category)),
]

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatingItems, setAnimatingItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger animation of portfolio items
          filteredItems.forEach((_, index) => {
            setTimeout(() => {
              setAnimatingItems(prev => [...prev, index])
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Reset animations when category changes
  useEffect(() => {
    setAnimatingItems([])
    filteredItems.forEach((_, index) => {
      setTimeout(() => {
        setAnimatingItems(prev => [...prev, index])
      }, index * 80)
    })
  }, [activeCategory])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setAnimatingItems([])
  }

  return (
    <>
      <section ref={sectionRef} id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-l from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-15 blur-2xl animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Animated Header */}
          <div className="text-center mb-16">
            <h2 
              className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-8 opacity-0'
              }`}
            >
              <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                Port
              </span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x bg-size-200">
                folio
              </span>
            </h2>
            <div 
              className={`w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'transform scale-x-100 opacity-100' 
                  : 'transform scale-x-0 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            ></div>
            <p 
              className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Explore a collection of my creative projects and design solutions
            </p>
          </div>

          {/* Animated Category Filter */}
          <div 
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'transform translate-y-0 opacity-100' 
                : 'transform translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>

          {/* Animated Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 ${
                  animatingItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${index * 0.1}s`
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Container with Advanced Effects */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    {item.category}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                      {item.description}
                    </p>
                    
                    {/* View Button */}
                    <button className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-300 w-fit">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl ring-0 ring-purple-500/20 group-hover:ring-4 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto transform animate-modalSlideIn shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto rounded-t-2xl"
              />
              
              {/* Enhanced Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg group"
                onClick={() => setSelectedItem(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {selectedItem.category}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {selectedItem.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {selectedItem.description}
              </p>
      
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-modalSlideIn {
          animation: modalSlideIn 0.4s ease-out;
        }
      `}</style>
    </>
  )
}