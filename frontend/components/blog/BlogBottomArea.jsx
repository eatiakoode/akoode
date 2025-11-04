import React from 'react'

export default function BlogBottomArea() {
  const relatedBlogs = [
    {
      id: 1,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 2,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    },
    {
      id: 3,
      image: "/images/blog/blog1.webp",
      date: "6 August 2024",
      title: "Understanding the importance of iOS app development company in Gurgaon",
      link: "/blog-detail"
    }
  ]

  return (
    <div 
      className="vl-blog-bottom-area border-1 sp2" 
      style={{
        backgroundImage: 'url(/images/frontend-tech/service-bg1.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="heading2 space-margin60 text-center">
              <h2>View More Our Blog</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {relatedBlogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div className="vl-blog-1-item">
                <div className="vl-blog-1-thumb image-anime">
                  <img src={blog.image} alt="image" className="img-fluid" />
                </div>
                <div className="vl-blog-1-content">
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/images/calendar.svg" alt="image" className="img-fluid" /> {blog.date}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space16"></div>
                  <h4 className="vl-blog-1-title">
                    <a href={blog.link}>{blog.title}</a>
                  </h4>
                  <div className="space20"></div>
                  <a href={blog.link} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

