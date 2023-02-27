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
                  'otivated worker',
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
            <p>
              I am primarily a MERN Stack JavaScript developer. I have a lot of love for coding, and strive to learn new languages and technologies whenever the opportunity presents itself!
            </p>
            <div>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
            {/* socials */}
            <div>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
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
