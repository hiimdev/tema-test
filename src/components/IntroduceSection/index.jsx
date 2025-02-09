import React from 'react'
import './introduce.css'
import { images } from '../../constants'
import SvgIcon from '../SvgIcon'

const IntroduceSection = () => {
  return (
    <div className='introduce-container'>
      <div className='introduce-left'>
        <img src={images.code2} alt="edX" className="img-code2" />

        <img src={images.ParkCaution} alt="edX" className="img-ParkCaution" />
      </div>

      <div className='introduce-right'>
        <p className='introduce-title'>The language for building web pages</p>
        <p className='introduce-desc'>Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!</p>

        <button className='introduce-btn'>
          <p>Try it Yourself</p>
          <SvgIcon name="arrowUpRight" className="introduce-btn-icon" size={30} />
        </button>
      </div>
    </div>
  )
}

export default IntroduceSection