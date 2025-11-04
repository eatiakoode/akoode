import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogDetailSection from '../components/blog/BlogDetailSection'
import BlogBottomArea from '../components/blog/BlogBottomArea'

export default function BlogDetail() {
  return (
    <>
      <Head>
        <title>Blog Detail - Akoode | Understanding iOS App Development in Gurgaon</title>
        <meta name="description" content="Learn about the importance of iOS app development company in Gurgaon. Discover features, benefits, and why hiring professional iOS developers is crucial for your business success." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="iOS app development Gurgaon, mobile app development, iOS development company, app development services, Akoode Technology" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/blog-detail" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Blog Detail</h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Blog Detail</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Detail Section - Matches akoodehtml/blog-detail.html */}
      <BlogDetailSection />

      {/* Blog Bottom Area - Matches akoodehtml/blog-detail.html */}
      <BlogBottomArea />

      <Footer />
    </>
  )
}

