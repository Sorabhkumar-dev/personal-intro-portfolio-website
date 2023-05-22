import React from 'react'
import '../css/IndustryCard.css'

export default function IndustryCard(props) {
  return (
    <div className='industry_card_container'>
      <img src={props.icon}   alt='industry icon' className='industry_icon'/>
      <h3 className='industry_name'>{props.industryName}</h3>
    </div>
  )
}
