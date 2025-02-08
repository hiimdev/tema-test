import React from 'react'
import './hero.css'
import { images } from '../../constants'
import SvgIcon from '../SvgIcon'
import Header from '../Header'

const HeroSection = () => {
  return (
    <section className='hero-container'>
      <div className='wrapper'>
        <Header />

        <div className='hero-left'>
          <h1 className='hero-title'>
            Improve your skills by  <img src={images.closetag} alt="" className='img-hero-title' width={42} height={42} /> study
            with coding
          </h1>

          <div className='hero-desc-wrap'>
            <img src={images.frame2} alt="" className='img-frame' width={72} height={72} />

            <p className='hero-desc'>Create, launch, and iterate on new
              marketing campaigns without distracting
              your product team.
            </p>
          </div>

          <button className='hero-btn'>
            <p>Get started</p>
            <SvgIcon name="arrowUpRight" size={30} />
          </button>
        </div>
      </div>

      <div className='hero-right'>
        <div className='img-code'>
          <img src={images.code} alt="" width={519} height={351} />
        </div>

        <div className='img-melo'>
          <img src={images.ItaloMelo} alt="" width={516} height={752} />
        </div>

        <div className='img-caution'>
          <img src={images.ParkCaution} alt="" width={194} height={194} />
        </div>

        <div className='hero-right-desc'>
          <SvgIcon name="radio" size={22} />

          <p className='hero-right-text'>· Name (Skill)</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection