"use client";
import Link from "next/link";
import Image from "next/image";

const CaseStudyContent = () => {
  const caseStudies = [
    {
      id: 1,
      image: "/images/case-studies/mullen.webp",
      logo: "/images/case-study/mullen-logo.png",
      title: "Mullen",
      description: "Your trusted partner for industrial process solutions"
    },
    {
      id: 2,
      image: "/images/case-studies/dapper-doughnuts.webp",
      logo: "/images/case-study/dapper.webp",
      title: "Dapper Doughnuts",
      description: "Always made fresh to order"
    },
    {
      id: 3,
      image: "/images/case-studies/sarita-handa.webp",
      logo: "/images/case-study/sarita-handa.svg",
      title: "Sarita Handa",
      description: "Bespoke craftsmanship meets new-age technology"
    },
    {
      id: 4,
      image: "/images/case-studies/patton.webp",
      logo: "/images/case-study/patton.png",
      title: "Patton",
      description: "Datacom, Networking & Communications product company (OEM)"
    }
  ];

  return (
    <>
      {/* <!-- Case Study Area --> */}
      <div className="case-inner-area sp1">
        <div className="container">
          <div className="row">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="col-lg-6 col-md-6">
                <div className="case-slider-boxarea">
                  <div className="img1 image-anime">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-area">
                    <Link href="#" className="logo-box">
                      <Image
                        src={caseStudy.logo}
                        alt={caseStudy.title}
                        width={120}
                        height={60}
                        className="img-fluid"
                      />
                    </Link>
                    <div className="space16"></div>
                    <p>{caseStudy.description}</p>
                    <div className="arrow">
                      <Link href="/casestudy-detail">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="col-lg-12">
              <div className="space30"></div>
              <div className="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" href="#" aria-label="Previous">
                        <i className="fa-solid fa-angle-left"></i>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" href="#">1</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">2</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">3</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">...</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">12</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link m-0" href="#" aria-label="Next">
                        <i className="fa-solid fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyContent;






