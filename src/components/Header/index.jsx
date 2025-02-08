import React from 'react'
import './header.css'
import SvgIcon from '../SvgIcon'
import { images } from '../../constants'
import { useState } from 'react'
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('EN');

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className='header-container'>
      <div className='header-left'>
        <SvgIcon name="logo" size={32} />

        <div className='menu-wrap'>
          <div className='menu'>
            <a className='menu-item' href='#'>Tutorials</a>

            <p style={{ lineHeight: 0, marginBottom: '10px' }}>.</p>

            <a className='menu-item' href='#'>Case studies</a>

            <p style={{ lineHeight: 0, marginBottom: '10px' }}>.</p>

            <a className='menu-item' href='#'>Resources</a>
          </div>


          <div className='location-wrap' onClick={toggleDropdown}>
            <div className='location-right'>
              <img src={images.us} alt="us" className='img-location' width={21} height={21} />
              <p className='text-location'>{value === 'EN' ? 'EN' : 'VN'}</p>
            </div>

            <span className='location-icon'>
              <SvgIcon name="chevronUp" size={20} />
            </span>
            {isOpen && (
              <ul className="dropdown-menu">
                <li className={clsx(value === 'EN' && "active")} onClick={() => setValue('EN')}>
                  <img src={images.us} alt="us" className='img-location' width={21} height={21} />
                  <p>ENGLISH</p>
                </li>
                <li className={clsx(value === 'VN' && "active")} onClick={() => setValue('VN')}>
                  <img src={images.vn} alt="us" className='img-location' width={21} height={21} />
                  <p>VIỆT NAM</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header