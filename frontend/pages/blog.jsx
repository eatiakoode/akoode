import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogArea from '../components/blog/BlogArea'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Akoode | Latest Technology Insights and News</title>
        <meta name="description" content="Read the latest blog posts from Akoode covering AI, software development, mobile apps, web development, and technology trends. Stay updated with industry insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="akoode blog, technology blog, AI blog, software development blog, mobile app development blog, web development blog" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/blog" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Blog</h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Blog</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Area - Matches akoodehtml/blog.html */}
      <BlogArea />

      <Footer />
    </>
  )
}
