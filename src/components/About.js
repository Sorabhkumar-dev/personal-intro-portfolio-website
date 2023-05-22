import React from 'react'
import '../css/About.css'
import MainTopHeading from '../components/MainTopHeading'
import AboutTopIntroCard from '../components/AboutTopIntroCard'
import AboutIndustriesSection from './AboutIndustriesSection'

export default function About() {
  return (
    <div className='about_main_conatiner'>
      <MainTopHeading primaryHeading = "About " secondoryHeading = "Us!"/>
      <AboutTopIntroCard/>
      <AboutIndustriesSection/>
    </div>
  )
}
