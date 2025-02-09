import React from 'react'
import './partner.css'
import { images } from '../../constants'

const PartnerSection = () => {
  return (
    <div className="partner-container">
      <img src={images.edX} alt="edX" className="img-partner" />
      <img src={images.coursera} alt="Coursera" className="img-partner" />
      <img src={images.udemy} alt="Udemy" className="img-partner" />
    </div>

  )
}

export default PartnerSection