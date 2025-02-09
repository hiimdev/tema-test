import React from 'react'
import './footer.css'
import SvgIcon from '../SvgIcon'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <p className='footer-top-title'>Start upgrading your skills free for this month</p>

        <p className='footer-top-desc'>Build your site for free and take as long as you need</p>

        <div className='footer-top-btn'>
          <button className='footer-btn-try'>
            <p>Try Yourself</p>
          </button>

          <button className='footer-btn-get'>
            <p>Get started</p>
            <SvgIcon name="arrowUpRight" className="" size={30} />
          </button>
        </div>
      </div>

      <div className='footer-main'>
        <div className='footer-logo'>
          <SvgIcon name='logo2' size={32} />

          <p className='footer-brand'>Macode</p>
        </div>

        <div className='footer-link'>
          <p className='footer-link-item'>Tutorials</p>
          <p className='footer-link-item'>Case Studies</p>
          <p className='footer-link-item'>Case Studies</p>
        </div>
      </div>

      <div className='footer-line'></div>

      <div className='footer-desc'>
        <div className='footer-social'>
          <SvgIcon name='facebook' size={24} />
          <SvgIcon name='ins' size={24} />
          <SvgIcon name='linkedin' size={24} />
          <SvgIcon name='twitter' size={24} />
          <SvgIcon name='gmail' size={24} />
        </div>

        <div className='footer-line2'></div>

        <p className='footer-copyright'>© 2021 Copyright. <span className='footer-copyright-brand'>Macode.io</span></p>
      </div>

      <button
        className="scroll-to-top"
        onClick={scrollToTop}
      >
        <SvgIcon name='scrollToTop' size={38} />
      </button>
    </div>
  )
}

export default Footer