import React from 'react'
import './package.css'
import SvgIcon from '../SvgIcon'
import { images } from '../../constants'

const PackageSection = () => {
  return (
    <div className='package-container'>
      <div className='package-text'>
        <p className='package-title'>Choose your package</p>
        <p className='package-desc'>We provide various types of packages just for you</p>
      </div>

      <div className='package-wrap'>
        <div className='package-card'>
          <div className='package-card-text'>
            <p className='package-card-title'>DEVELOPMENT</p>
            <p className='package-card-price'>
              10
              <SvgIcon name="dollars" className="package-icon-dollar" size={24} />
            </p>
          </div>

          <p className='package-card-desc'>1 Module Javascript 1 Module Human Resources</p>

          <button className='package-card-btn'>
            Buy Now
          </button>
        </div>

        <div className='package-card special'>
          <div className='package-card-text'>
            <p className='package-card-title'>IT & SOFTWARE</p>
            <p className='package-card-price'>
              30
              <SvgIcon name="dollars" className="package-icon-dollar" size={21} />
            </p>
          </div>

          <p className='package-card-desc'>
            1 Module Javascript
            1 Module Human Resources
            2 Module Sales Teams
            Pack Marketing Skills
            5 Module Study Case

            <img src={images.newImg} alt="new" className="img-new" />
          </p>

          <button className='package-card-btn btn-special'>
            Buy Now
          </button>
        </div>

        <div className='package-card'>
          <div className='package-card-text'>
            <p className='package-card-title'>BUSINESS</p>
            <p className='package-card-price'>
              30
              <SvgIcon name="dollars" className="package-icon-dollar" size={21} />
            </p>
          </div>

          <p className='package-card-desc'>
            1 Module Javascript
            1 Module Human Resources
            2 Module Sales Teams
          </p>

          <button className='package-card-btn'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageSection