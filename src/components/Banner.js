import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
              TYLER <span>JEFFERSON</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[48px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-3'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Passionate developer',
                  2000,
                  'Motivated worker',
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
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              I am primarily a MERN Stack JavaScript developer. I have a lot of love for coding, and strive to learn new languages and technologies whenever the opportunity presents itself!
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
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
