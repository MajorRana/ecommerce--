"use client"
import Carousel from '@/components/Carousel'
import CategoryListing from '@/components/CategoryListing'
import Featured from '@/components/Featured'
import NavBar from '@/components/NavBar'
import TopBar from '@/components/TopBar'
import FeaturedProducts from '@/components/FeaturedProducts'
import Link from 'next/link'
import React from 'react'
import Vender from '@/components/Vender'

function Home() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Carousel/>
    <Featured/>
    <CategoryListing/>
<FeaturedProducts/>
{/* <Vender/> */}
    </>
  )
}

export default Home