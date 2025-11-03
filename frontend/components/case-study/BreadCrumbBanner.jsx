"use client";
import Link from "next/link";

const BreadCrumbBanner = () => {
  return (
    <>
      {/* <!-- Inner Page Breadcrumb --> */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Case <span>Study</span></h1>
                <div className="space28"></div>
                <Link href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Case Study</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbBanner;






