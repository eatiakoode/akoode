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

const generatePageNumbers = (currentPage, totalPages) => {
  const pages = [];
  const maxVisible = 5;

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    }
  }

  return pages;
};

export default function BlogArea({ blogs = [], pagination = null, currentPage = 1 }) {
  const hasData = Array.isArray(blogs) && blogs.length > 0;
  const totalPages = pagination?.totalPages || 1;
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div className="vl-blog-4-area-inner sp1">
      <div className="container">
        <div className="row">
          {hasData ? (
            blogs.map((post) => {
              const rawImage =
                post.logoimage ||
                (Array.isArray(post.images) && post.images.length > 0 && post.images[0]) ||
                (typeof post.image === 'string' ? post.image : null);
              const imageUrl = resolveImageUrl(rawImage) || '/images/blog/blog1.webp';
              const slug = post.slug || post._id || '#';
              return (
                <div key={post._id ?? post.slug ?? post.id} className="col-lg-4 col-md-6">
                  <div className="vl-blog-1-item">
                    <div className="vl-blog-1-thumb image-anime">
                      <img src={imageUrl} alt={post.title || 'Blog image'} className="img-fluid" />
                    </div>
                    <div className="vl-blog-1-content">
                      <div className="vl-blog-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <img src="/images/calendar.svg" alt="image" className="img-fluid" />{' '}
                              {formatBlogDate(post.date || post.publishedOn || post.createdAt)}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="space16"></div>
                      <h4 className="vl-blog-1-title">
                        <Link href={`/blog-detail/${slug}`}>{post.title || 'Blog Title'}</Link>
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
          ) : (
            <div className="col-lg-12">
              <div className="text-center">
                <p>No blogs available at the moment.</p>
              </div>
            </div>
          )}

          {totalPages > 1 && (
            <div className="col-lg-12">
              <div className="space30"></div>
              <div className="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link
                        className={`page-link ${!pagination?.hasPrev ? 'disabled' : ''}`}
                        href={pagination?.hasPrev ? `/blog?page=${currentPage - 1}` : '#'}
                        aria-label="Previous"
                      >
                        <i className="fa-solid fa-angle-left"></i>
                      </Link>
                    </li>
                    {pageNumbers.map((pageNum, index) => {
                      if (pageNum === 'ellipsis') {
                        return (
                          <li key={`ellipsis-${index}`} className="page-item">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                      return (
                        <li key={pageNum} className="page-item">
                          <Link
                            className={`page-link ${pageNum === currentPage ? 'active' : ''}`}
                            href={`/blog?page=${pageNum}`}
                          >
                            {pageNum}
                          </Link>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <Link
                        className={`page-link m-0 ${!pagination?.hasNext ? 'disabled' : ''}`}
                        href={pagination?.hasNext ? `/blog?page=${currentPage + 1}` : '#'}
                        aria-label="Next"
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
