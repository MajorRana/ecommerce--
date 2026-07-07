'use client'
import dynamic from 'next/dynamic'
import Carousel from '@/components/Carousel'
import CategoryListing from '@/components/CategoryListing'
import Featured from '@/components/Featured'
import NavBar from '@/components/NavBar'
import TopBar from '@/components/TopBar'
import FeaturedProducts from '@/components/FeaturedProducts'
import React from 'react'

// Humne Home function ka naam badal kar HomeContent kar diya hai
function HomeContent() {
  return (
    <>
      <TopBar/>
      <NavBar/>
      <Carousel/>
      <Featured/>
      <CategoryListing/>
      <FeaturedProducts/>
    </>
  )
}

// Next.js ko bol rahe hain ki isse sirf browser (client-side) par chalaye, server par nahi
export default dynamic(() => Promise.resolve(HomeContent), { ssr: false })