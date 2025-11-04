import React from 'react';
import Link from 'next/link';

export default function InnerPageHero({ title, subtitle, breadcrumb }) {
  return (
    <div className="inner-page-hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="inner-header text-center heading1">
              <h1>{title} <span>{subtitle}</span></h1>
              <div className="space28"></div>
              {breadcrumb && (
                <Link href={breadcrumb.homeLink}>
                  {breadcrumb.homeText} <i className="fa-solid fa-angle-right"></i> 
                </Link>
              )}
              {breadcrumb && <span>{breadcrumb.currentPage}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
