import React from 'react'
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Designer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-4 md:-left-6 w-24 h-24 border-2 border-indigo-600 rounded-xl z-0"></div>
            <div className="absolute -bottom-6 -right-4 md:-right-5 w-32 h-32 border-2 border-indigo-600 rounded-xl z-0"></div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full mb-6">
              About Me
            </div>
            <h2 className="text-4xl font-bold mb-6">
              I'm a passionate graphic designer with a keen eye for detail
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                With over 5 years of experience in the creative industry, I've
                had the privilege of working with brands across various sectors,
                helping them communicate their message through compelling visual
                design.
              </p>
              <p>
                My design philosophy centers on the belief that great design
                should not only look beautiful but also solve problems
                effectively. I approach each project with curiosity and empathy,
                seeking to understand the unique needs of each client and their
                audience.
              </p>
              <p>
                When I'm not designing, you can find me exploring art galleries,
                photographing urban landscapes, or experimenting with new
                creative techniques to bring into my professional work.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Let's Work Together
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
