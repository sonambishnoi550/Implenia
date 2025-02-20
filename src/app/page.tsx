"use client"
import Hero from '@/components/Hero'
import KickBox from '@/components/KickBox'
import Works from '@/components/Works'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Process from '@/components/Process'
import Stories from '@/components/Stories'
import Community from '@/components/Community'

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
      <Works />
      <Process />
      <Community/>
      <Stories/>
    </>
  )
}

export default page