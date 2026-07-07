'use client'
import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
import TopBar from '@/components/TopBar'
import Link from 'next/link'
import React from 'react'

function ShopContent() {
  return (
    <>
      <TopBar/>
      <NavBar/>
    </>
  )
}

// Next.js ko bol rahe hain ki isse sirf browser (client-side) par chalaye, server par nahi
export default dynamic(() => Promise.resolve(ShopContent), { ssr: false })