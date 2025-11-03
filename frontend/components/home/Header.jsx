'use client'

import Link from "next/link";
// import { useEffect, useState } from "react";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
// new
 const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const offcanvasRef = useRef(null);

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOffcanvasOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll when offcanvas is open
  useEffect(() => {
    if (offcanvasOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [offcanvasOpen]);
// end new
  return (
    
    <>
    {/* <header
      className={`header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : ""
      }`}
    >
      <div className="container-fluid p0">
       

        <Link href="/" className="navbar_brand float-start dn-smd">
        <Image
            width={170}
            height={65}
            className="logo1 contain"
            src={`${process.env.NEXT_PUBLIC_API_URL}public/assets/images/logo.svg`}
            alt="logo.svg"
          />

          <Image
            width={170}
            height={65}
            className="logo2 contain"
            src="/assets/images/logo2.png"
            alt="logo2.png"
          />
         
        </Link>
        

        <nav>
          <HeaderMenuContent />
        </nav>
        
      </div>
    </header> */}
     <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
            aria-hidden
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
      {/* ===== PROGRESS ENDS ===== */}

      {/* ===== HEADER START ===== */}
      <header>
        <div id="vl-header-sticky" className="vl-header-area vl-transparent-header">
          <div className="container headerfix">
            <div className="row align-items-center row-bg3">
              <div className="col-lg-2 col-md-6 col-6">
                <div className="vl-logo">
                  <Link href="/">
                      <img src="/assets/new_assets/images/logo.svg" alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 d-none">{/* desktop menu placeholder (hidden by default in original) */}
                <div className="vl-main-menu text-center">
                  <nav className="vl-mobile-menu-active">
                    

<ul>
  <li className="has-dropdown">
    <Link href="/">Home</Link>
  </li>

  <li className="has-dropdown">
    <Link href="#">Pages</Link>
    <ul className="sub-menu">
      <li><Link href="/about-us">About Us</Link></li>
      <li><Link href="/contact-us">Contact Us</Link></li>
      <li><Link href="/faqs">FAQ,s</Link></li>
    </ul>
  </li>

  <li>
    <Link href="#">Services</Link>
    <ul className="sub-menu">
      <li>
        <Link href="#">Artificial Intelligence</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">Deep Learning & Data Science</Link></li>
          <li><Link href="#">Integrated Intelligence Services</Link></li>
          <li><Link href="#">Computer Vision Technology Services</Link></li>
          <li><Link href="#">3D and Metaverse - based</Link></li>
          <li><Link href="#">Generative AI Integration Solutions</Link></li>
        </ul>
      </li>

      <li><Link href="#">Digital Transformation</Link></li>

      <li>
        <Link href="#">Software Development</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">Custom Software Development</Link></li>
          <li><Link href="#">Enterprise Solutions</Link></li>
          <li><Link href="#">CRM Solutions</Link></li>
        </ul>
      </li>

      <li>
        <Link href="#">Mobile App Development</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">IOS Development</Link></li>
          <li><Link href="#">Android Development</Link></li>
          <li><Link href="#">Native Development</Link></li>
          <li><Link href="#">Hybrid App Development</Link></li>
        </ul>
      </li>

      <li>
        <Link href="#">Web Development</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">Website Development Technologies</Link></li>
          <li><Link href="#">Custom Website Development</Link></li>
          <li><Link href="#">Dynamic Website Development</Link></li>
          <li><Link href="#">Static Website Development</Link></li>
          <li><Link href="#">Full Stack Website Development</Link></li>
          <li><Link href="#">Ai Powered Website Development</Link></li>
        </ul>
      </li>

      <li>
        <Link href="#">eCommerce Solution</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">Magento Development</Link></li>
          <li><Link href="#">Opencart Development</Link></li>
          <li><Link href="#">Shopify Development</Link></li>
          <li><Link href="#">WooCommerce Development</Link></li>
        </ul>
      </li>

      <li><Link href="#">IOT Development</Link></li>
      <li><Link href="#">BigData & Data Analytics</Link></li>
      <li><Link href="#">Cloud and DevOps</Link></li>
      <li><Link href="#">Blockchain Development</Link></li>

      <li>
        <Link href="#">Staff Augmentation</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">Staff Augmentation Services</Link></li>
        </ul>
      </li>

      <li><Link href="#">360 Degree Digital Marketing</Link></li>
    </ul>
  </li>

  <li>
    <Link href="#">Case Study</Link>
    <ul className="sub-menu">
      <li><Link href="#">Case Study</Link></li>
    </ul>
  </li>

  <li>
    <Link href="#">Blogs</Link>
    <ul className="sub-menu">
      <li>
        <Link href="#" className="span-arrow">Our Blogs</Link>
        <ul className="sub-menu menu1">
          <li><Link href="#">Blog One</Link></li>
          <li><Link href="#">Blog Two</Link></li>
        </ul>
      </li>
    </ul>
  </li>

  <li><Link href="#">Contact</Link></li>
</ul>

                  </nav>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <div className="right-end-wrapper">
                  <div className="txt">
                    <Link href={`tel:9899300017`} className="phone vl-btn1">
                   
                      <i className="fa-solid fa-phone"></i>
                    </Link>
                  </div>

                  <div className="vl-hero-btn d-lg-block text-end">
                    <span className="vl-btn-wrap text-end">
                      <Link href="/post-requirement" className="vl-btn1">
                        Post Requirement <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </span>
                  </div>

                  <div className="vl-header-action-item d-block">
                    <button
                      type="button"
                      aria-expanded={offcanvasOpen}
                      className="vl-offcanvas-toggle"
                      onClick={() => setOffcanvasOpen(true)}
                    >
                      <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===== HEADER END ===== */}

      {/* ===== MOBILE OFFCANVAS START ===== */}
      <div className={`vl-offcanvas ${offcanvasOpen ? "open" : ""}`} ref={offcanvasRef}>
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
            <div className="vl-offcanvas-logo">
              <Link href="/">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle" onClick={() => setOffcanvasOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="menu-text"><div className="text"><h2>Menu</h2></div></div>
              </div>

              <div className="col-lg-7">
                <div className="vl-offcanvas-menu d-block mb-40">
                  <nav>
                    {/* Mobile menu items (you can populate this from props/state if needed) */}
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="vl-offcanvas-info">
                  <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
                  <div className="space20" />
                  <span><a href="tel:+91-9899300017"><span><i className="fa-solid fa-phone"></i></span>+91-9899300017</a></span>
                  <span><a href="#"><span><i className="fa-solid fa-location-dot"></i></span>Tower B4, Spaze iTech Park, UN 616, Sohna - Gurgaon Rd, Block S, Sector 49, Gurugram, Haryana 122018</a></span>
                  <span><a href="mailto:info@akoode.com"><span><i className="fa-solid fa-envelope"></i></span>info@akoode.com</a></span>
                  <span><a href="https://www.akoode.com/"><span><i className="fa-solid fa-globe"></i></span>akoode.com</a></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={`vl-offcanvas-overlay ${offcanvasOpen ? "show" : ""}`} onClick={() => setOffcanvasOpen(false)} />
      {/* ===== MOBILE OFFCANVAS END ===== */}

      <style jsx>{`
        /* small helper styles for offcanvas visibility - adapt to your project's CSS */
        .vl-offcanvas { position: fixed; top: 0; right: -100%; width: 320px; height: 100%; background: #fff; z-index: 9999; transition: right 0.3s ease; }
        .vl-offcanvas.open { right: 0; }
        .vl-offcanvas-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); opacity: 0; pointer-events: none; transition: opacity 0.2s; }
        .vl-offcanvas-overlay.show { opacity: 1; pointer-events: auto; }
      `}</style>
      </>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
