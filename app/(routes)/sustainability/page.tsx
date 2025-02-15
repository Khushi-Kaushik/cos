import React from 'react'
import HeroSection from '../../components/sustainability/Hero'
import SustainabilitySection from '../../components/sustainability/sustainabiltySection'
import NumberThatMatters from '../../components/sustainability/NumberThatMatters'
import SeamlessCycle from '../../components/sustainability/SeamlessCycle'
import FashionHero from '../../components/sustainability/FashionHero'
import VerifiedAndAuthentic from '../../components/sustainability/VerifyAndAuthentic'

const Sustainability = () => {
  return (
    <div>
        <HeroSection />
        <SustainabilitySection />
        <NumberThatMatters />
        <SeamlessCycle />
        <FashionHero />
        <VerifiedAndAuthentic />
    </div>
  )
}

export default Sustainability;