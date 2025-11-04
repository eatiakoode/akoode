'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    // Handle progress SVG path animation
    const progressPath = document.querySelector('.progress-wrap path')
    let pathLength = 0
    
    if (progressPath) {
      pathLength = progressPath.getTotalLength()
      progressPath.style.transition = 'none'
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`
      progressPath.style.strokeDashoffset = String(pathLength)
      progressPath.getBoundingClientRect()
      progressPath.style.transition = 'stroke-dashoffset 10ms linear'
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop >= 100)
      setShowProgress(scrollTop > 50)
      
      // Update progress path
      if (progressPath && pathLength) {
        const height = document.documentElement.scrollHeight - window.innerHeight
        const progress = pathLength - (scrollTop * pathLength) / height
        progressPath.style.strokeDashoffset = String(progress)
      }
    }

    // Handle scroll to top click
    const progressWrap = document.querySelector('.progress-wrap')
    const scrollToTop = (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    if (progressWrap) {
      progressWrap.addEventListener('click', scrollToTop)
    }

    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (progressWrap) {
        progressWrap.removeEventListener('click', scrollToTop)
      }
    }
  }, [])

  useEffect(() => {
    // Add menu close buttons to submenu items
    const offcanvasMenu = document.querySelector('.vl-offcanvas-menu nav')
    if (offcanvasMenu) {
      const subMenus = offcanvasMenu.querySelectorAll('.sub-menu, .vl-mega-menu')
      subMenus.forEach(subMenu => {
        const parent = subMenu.parentElement
        if (parent && !parent.querySelector('.vl-menu-close')) {
          const closeButton = document.createElement('button')
          closeButton.className = 'vl-menu-close'
          closeButton.innerHTML = '<i class="fas fa-chevron-right"></i>'
          closeButton.addEventListener('click', (e) => {
            e.preventDefault()
            if (!parent.classList.contains('active')) {
              parent.classList.add('active')
              subMenu.style.display = 'block'
            } else {
              subMenu.style.display = 'none'
              parent.classList.remove('active')
            }
          })
          parent.appendChild(closeButton)
        }
      })
    }

    // Offcanvas toggle handlers
    const offcanvasToggle = document.querySelector('.vl-offcanvas-toggle')
    const offcanvas = document.querySelector('.vl-offcanvas')
    const offcanvasOverlay = document.querySelector('.vl-offcanvas-overlay')
    const offcanvasClose = document.querySelector('.vl-offcanvas-close-toggle')

    const openOffcanvas = () => {
      offcanvas?.classList.add('vl-offcanvas-open')
      offcanvasOverlay?.classList.add('vl-offcanvas-overlay-open')
    }

    const closeOffcanvas = () => {
      offcanvas?.classList.remove('vl-offcanvas-open')
      offcanvasOverlay?.classList.remove('vl-offcanvas-overlay-open')
    }

    offcanvasToggle?.addEventListener('click', openOffcanvas)
    offcanvasClose?.addEventListener('click', closeOffcanvas)
    offcanvasOverlay?.addEventListener('click', closeOffcanvas)

    return () => {
      offcanvasToggle?.removeEventListener('click', openOffcanvas)
      offcanvasClose?.removeEventListener('click', closeOffcanvas)
      offcanvasOverlay?.removeEventListener('click', closeOffcanvas)
    }
  }, [])

  return (
    <>
      <div className="paginacontainer">
        <div className={`progress-wrap ${showProgress ? 'active-progress' : ''}`}>
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>

      <header>
        <div id="vl-header-sticky" className={`vl-header-area vl-transparent-header ${isSticky ? 'header-sticky' : ''}`}>
          <div className="container headerfix">
            <div className="row align-items-center row-bg3">
              <div className="col-lg-2 col-md-6 col-6">
                <div className="vl-logo">
                  <a href="/"><img src="/images/logo.svg" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-6 d-none">
                <div className="vl-main-menu text-center">
                  <nav className="vl-mobile-menu-active">
                    <ul>
                      <li className="has-dropdown">
                        <a href="/">Home</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/artificial-intelligence">Artificial Intelligence</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/deep-learning-and-data-science">Deep Learning & Data Science</a></li>
                              <li><a href="/integrated-intelligence-services">Integrated Intelligence Services</a></li>
                              <li><a href="/computer-vision-technology">Computer Vision Technology Services</a></li>
                              <li><a href="/3d-and-metaverse-based">3D and Metaverse - based</a></li>
                              <li><a href="/pioneering-generative-ai-integration">Generative AI Integration Solutions</a></li>
                            </ul>
                          </li>
                          <li><a href="javascript:void(0)">Digital Transformation</a></li>
                          <li>
                            <a href="/software-development">Software Development</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/end-to-end-tailored-software-solutions">End-to-end tailored software solutions</a></li>
                              <li><a href="/enterprise-application-development">Enterprise application development</a></li>
                              <li><a href="/saas-product-development">SaaS product development</a></li>
                              <li><a href="/mvp-development-for-startups">MVP development for startups</a></li>
                              <li><a href="/cross-platform-software-solutions">Cross-platform software solutions</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Mobile App Development</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/ios-app-development">IOS Development</a></li>
                              <li><a href="/android-app-development">Android Development</a></li>
                              <li><a href="/native-app-development">Native Development</a></li>
                              <li><a href="/hybrid-app-development">Hybrid App Development</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Web Development</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/web-development-technology">Website Development Technologies</a></li>
                              <li><a href="/custom-website-development">Custom Website Development</a></li>
                              <li><a href="/dynamic-website-development">Dynamic Website Development</a></li>
                              <li><a href="/static-website-development">Static Website Development</a></li>
                              <li><a href="/full-stack-website-development">Full Stack Website Development</a></li>
                              <li><a href="/ai-powered-website-development">Ai Powered Website Development</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">eCommerce Solution</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/magento-development-company-india">Magento Development</a></li>
                              <li><a href="/opencart-development-company-india">Opencart Development</a></li>
                              <li><a href="/shopify-development-company-india">Shopify Development</a></li>
                              <li><a href="/woocommerce-development-company-india">WooCommerce Development</a></li>
                            </ul>
                          </li>
                          <li><a href="javascript:void(0)">IOT Development</a></li>
                          <li><a href="javascript:void(0)">BigData & Data Analytics</a></li>
                          <li><a href="javascript:void(0)">Cloud and DevOps</a></li>
                          <li><a href="javascript:void(0)">Blockchain Development</a></li>
                          <li><a href="/staff-augmentation-services">Staff Augmentation Services</a></li>
                          <li><a href="javascript:void(0)">360 Degree Digital Marketing</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">Case Study</a>
                      </li>
                      <li>
                        <a href="/blog">Blogs</a>
                      </li>
                      <li><a href="/contactus">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6">
                <div className="right-end-wrapper">
                  <div className="txt">
                    <a href="tel:9899300017" className="phone vl-btn1"><i className="fa-solid fa-phone"></i></a>
                  </div>
                  <div className="vl-hero-btn d-lg-block text-end">
                    <span className="vl-btn-wrap text-end">
                      <a href="/post-requirement" className="vl-btn1">Post Requirement <i className="fa-solid fa-arrow-right"></i></a>
                    </span>
                  </div>
                  <div className="vl-header-action-item d-block">
                    <button type="button" className="vl-offcanvas-toggle">
                      <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="vl-offcanvas">
        <div className="vl-offcanvas-wrapper">
          <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
            <div className="vl-offcanvas-logo">
              <a href="/"><img src="/images/logo.svg" alt="" /></a>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle"><i className="fa-solid fa-xmark"></i></button>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="menu-text">
                  <div className="text">
                    <h2>Menu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="vl-offcanvas-menu d-block mb-40">
                  <nav>
                    <ul>
                      <li className="has-dropdown">
                        <a href="/">Home</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/artificial-intelligence">Artificial Intelligence</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/deep-learning-and-data-science">Deep Learning & Data Science</a></li>
                              <li><a href="/integrated-intelligence-services">Integrated Intelligence Services</a></li>
                              <li><a href="/computer-vision-technology">Computer Vision Technology Services</a></li>
                              <li><a href="/3d-and-metaverse-based">3D and Metaverse - based</a></li>
                              <li><a href="/pioneering-generative-ai-integration">Generative AI Integration Solutions</a></li>
                            </ul>
                          </li>
                          <li><a href="javascript:void(0)">Digital Transformation</a></li>
                          <li>
                            <a href="/software-development">Software Development</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/end-to-end-tailored-software-solutions">End-to-end tailored software solutions</a></li>
                              <li><a href="/enterprise-application-development">Enterprise application development</a></li>
                              <li><a href="/saas-product-development">SaaS product development</a></li>
                              <li><a href="/mvp-development-for-startups">MVP development for startups</a></li>
                              <li><a href="/cross-platform-software-solutions">Cross-platform software solutions</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Mobile App Development</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/ios-app-development">IOS Development</a></li>
                              <li><a href="/android-app-development">Android Development</a></li>
                              <li><a href="/native-app-development">Native Development</a></li>
                              <li><a href="/hybrid-app-development">Hybrid App Development</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Web Development</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/web-development-technology">Website Development Technologies</a></li>
                              <li><a href="/custom-website-development">Custom Website Development</a></li>
                              <li><a href="/dynamic-website-development">Dynamic Website Development</a></li>
                              <li><a href="/static-website-development">Static Website Development</a></li>
                              <li><a href="/full-stack-website-development">Full Stack Website Development</a></li>
                              <li><a href="/ai-powered-website-development">Ai Powered Website Development</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">eCommerce Solution</a>
                            <ul className="sub-menu menu1">
                              <li><a href="/magento-development-company-india">Magento Development</a></li>
                              <li><a href="/opencart-development-company-india">Opencart Development</a></li>
                              <li><a href="/shopify-development-company-india">Shopify Development</a></li>
                              <li><a href="/woocommerce-development-company-india">WooCommerce Development</a></li>
                            </ul>
                          </li>
                          <li><a href="javascript:void(0)">IOT Development</a></li>
                          <li><a href="javascript:void(0)">BigData & Data Analytics</a></li>
                          <li><a href="javascript:void(0)">Cloud and DevOps</a></li>
                          <li><a href="javascript:void(0)">Blockchain Development</a></li>
                          <li><a href="/staff-augmentation-services">Staff Augmentation Services</a></li>
                          <li><a href="javascript:void(0)">360 Degree Digital Marketing</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">Case Study</a>
                      </li>
                      <li>
                        <a href="/blog">Blogs</a>
                      </li>
                      <li><a href="/contactus">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="vl-offcanvas-info">
                  <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
                  <div className="space20"></div>
                  <div className="d-flex">
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
      </div>
      <div className="vl-offcanvas-overlay"></div>
    </>
  )
}

