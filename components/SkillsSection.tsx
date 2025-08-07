import React from 'react'
import {
  PenToolIcon,
  MonitorIcon,
  LayersIcon,
  TypeIcon,
  CameraIcon,
  PackageIcon,
} from 'lucide-react'
type Skill = {
  icon: React.ReactNode
  title: string
  description: string
}
const skills: Skill[] = [
  {
    icon: <PenToolIcon size={32} className="text-indigo-600" />,
    title: 'Illustration & Graphics',
    description:
      'Creating custom illustrations, icons, and visual elements that enhance brand identity and communication.',
  },
  {
    icon: <MonitorIcon size={32} className="text-indigo-600" />,
    title: 'Product Design',
    description:
      'Designing user-centric digital products with a focus on usability, aesthetics, and functionality.',
  },
  {
    icon: <LayersIcon size={32} className="text-indigo-600" />,
    title: 'Brand Identity',
    description:
      'Developing cohesive brand systems including logos, color palettes, typography, and brand guidelines.',
  },
  {
    icon: <TypeIcon size={32} className="text-indigo-600" />,
    title: 'Typography',
    description:
      'Expert typographic design for both print and digital media, creating readable and visually appealing text layouts.',
  },
  {
    icon: <CameraIcon size={32} className="text-indigo-600" />,
    title: 'Photography',
    description:
      'Professional photo editing, retouching, and manipulation to enhance visual storytelling.',
  },
  {
    icon: <PackageIcon size={32} className="text-indigo-600" />,
    title: 'Packaging Design',
    description:
      'Creating distinctive packaging solutions that stand out on shelves and communicate brand values.',
  },
]
export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & Services
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized design services to help your brand stand out in today's
            competitive market
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white group"
            >
              <div className="p-4 rounded-full bg-indigo-50 inline-flex mb-6 group-hover:bg-indigo-100 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
