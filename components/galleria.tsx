"use client"
import React, { useState } from 'react'

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
    image:
      './Brivic.png',
    description: 'Complete brand identity design for a real-estate company.',
  },
  {
    id: 2,
    title: 'Layout Design for Kays Agro',
    category: 'Print',
    image:
      'kaysagro.png',
    description: 'Layout design for an agricultural consulting company.',
  },
  {
    id: 3,
    title: 'Pet Care Service Branding',
    category: 'Product',
    image:
      './petcare.png',
    description:
      'Brand design for a pet care service provider',
  },
  {
    id: 4,
    title: 'Product Packaging',
    category: 'Packaging',
    image:
      './petshop-1.png',
    description: 'Creative packaging design for a pet shop brand.',
  },
  {
    id: 5,
    title: 'Pet Adoption Branding',
    category: 'Product',
    image:
      './petspic.png',
    description:
      'Branding and UI design for a pet adoption platform.',
  },
  {
    id: 6,
    title: 'Delicious Food Delivery',
    category: 'Product',
    image:
      './delicious.png',
    description: 'Food delivery service branding and menu design.',
  },
  {
    id: 7,
    title: 'Delicious Food Delivery',
    category: 'Product',
    image:
      './yukkys.png',
    description: 'Food delivery service branding and menu design.',
  },
  {
    id: 8,
    title: 'Brand Identity Design',
    category: 'Branding',
    image:
    './kaysagro-2.png',
    description: 'Complete brand identity design for a agricultural production company.',
  },
  {
    id: 9,
    title: 'Pet Adoption Branding',
    category: 'Product',
    image:
      './petsabode-1.png',
    description:
      'Branding and UI design for a pet adoption platform.',
  },
  {
    id: 10,
    title: 'Pet Adoption Branding',
    category: 'Product',
    image:
      './petshop.png',
    description:
      'Branding and UI design for a pet adoption platform.',
  },
  {
    id: 11,
    title: 'Brand Identity Design',
    category: 'Branding',
    image:
    './kaysenterprise.png',
    description: 'Complete brand identity design for a agricultural production company.',
  },
  {
    id: 12,
    title: 'Florist & Gardening Firm',
    category: 'Print',
    image:
      './trippleg.png',
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
  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a collection of my creative projects and design solutions
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-200 mt-2">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for selected item */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto"
              />
              <button
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-indigo-600 mb-4">{selectedItem.category}</p>
              <p className="text-gray-700">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
