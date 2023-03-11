import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          {/* img */}
          {/* <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div> */}
          {/* text */}
          <div>
            <h2>About me.</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, suscipit!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio facilis aliquam mollitia, reiciendis veritatis labore at cupiditate doloribus, et natus modi consequuntur explicabo rem.
            </p>
            {/* stats */}
            <div>
              <div>
                <div>
                  <CountUp start={0} end={13} duration={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
