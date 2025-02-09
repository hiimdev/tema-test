import React from 'react'
import './faqs.css'
import { useState } from 'react'
import SvgIcon from '../SvgIcon'

const accordionData = [
  { title: "01. Can I Find the right information faster?", content: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue." },
  { title: "02. How to share feature demos and ideas?", content: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue." },
  { title: "03. How to get insights from users?", content: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue." },
  { title: "04. Can I develop my website without code?", content: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue." },
];

const FaqsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faqs-container'>
      <p className='faqs-title'>FAQs</p>


      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" onClick={() => handleToggle(index)}>
              {item.title}
              <span className={`icon ${ activeIndex === index ? "open" : "" }`}>
                {
                  activeIndex === index
                    ? <SvgIcon name="minus" className="package-" size={54} />
                    : <SvgIcon name="plus" className="package-" size={54} />
                }
              </span>
            </button>
            <div className={`accordion-content ${ activeIndex === index ? "active" : "" }`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqsSection;