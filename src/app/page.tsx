import React from 'react'
import { HeroSection } from '../../components/HeroSection'
import { PortfolioGallery } from '../../components/PortfolioGallery'
import { AboutSection } from '../../components/AboutSection'
import { SkillsSection } from '../../components/SkillsSection'
import { ContactSection } from '../../components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioGallery />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
