'use client';

import React, { useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navStyles, setNavStyles] = useState('');
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.2) {
      setNavStyles('sticky');
    } else {
      setNavStyles('');
    }
  });

  return (
    <div className={`n-wrapper ${navStyles}`}>
      <div className='container'>
        <div className='n-container'>
          {/* left side */}
          <div className='n-logo'>
            <span>DIGIBIZZ</span>
          </div>
          {/* right side */}
          <div className='n-right'>
            <div className='n-menu'>
              <Link to='wwd-wrapper' spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to='hiw-wrapper' spy={true} smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to='wwi-wrapper' spy smooth>
                <span>Who we invest in</span>
              </Link>
              <Link to='t-wrapper' spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className='fund-button'>get funded</div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className='nm-container'>
        {/* logo */}
        <span>DIGIBIZZ</span>
        {/* menu icon */}
        {!mobileMenu ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenu(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenu(false)} />
        )}
        {/* menu */}
        <div
          className='nm-menu'
          style={{ transform: mobileMenu && 'translateX(0%)' }}
        >
          <Link
            onClick={() => setMobileMenu(false)}
            to='wwd-wrapper'
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            onClick={() => setMobileMenu(false)}
            to='hiw-wrapper'
            spy
            smooth
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenu(false)}
            to='wwi-wrapper'
            spy
            smooth
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            onClick={() => setMobileMenu(false)}
            to='t-wrapper'
            spy
            smooth
            offset={100}
          >
            <span>Testimonials</span>
          </Link>
          <div className='m-funded-btn'>get funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
