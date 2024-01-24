import React from 'react';
import './HowItWorks.css';
import { hiwFeatures } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants } from '@/src/utils/animations';

const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  };

  return (
    <div className='hiw-wrapper'>
      <div className='container'>
        <div className='hiw-container'>
          {/* head */}
          <div className='hiw-head'>
            <motion.span
              initial='offscreen'
              whileInView={'onscreen'}
              variants={tagVariants}
              className='tag'
            >
              How it works
            </motion.span>
            <motion.span
              initial='offscreen'
              whileInView={'onscreen'}
              variants={titleVariants}
              className='title'
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>
          <div className='hiw-features'>
            {hiwFeatures.map((feature, i) => (
              <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                variants={featureVariants}
                className='hiw-feature'
                key={i}
              >
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'easeIn',
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className='detail'
                >
                  <span className='desc'>0{i + 1}</span>
                  <span className='sec-title'>{feature.title}</span>
                  <span className='text'>{feature.des}</span>
                </motion.div>
                {/* right side */}
                <div className='icon'>
                  <Image
                    src={feature.icon}
                    alt='feature'
                    width={128}
                    height={128}
                    style={{ translate: '50% 0rem' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
