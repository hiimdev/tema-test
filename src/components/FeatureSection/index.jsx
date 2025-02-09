import React from 'react'
import Slider from "react-slick";
import './feature.css'
import SvgIcon from '../SvgIcon';

const FeatureSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <div className="custom-dot">
        <span></span>
      </div>
    ),
    dotsClass: "custom-dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className='feature-container'>
      <div className='feature-wrap-text'>
        <p className='feature-title'>Our Features Special For You</p>

        <p className='feature-desc'>We provide various special features for all of you</p>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-slide">
            <div className='content-wrap'>
              <div className='carousel-icon'>
                <SvgIcon name="branch" size={40} />
              </div>


              <div className='carousel-text'>
                <p className='carousel-title'>Best Tutors</p>
                <p className='carousel-desc'>Bring your design vision to life in clean, semantic HTML5</p>
              </div>
            </div>
          </div>

          <div className="carousel-slide carousel-active">
            <div className='content-wrap'>
              <div className='carousel-icon icon-active'>
                <SvgIcon name="arrowConnect" size={40} />
              </div>


              <div className='carousel-text'>
                <p className='carousel-title'>Flexible</p>
                <p className='carousel-desc'>Connect your marketing tools with built-in integrations</p>
              </div>
            </div>
          </div>

          <div className="carousel-slide">
            <div className='content-wrap'>
              <div className='carousel-icon'>
                <SvgIcon name="branch2" size={40} />
              </div>


              <div className='carousel-text'>
                <p className='carousel-title'>Easy Access</p>
                <p className='carousel-desc'>Connect your marketing tools with built-in integrations</p>
              </div>
            </div>
          </div>

          <div></div>
          <div className="last-item"></div>
        </Slider>
      </div>
    </div>
  )
}

export default FeatureSection