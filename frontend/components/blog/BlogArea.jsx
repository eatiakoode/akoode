import React from 'react'

export default function BlogArea() {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 2,
      image: "/images/blog/blog2.webp",
      date: "6 August 2024",
      title: "Guide to connecting with an Android app development company in Gurgaon Introduction",
      link: "/blog-detail"
    },
    {
      id: 3,
      image: "/images/blog/blog2.webp",
      date: "6 August 2024",
      title: "What Services and Features Do the Top Firms for Developing Mobile Apps Offer?",
      link: "/blog-detail"
    },
    {
      id: 4,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 5,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 6,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 7,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 8,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 9,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    }
  ]

  return (
    <div className="vl-blog-4-area-inner sp1">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="vl-blog-1-item">
                <div className="vl-blog-1-thumb image-anime">
                  <img src={post.image} alt="image" className="img-fluid" />
                </div>
                <div className="vl-blog-1-content">
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/images/calendar.svg" alt="image" className="img-fluid" /> {post.date}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space16"></div>
                  <h4 className="vl-blog-1-title">
                    <a href={post.link}>{post.title}</a>
                  </h4>
                  <div className="space20"></div>
                  <a href={post.link} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
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
                    <a className="page-link" href="#" aria-label="Previous">
                      <i className="fa-solid fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">...</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">12</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link m-0" href="#" aria-label="Next">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
