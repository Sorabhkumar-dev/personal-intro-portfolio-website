import React from 'react'
import '../css/PrimaryHeading.css'

export default function PrimaryHeading(props) {
  return (
    <div className="primary_heading_container">
    <h2 className="primary_heading">
      <span className="primary_heading_text">{props.primaryHeading} </span>
      <span className="secondory_heading_text">{props.secondoryHeading}  </span>
    </h2>
  </div>
  )
}
