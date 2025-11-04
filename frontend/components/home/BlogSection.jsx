export default function BlogSection({ bloglist = [] }) {
  // Ensure bloglist is an array and has data
  const safeBloglist = Array.isArray(bloglist) ? bloglist : [];
  
  return (
    <>
      
      <div className="vl-blog-4-area-inner sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="vl-blog-1-section-box heading2 text-center space-margin60">
                <h5 className="vl-section-subtitle"><span><img src="/images/sub-logo1.svg" alt="" /></span>Blogs</h5>
                <div className="space20"></div>
                <h2 className="vl-section-title text-anime-style-3">Insights, ideas, and expertise—straight from our team</h2>
              </div>
            </div>
          </div>
          <div className="row">
        {safeBloglist.length > 0 ? (
          safeBloglist.slice(0, 4).map((item, index) => {
            // Add safety checks for each item
            if (!item) return null;
            
            return (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="vl-blog-1-item">
                <div className="vl-blog-1-thumb image-anime">
                  <img 
                    src={item.logoimage ? `${process.env.NEXT_PUBLIC_API_URL}${item.logoimage}` : '/images/blog/blog1.webp'} 
                    alt={item.title || 'Blog image'} 
                    className="img-fluid" 
                  />
                </div>
                <div className="vl-blog-1-content">
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/images/calendar.svg" alt="image" className="img-fluid" /> 
                          {item.date ? new Date(item.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                          }) : 'Recent'}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space16"></div>
                  <h4 className="vl-blog-1-title">
                    <a href={`/blog-detail/${item.slug || '#'}`}>
                      {item.title || 'Blog Title'}
                    </a>
                  </h4>
                  <div className="space20"></div>
                  <a href={`/blog-detail/${item.slug || '#'}`} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            );
          })
        ) : (
          // Fallback content when no blogs are available
          <div className="col-lg-12">
            <div className="text-center">
              <p>No blogs available at the moment.</p>
            </div>
          </div>
        )}

          {/* <div className="col-lg-4 col-md-6">
            <div className="vl-blog-1-item">
              <div className="vl-blog-1-thumb image-anime">
                <img src="/images/blog/blog2.webp" alt="image" className="img-fluid" />
              </div>
              <div className="vl-blog-1-content">
                <div className="vl-blog-meta">
                  <ul>
                    <li><a href="#"><img src="/images/calendar.svg" alt="image" className="img-fluid" /> 6 August 2024</a></li>
                  </ul>
                </div>
                <div className="space16"></div>
                <h4 className="vl-blog-1-title"><a href="blog-detail.html">Guide to connecting with an Android app development company in Gurgaon Introduction</a></h4>
                <div className="space20"></div>
                <a href="blog-detail.html" className="readmore">Learn More <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6">
            <div className="vl-blog-1-item">
              <div className="vl-blog-1-thumb image-anime">
                <img src="/images/blog/blog2.webp" alt="image" className="img-fluid" />
              </div>
              <div className="vl-blog-1-content">
                <div className="vl-blog-meta">
                  <ul>
                    <li><a href="#"><img src="/images/calendar.svg" alt="image" className="img-fluid" /> 6 August 2024</a></li>
                  </ul>
                </div>
                <div className="space16"></div>
                <h4 className="vl-blog-1-title"><a href="blog-detail.html">What Services and Features Do the Top Firms for Developing Mobile Apps Offer?</a></h4>
                <div className="space20"></div>
                <a href="blog-detail.html" className="readmore">Learn More <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div> */}
          
          <div className="col-lg-12">
            <div className="space18"></div>
            <div className="btn-area1 text-center">
              <a href="/blogs" className="vl-btn2">Read More Blog And News <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
