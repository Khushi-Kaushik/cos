import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/home/Hero'
import FeaturedCollections from '../../components/home/featuredCollections'
import Footer from '../../components/Footer'
import NewArrivalsSlider from '../../components/home/arrival'
import TrendingProductsSlider from '../../components/home/TrendingProducts'
import TestimonialSlider from '../../components/home/Testimonial'
import FeatureGrid from '../../components/home/FeatureGrid'
import SustainabilitySection from '../../components/home/SustainabilitySection'
import JoinCycleSection from '../../components/home/JoinCycleSection'
const Home = () => {
    return (
        <div className='mx-auto'>
            <Hero />
            <FeaturedCollections /> 
            <NewArrivalsSlider /> 
            <FeatureGrid />  
            <TrendingProductsSlider /> 
            <TestimonialSlider /> 
            <SustainabilitySection /> 
            <JoinCycleSection /> 
        </div>
    )
}

export default Home