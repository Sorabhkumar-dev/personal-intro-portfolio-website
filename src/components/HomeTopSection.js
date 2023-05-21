import React from 'react'
import HomeProfileImage from './HomeProfileImage'
import ProfileIntro from './ProfileIntro'
import '../css/HomeTopSection.css'

export default function HomeTopSection(props) {
  return (
    <div className='home_top_section_container'>
      <HomeProfileImage profleImage ={props.profleImage}/>
      <ProfileIntro title={props.title}/>
    </div>
  )
}
