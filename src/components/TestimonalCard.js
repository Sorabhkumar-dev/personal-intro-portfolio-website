import React from 'react'
import '../css/TestimonalCard.css'

export default function TestimonalCard(props) {
  return (
    <div className='testimonal_card_conatiner'>
        <img src={props.testimonalImage} alt="testimonal image" className="testimonal_image" />
        <p className="testmonal_name">{props.testmonalName}</p>
    </div>
  )
}
