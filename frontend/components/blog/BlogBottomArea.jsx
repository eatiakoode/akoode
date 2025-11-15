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

export default function BlogBottomArea({ blogs = [] }) {
  const items = Array.isArray(blogs) ? blogs.slice(0, 3) : [];

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className="vl-blog-bottom-area border-1 sp2"
      style={{
        // backgroundImage: 'url(/images/frontend-tech/service-bg1.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
          {items.map((blog) => {
            const rawImage =
              blog.logoimage ||
              (Array.isArray(blog.images) && blog.images.length > 0 && blog.images[0]) ||
              (typeof blog.image === 'string' ? blog.image : null);
            const imageUrl = resolveImageUrl(rawImage) || '/images/blog/blog1.webp';
            const slug = blog.slug || blog._id || '#';

            return (
              <div key={blog._id ?? blog.slug ?? blog.id} className="col-lg-4 col-md-6">
                <div className="vl-blog-1-item">
                  <div className="vl-blog-1-thumb image-anime">
                    <img src={imageUrl} alt={blog.title || 'Blog image'} className="img-fluid" />
                  </div>
                  <div className="vl-blog-1-content">
                    <div className="vl-blog-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="/images/calendar.svg" alt="image" className="img-fluid" />{' '}
                            {formatBlogDate(blog.date || blog.publishedOn || blog.createdAt)}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space16"></div>
                    <h4 className="vl-blog-1-title">
                      <Link href={`/blog-detail/${slug}`}>{blog.title || 'Blog Title'}</Link>
                    </h4>
                    <div className="space20"></div>
                    <Link href={`/blog-detail/${slug}`} className="readmore">
                      Learn More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

