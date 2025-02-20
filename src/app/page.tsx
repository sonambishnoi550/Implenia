"use client"
import Hero from '@/components/Hero'
import KickBox from '@/components/KickBox'
import Works from '@/components/Works'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <>
      <Hero/>
      <KickBox />
      <Works/>
    </>
  )
}

export default page