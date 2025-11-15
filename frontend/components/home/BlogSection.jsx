
'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import resolveImageUrl from '@/utils/resolveImageUrl';

const formatBlogDate = (value) => {
  const parsed = value ? new Date(value) : null;
  if (!parsed || Number.isNaN(parsed.getTime())) return 'Recent';
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

export default function BlogSection({ bloglist }) {
  const [fetchedBlogs, setFetchedBlogs] = useState(
    Array.isArray(bloglist) ? bloglist : []
  );
  const [isLoading, setIsLoading] = useState(
    !Array.isArray(bloglist) || bloglist.length === 0
  );

  useEffect(() => {
    const hasInitialData = Array.isArray(bloglist) && bloglist.length > 0;
    if (hasInitialData) return;

    let isMounted = true;

    async function loadBlogs() {
      setIsLoading(true);
      try {
        const endpoint = `${process.env.NEXT_PUBLIC_FRONTEND_API_URL ?? ''}api/blog/list?page=1&limit=3`;
        const response = await fetch(endpoint, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
        const data = await response.json();
        if (isMounted) {
          // Handle both new paginated format and old array format
          const blogs = data?.blogs || (Array.isArray(data) ? data : []);
          setFetchedBlogs(blogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        if (isMounted) {
          setFetchedBlogs([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, [bloglist]);

  const blogsToRender = useMemo(() => {
    if (Array.isArray(bloglist) && bloglist.length > 0) {
      return bloglist;
    }
    return fetchedBlogs;
  }, [bloglist, fetchedBlogs]);

  const hasBlogs = Array.isArray(blogsToRender) && blogsToRender.length > 0;

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
            {isLoading && (
              <div className="col-lg-12">
                <div className="text-center">
                  <p>Loading latest blogs…</p>
                </div>
              </div>
            )}
        {!isLoading && hasBlogs ? (
          blogsToRender.map((item, index) => {
            if (!item) return null;
            const rawImage =
              item.logoimage ||
              (Array.isArray(item.images) && item.images.length > 0 && item.images[0]) ||
              (typeof item.image === 'string' ? item.image : null);
            const imageUrl = resolveImageUrl(rawImage) || '/images/blog/blog1.webp';
            const slug = item.slug || item._id || '#';

            return (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="vl-blog-1-item">
                <div className="vl-blog-1-thumb image-anime">
                  <img
                    src={imageUrl}
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
                          {formatBlogDate(item.date || item.publishedOn || item.createdAt)}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space16"></div>
                  <h4 className="vl-blog-1-title">
                    <Link href={`/blog-detail/${slug}`}>
                      {item.title || 'Blog Title'}
                    </Link>
                  </h4>
                  <div className="space20"></div>
                  <Link href={`/blog-detail/${slug}`} className="readmore">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            );
          })
        ) : null}
        {!isLoading && !hasBlogs && (
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
              <Link href="/blog" className="vl-btn2">Read More Blog And News <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
