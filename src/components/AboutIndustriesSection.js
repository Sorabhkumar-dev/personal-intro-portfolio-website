import React from 'react'
import PrimaryHeading from './PrimaryHeading'
import '../css/AboutIndustriesSection.css'
import IndustryCard from './IndustryCard'
import AI_ML_icon from '../asset/icon/AI_ML.svg'
import digitalPlatformIcon from '../asset/icon/digital_platforms.svg'
import fintechIcon from '../asset/icon/fintech.svg'
import semiconducterIcon from '../asset/icon/semiconductor.svg'
import holdingIcon from '../asset/icon/holdings.svg'


export default function AboutIndustriesSection() {
    const industries = [
        {industry:"Semiconducter", icon:semiconducterIcon},
        {industry:"AI/ML", icon:AI_ML_icon},
        {industry:"Digital Platforms", icon:digitalPlatformIcon},
        {industry:"Faster Holdings", icon:holdingIcon},
        {industry:"Fintech", icon:fintechIcon}
    ];
    
    const industriesIcons = industries.map(data => {
       return <IndustryCard icon = {data.icon} industryName ={data.industry} />;
    });

  return (
    <div class = "about_industries_containetr">
      <PrimaryHeading primaryHeading = "Industries which" secondoryHeading = "We are operating!"/>
      <div className="industries_list">
        {industriesIcons}
      </div>
    </div>
  )
}
