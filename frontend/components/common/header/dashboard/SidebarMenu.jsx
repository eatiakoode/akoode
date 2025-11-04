'use client'

import Link from "next/link";
import { useState } from "react";

import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  
  const pathname = usePathname()

  const myCasestudy = [
    { id: 1, name: "Add Casestudy", route: "/akoodeadmin/add-casestudy" },
    { id: 2, name: "Casestudy List", route: "/akoodeadmin/my-casestudy" }
  ];
  const myServices = [
    { id: 1, name: "Add Services", route: "/akoodeadmin/add-services" },
    { id: 2, name: "Services List", route: "/akoodeadmin/my-services" }
  ];
  const myState = [
    { id: 1, name: "Add State", route: "/akoodeadmin/add-state" },
    { id: 2, name: "State List", route: "/akoodeadmin/my-state" }
  ];
  const myCity = [
    { id: 1, name: "Add City", route: "/akoodeadmin/add-city" },
    { id: 2, name: "City List", route: "/akoodeadmin/my-cities" }
  ];
 
  const myLocation = [
    { id: 1, name: "Add Location", route: "/akoodeadmin/add-location" },
    { id: 2, name: "Location List", route: "/akoodeadmin/my-location" }
  ];
  const myAmenity = [
    { id: 1, name: "Add Amenity", route: "/akoodeadmin/add-amenities" },
    { id: 2, name: "Amenity List", route: "/akoodeadmin/my-amenities" }
  ];
  const myCategory = [
    { id: 1, name: "Add Category", route: "/akoodeadmin/add-category" },
    { id: 2, name: "Category List", route: "/akoodeadmin/my-category" }
  ];
  const myPropertytype = [
    { id: 1, name: "Add Property type", route: "/akoodeadmin/add-propertytype" },
    { id: 2, name: "Property type List", route: "/akoodeadmin/my-propertytype" }
  ];
  const myBuilder = [
    { id: 1, name: "Add Builder", route: "/akoodeadmin/add-builder" },
    { id: 2, name: "Builder List", route: "/akoodeadmin/my-builder" }
  ];
  const myAgent = [
    { id: 1, name: "Add Agent", route: "/akoodeadmin/add-agent" },
    { id: 2, name: "Agent List", route: "/akoodeadmin/my-agent" }
  ];
  const mySeller = [
    { id: 1, name: "Add Seller", route: "/akoodeadmin/add-seller" },
    { id: 2, name: "Seller List", route: "/akoodeadmin/my-seller" }
  ];
  
  
  const myProperties = [
    { id: 1, name: "Add Property", route: "/akoodeadmin/create-listing" },
    { id: 2, name: "Property List", route: "/akoodeadmin/my-properties" }
  ];
  const myBlog = [
    { id: 1, name: "Add Blog category", route: "/akoodeadmin/add-blogcategory" },
    { id: 2, name: "Blog category List", route: "/akoodeadmin/my-blogcategory" },
    { id: 3, name: "Add Blog", route: "/akoodeadmin/add-blog" },
    { id: 4, name: "Blog List", route: "/akoodeadmin/my-blog" },
    
  ];
  const myPropertypage = [
    { id: 1, name: "Add Property page", route: "/akoodeadmin/add-propertypage" },
    { id: 2, name: "Property page List", route: "/akoodeadmin/my-propertypage" }
  ];
  const myTestimonial = [
    { id: 1, name: "Add Testimonial", route: "/akoodeadmin/add-testimonial" },
    { id: 2, name: "Testimonial List", route: "/akoodeadmin/my-testimonial" }
  ];
  
  const myFaq = [
    { id: 1, name: "Add FAQ", route: "/akoodeadmin/add-faq" },
    { id: 2, name: "FAQ List", route: "/akoodeadmin/my-faq" }
  ];
  const myLandingpage = [
    { id: 1, name: "Add Landing page", route: "/akoodeadmin/add-landing" },
    { id: 2, name: "Landing page List", route: "/akoodeadmin/my-landing" }
  ];
  const reviews = [
    { id: 1, name: "My Reviews", route: "/akoodeadmin/my-review" },
    { id: 2, name: "Visitor Reviews", route: "/akoodeadmin/my-review" },
  ];
  const enquerylist = [
    { id: 1, name: "My enquery list", route: "/akoodeadmin/my-enquiry" },
    { id: 2, name: "My job enquery list", route: "/akoodeadmin/my-jobenquiry" },
    // { id: 3, name: "My landing enquery list", route: "/akoodeadmin/my-landingenquiry" },
    // { id: 4, name: "My Subscribe enquery list", route: "/akoodeadmin/my-subscribeenquiry" },
    // { id: 5, name: "My brochure enquery list", route: "/akoodeadmin/my-brochureenquiry" },
  ];
  const manageAccount = [
    {
      id: 1,
      name: "My Package",
      route: "/my-package",
      icon: "flaticon-box",
    },
    {
      id: 2,
      name: "My Profile",
      route: "/my-profile",
      icon: "flaticon-user",
    },
    { id: 3, name: "Logout", route: "/login", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header" >
           <Link href="/akoodeadmin/my-dashboard" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
            <div style={{ 
              width: '200px', 
              height: '70px', 
              // backgroundColor: 'white', 
              // border: '2px solid #3498db', 
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              position: 'relative'
            }}>
              {/* Try to load the logo image */}
              <img
                width={180}
                height={50}
                src="/images/logo.svg"
                alt="Akoode Logo"
                onError={(e) => {
                  console.log('Logo failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'block';
                }}
                onLoad={() => {
                  console.log('Logo loaded successfully');
                  const fallback = document.querySelector('.logo-fallback');
                  if (fallback) fallback.style.display = 'none';
                }}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              />
              {/* Fallback text logo */}
              
            </div>
            
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          {/* <span>Main</span> */}
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-dashboard", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/akoodeadmin/my-dashboard">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </Link>
            </li>
            {/* <li
              className={`treeview ${
                isSinglePageActive("/create-listing", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/create-listing">
                <i className="flaticon-plus"></i>
                <span> Create Listing</span>
              </Link>
            </li> */}
            {/* <li
              className={`treeview ${
                isSinglePageActive("/my-message", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-message">
                <i className="flaticon-envelope"></i>
                <span> Message</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Manage Listings</span>
          <ul>
         
            {/*
            <li
              className={`treeview ${
                isParentPageActive(myState, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-state">
                <i className="flaticon-home"></i> <span>My State</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-state">
                {myState.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={`treeview ${
                isParentPageActive(myCity, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-city">
                <i className="flaticon-home"></i> <span>My Cities</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-city">
                {myCity.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={`treeview ${
                isParentPageActive(myLocation, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-location">
                <i className="flaticon-home"></i> <span>My Location</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-location">
                {myLocation.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={`treeview ${
                isParentPageActive(myAmenity, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-Amenity">
                <i className="flaticon-home"></i> <span>My Amenity</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-Amenity">
                {myAmenity.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            
            <li
              className={`treeview ${
                isParentPageActive(myCategory, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-myCategory">
                <i className="flaticon-home"></i> <span>My Category</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-myCategory">
                {myCategory.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={`treeview ${
                isParentPageActive(myPropertytype, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-propertytype">
                <i className="flaticon-home"></i> <span>My Property type</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-propertytype">
                {myPropertytype.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={`treeview ${
                isParentPageActive(myBuilder, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-builder">
                <i className="flaticon-home"></i> <span>My Builder</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-builder">
                {myBuilder.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* <li
              className={`treeview ${
                isParentPageActive(myAgent, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-agent">
                <i className="flaticon-home"></i> <span>My Agent</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-agent">
                {myAgent.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* <li
              className={`treeview ${
                isParentPageActive(mySeller, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-agent">
                <i className="flaticon-home"></i> <span>My Seller</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-agent">
                {mySeller.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* end properties */}
            {/* <li
              className={`treeview ${
                isParentPageActive(myProperties, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>My Properties</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* end properties */}

            <li
  className={`treeview ${isParentPageActive(myBlog, pathname) ? "active" : ""}`}
  onClick={() => toggleMenu("blog")}
  style={{ cursor: "pointer" }}
>
  <a data-bs-toggle="collapse" href="#my-blog">
    <i className="flaticon-home"></i> <span>My Blog</span>
    <i className={`fa fa-angle-${openMenu === "blog" ? "up" : "down"} pull-right`}></i>
  </a>
  <ul className={`treeview-menu collapse ${openMenu === "blog" ? "show" : ""}`} id="my-blog">
    {myBlog.map((item) => (
      <li key={item.id}>
        <Link href={item.route}>
          <i className="fa fa-circle"></i> {item.name}
        </Link>
      </li>
    ))}
  </ul>
</li>
<li
  className={`treeview ${isParentPageActive(myServices, pathname) ? "active" : ""}`}
  onClick={() => toggleMenu("services")}
  style={{ cursor: "pointer" }}
>
  <a data-bs-toggle="collapse" href="#my-services">
    <i className="flaticon-home"></i> <span>My Services</span>
    <i className={`fa fa-angle-${openMenu === "services" ? "up" : "down"} pull-right`}></i>
  </a>
  <ul className={`treeview-menu collapse ${openMenu === "services" ? "show" : ""}`} id="my-services">
    {myServices.map((item) => (
      <li key={item.id}>
        <Link href={item.route}>
          <i className="fa fa-circle"></i> {item.name}
        </Link>
      </li>
    ))}
  </ul>
</li>
<li
  className={`treeview ${isParentPageActive(myCasestudy, pathname) ? "active" : ""}`}
  onClick={() => toggleMenu("casestudy")}
  style={{ cursor: "pointer" }}
>
  <a data-bs-toggle="collapse" href="#my-casestudy">
    <i className="flaticon-home"></i> <span>My Casestudy</span>
    <i className={`fa fa-angle-${openMenu === "casestudy" ? "up" : "down"} pull-right`}></i>
  </a>
  <ul className={`treeview-menu collapse ${openMenu === "casestudy" ? "show" : ""}`} id="my-casestudy">
    {myCasestudy.map((item) => (
      <li key={item.id}>
        <Link href={item.route}>
          <i className="fa fa-circle"></i> {item.name}
        </Link>
      </li>
    ))}
  </ul>
</li>


            {/* <li
              className={`treeview ${
                isParentPageActive(myTestimonial, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-Testimonial">
                <i className="flaticon-home"></i> <span>My Testimonial</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-Testimonial">
                {myTestimonial.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* end Testimonial */}

            {/* <li
              className={`treeview ${
                isParentPageActive(myPropertypage, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-Propertypage">
                <i className="flaticon-home"></i> <span>My Property page</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-Propertypage">
                {myPropertypage.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* end Propertypage */}
            <li
              className={`treeview ${isParentPageActive(myFaq, pathname) ? "active" : ""}`}
              onClick={() => toggleMenu("faq")}
              style={{ cursor: "pointer" }}
            >
              <a data-bs-toggle="collapse" href="#my-faq">
                <i className="flaticon-home"></i> <span>My FAQ</span>
                <i className={`fa fa-angle-${openMenu === "faq" ? "up" : "down"} pull-right`}></i>
              </a>
              <ul className={`treeview-menu collapse ${openMenu === "faq" ? "show" : ""}`} id="my-faq">
                {myFaq.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            
            {/* end Propertypage */}
            
            <li
               className={`treeview ${isParentPageActive(enquerylist, pathname) ? "active" : ""}`}
               onClick={() => toggleMenu("enquiry")}
               style={{ cursor: "pointer" }}
            >
              <a data-bs-toggle="collapse" href="#my-enquerylist">
                <i className="flaticon-home"></i> <span>My enquery</span>
                <i className={`fa fa-angle-${openMenu === "enquiry" ? "up" : "down"} pull-right`}></i>
              </a>
              <ul className={`treeview-menu collapse ${openMenu === "enquiry" ? "show" : ""}`} id="my-enquerylist">
                {enquerylist.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            

            

            {/* <li
              className={`treeview ${
                isParentPageActive(reviews, pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-chat"></i>
                <span>Reviews</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* End Review */}

            {/* <li
              className={`treeview ${
                isSinglePageActive("/my-favourites", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-favourites">
                <i className="flaticon-magnifying-glass"></i>
                <span> My Favorites</span>
              </Link>
            </li> */}
            {/* <li
              className={`treeview ${
                isSinglePageActive("/my-saved-search", pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-saved-search">
                <i className="flaticon-magnifying-glass"></i>
                <span> Saved Search</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* End manage listing */}

        {/* <li className="title">
          <span>Manage Account</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, pathname) ? "active" : ""
                }
                key={item.id}
              >
                <Link href={item.route}>
                  <i className={item.icon}></i> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li> */}
      </ul>
    </>
  );
};

export default SidebarMenu;
