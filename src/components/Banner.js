import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// animation
import { TypeAnimation } from 'react-type-animation';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div>
            <h1>
              TYLER <span>JEFFERSON</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-3'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Passionate developer',
                  2000,
                  'Highly motivated worker',
                  2000,
                  'Team player',
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
          </div>
          {/* image */}
          <div>
            <img src={Image} alt="profile image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
