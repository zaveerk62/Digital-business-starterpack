/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './WhoWeInvest.css';
import { whoWeInvest } from '@/src/utils/data';
import { motion } from 'framer-motion';
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from '@/src/utils/animations';

const WhoWeInvest = () => {
  return (
    <div className='wwi-wrapper'>
      <div className='container'>
        <div className='wwi-container'>
          {/* left */}
          <div className='wwi-left'>
            <div className='head'>
              <motion.span
                initial='offscreen'
                whileInView={'onscreen'}
                variants={tagVariants}
                className='tag'
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial='offscreen'
                whileInView={'onscreen'}
                variants={titleVariants}
                className='title'
              >
                Digital businesses <br /> with early transactions
              </motion.span>
            </div>
            {/* features */}
            <div className='wwi-features'>
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  initial='offscreen'
                  whileInView={'onscreen'}
                  variants={containerVariants(i * 0.05 + 1)}
                  className='wwi-feature'
                  key={i}
                >
                  <span className='desc'>{feature.title}</span>
                  <span className='text'>{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className='wwi-right'>
            <motion.img
              initial='offscreen'
              whileInView={'onscreen'}
              variants={containerVariants(0.05)}
              src='persons.png'
              alt='persons'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
