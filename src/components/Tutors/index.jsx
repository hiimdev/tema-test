import React from 'react';
import './tutors.css';
import SvgIcon from '../SvgIcon';
import { images } from '../../constants';

const cardData = [
  {
    icon: 'waves',
    title: 'University',
    desc: 'Browse hundreds of in-depth videos, courses, and guides to get up and running fast'
  },
  {
    icon: 'showCase',
    title: 'Showcase',
    desc: 'Get inspired by the incredible websites built by members of the community'
  }
];

const TutorCard = ({ icon, title, desc }) => (
  <div className='tutors-card'>
    <div className='tutors-icon'>
      <SvgIcon name={icon} size={40} />
    </div>
    <div className='tutors-card-text'>
      <p className='tutors-card-title'>{title}</p>
      <p className='tutors-card-desc'>{desc}</p>
    </div>
  </div>
);

const Tutors = () => {
  return (
    <div className='tutors-container'>
      <div className='tutors-left'>
        <p className='tutors-title'>Get up and running fast together</p>
        <div className='tutors-card-wrap'>
          {cardData.map((card, index) => (
            <React.Fragment key={index}>
              <TutorCard {...card} />
              {index === 0 && <div className='tutors-line'></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='tutors-right'>
        <img src={images.tutor} alt='tutors' className='img-tutors' />
      </div>
    </div>
  );
};

export default Tutors;
