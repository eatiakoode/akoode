export default function InnerPageHero({ title, subtitle, breadcrumb }) {
  return (
    <div className="inner-page-hero-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="inner-header text-center heading1">
              <h1>{title} {subtitle && <span>{subtitle}</span>}</h1>
              <div className="space28"></div>
              {breadcrumb && (
                <a href={breadcrumb.homeLink || "/"}>
                  {breadcrumb.homeText || "Home"} <i className="fa-solid fa-angle-right"></i> <span>{breadcrumb.currentPage}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
