'use client'; // if using Next.js app directory

import { useEffect, useRef } from 'react';
import Image from "next/image";
import HeroFilter from "./HeroFilter";
import Link from "next/link";
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Hero = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Ensure jQuery is global for Owl Carousel
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery = $;
      require('owl.carousel'); // require instead of import (runs only in browser)
    }

    if (carouselRef.current) {
      $(carouselRef.current).owlCarousel({
        loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:20000,
  responsiveClass:true,
  responsive:{
  0:{
    items:1,                
  },
  600:{
    items:1,
  },
  1000:{
    items:1,
  }
  }
      });
    }
  }, []);
  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const particlesJS = require('particles.js');

      window.particlesJS.load('particles-js', '/particles.json', function () {
        console.log('Particles.js config loaded');
      });
    }
  }, []);
  return (
    <>
    <div className="hero-section-wrapper">
      <div className="hero-widget owl-carousel" ref={carouselRef}>
        
        {/* Slide 1 */}
        <div className="hero-slider-boxarea">
          <div className="img1 image-anime">
            <img src="/assets/new_assets/images/roboai/slide-1.png" alt="image" className="img-fluid" />
          </div>
          <div className="container">
            <div className="hero1-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <span>
                  <img src="/assets/new_assets/images/sub-logo1.svg" alt="image" className="img-fluid" />
                </span>
                Your dream project, crafted to perfection
              </h5>
              <div className="space16"></div>
              <h1 className="text-anime-style-3">
                Harness the Full Potential of Artificial Intelligence
              </h1>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                To Transform Your Business, Supercharge Productivity, and Stay Ahead in an Ever-Evolving World.
              </p>
              <div className="space32"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="800">
                <Link href="/contact" className="vl-btn1">
                  Explore AI Solutions Today <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                  <span><i className="fa-solid fa-play"></i></span>Testimony
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-slider-boxarea">
          <div className="img1 image-anime">
            <img src="/assets/new_assets/images/roboai/slide-2.png" alt="image" className="img-fluid" />
          </div>
          <div className="container">
            <div className="hero1-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <span>
                  <img src="/assets/new_assets/images/sub-logo1.svg" alt="image" className="img-fluid" />
                </span>
                Innovating tomorrow’s solutions today
              </h5>
              <div className="space16"></div>
              <h1 className="text-anime-style-3">
                Step Into the Future with AI Solutions
              </h1>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                That Don’t Just Adapt to Change—They Drive It. Unlock Growth, Innovate Faster, and Dominate Your Industry.
              </p>
              <div className="space32"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="800">
                <Link href="/contact" className="vl-btn1">
                  Request Your Free AI Consultation <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                  <span><i className="fa-solid fa-play"></i></span>Testimony
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slider-boxarea">
          <div className="img1 image-anime">
            <img src="/assets/new_assets/images/roboai/slide-3.png" alt="image" className="img-fluid" />
          </div>
          <div className="container">
            <div className="hero1-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <span>
                  <img src="/assets/new_assets/images/sub-logo1.svg" alt="image" className="img-fluid" />
                </span>
                Imagine It, We'll Bring It to Life
              </h5>
              <div className="space16"></div>
              <h1 className="text-anime-style-3">
                From Data to Decisions, We Build Smarter Systems
              </h1>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                That Think, Learn, and Act. Empower Your Business to Solve Complex Problems with Precision and Speed.
              </p>
              <div className="space32"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="800">
                <Link href="/contact" className="vl-btn1">
                  Get a Tailored AI Strategy <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                  <span><i className="fa-solid fa-play"></i></span>Testimony
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div
      id="particles-js"
      
    />
    
    </div>
</>
  );
};

export default Hero;
