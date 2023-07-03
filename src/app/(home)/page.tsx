import { HeroSection } from '@/app/(home)/(sections)/hero'
import { DutiesSection } from '@/app/(home)/(sections)/duties'
import React from 'react'
import { Navbar } from '@/app/(home)/Navbar'
import { DutiesPartIISection } from '@/app/(home)/(sections)/dutiesPartII'
import { PlaceholderSection } from '@/app/(home)/(sections)/Placeholder'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DutiesSection />
      <DutiesPartIISection />
      <PlaceholderSection />
    </main>
  )
}
