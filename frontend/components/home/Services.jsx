'use client'; // if using Next.js app directory

import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Services = () => {
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
    items:3,                
  },
  600:{
    items:3,
  },
  1000:{
    items:3,
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
  const services = [
    {
      img: "/assets/new_assets/images/services/artificial-intelligence.svg",
      title: "Artificial Intelligence",
      subtitle: "Transform intelligence into impact.",
      description:
        "Harness bespoke AI solutions to automate, optimize, and amplify every aspect of your business strategy.",
      number: "01",
    },
    {
      img: "/assets/new_assets/images/services/digital-transformation.svg",
      title: "Digital Transformation",
      subtitle: "Reimagine. Reinvent. Rise.",
      description:
        "We architect seamless digital transitions, aligning technology with your long-term business vision.",
      number: "02",
    },
    {
      img: "/assets/new_assets/images/services/software-development.svg",
      title: "Software Development",
      subtitle: "Precision-coded solutions for limitless scalability.",
      description:
        "From agile MVPs to enterprise-grade systems, we develop software that drives real results.",
      number: "03",
    },
    {
      img: "/assets/new_assets/images/services/mobile-app-development.svg",
      title: "Mobile App Development",
      subtitle: "Crafted apps that connect, engage, and convert.",
      description:
        "Native or cross-platform, our mobile apps deliver premium user experiences with cutting-edge performance.",
      number: "04",
    },
    {
      img: "/assets/new_assets/images/services/web-development.svg",
      title: "Web Development",
      subtitle: "Beyond websites—crafted digital experiences.",
      description:
        "We create sleek, scalable, and responsive web platforms that captivate and convert.",
      number: "05",
    },
    {
      img: "/assets/new_assets/images/services/ecommerce.svg",
      title: "eCommerce Solution",
      subtitle: "Accelerate digital retail with intelligence.",
      description:
        "Launch high-performance, conversion-driven stores tailored to scale with your brand.",
      number: "06",
    },
    {
      img: "/assets/new_assets/images/services/iot-development.svg",
      title: "IoT Intelligence Engineering",
      subtitle: "Bridge physical and digital with connected innovation.",
      description:
        "We architect smart IoT systems that sense, respond, and evolve in real time.",
      number: "07",
    },
    {
      img: "/assets/new_assets/images/services/analytics-data.svg",
      title: "BigData & Data Analytics",
      subtitle: "From data chaos to strategic clarity.",
      description:
        "Leverage actionable insights with our enterprise analytics, AI-powered modeling, and intuitive dashboards.",
      number: "08",
    },
    {
      img: "/assets/new_assets/images/services/azuredevops.svg",
      title: "Cloud and DevOps",
      subtitle: "Infinite scalability. Zero friction.",
      description:
        "Streamline deployments and maximize uptime with secure, agile, cloud-native infrastructures.",
      number: "09",
    },
    {
      img: "/assets/new_assets/images/services/blockchain.svg",
      title: "Blockchain Development",
      subtitle: "Decentralized solutions. Immutable trust.",
      description:
        "We build secure, scalable blockchain systems—from smart contracts to full DeFi ecosystems.",
      number: "10",
    },
    {
      img: "/assets/new_assets/images/services/staff-augmentation.svg",
      title: "On-Demand Tech Talent",
      subtitle: "Elite developers. Embedded seamlessly.",
      description:
        "Accelerate delivery with top-tier professionals—dedicated to your mission, on your terms.",
      number: "11",
    },
    {
      img: "/assets/new_assets/images/services/digital-marketing.svg",
      title: "360 Degree Digital Marketing",
      subtitle: "Marketing that moves markets.",
      description:
        "We blend data, design, and creativity to drive measurable growth across digital ecosystems.",
      number: "12",
    },
  ];
  return (
    <>
   <div className="service-widget  ">
    <div className="service-slider-boxarea">
        <div className="row owl-carousel" ref={carouselRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="full-width"
              data-aos="zoom-in"
              data-aos-duration={800 + index * 100}
            >
              <div className="service1-boxarea">
                <div className="icons">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="img-fluid"
                  />
                </div>
                <div className="arrow">
                  <Link href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="space24" />
                <Link href="#">{service.title}</Link>
                <div className="space16" />
                <h6>{service.subtitle}</h6>
                <div className="space16" />
                <p>{service.description}</p>
                <div className="space24" />
                <h5>{service.number}</h5>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
</>
  );
};

export default Services;
