import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/fav-logo1.png" type="image/x-icon" />

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/aos.css" />
          <link rel="stylesheet" href="/css/fontawesome.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/mobile.css" />
          <link rel="stylesheet" href="/css/owlcarousel.min.css" />
          <link rel="stylesheet" href="/css/slick-slider.css" />
          <link rel="stylesheet" href="/css/sidebar.css" />
          <link rel="stylesheet" href="/css/nice-select.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/swiper.min.css" />
          <link rel="stylesheet" href="/css/main.css" />
          <link rel="stylesheet" href="/css/others.css" />
        </Head>
        <body data-scroll-container className="homepage1-body">
          <Main />
          <NextScript />

          <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js" strategy="beforeInteractive" />
          <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
          <Script src="/js/fontawesome.js" strategy="beforeInteractive" />
          <Script src="/js/owlcarousel.min.js" strategy="afterInteractive" />
          <Script src="/js/slick-slider.js" strategy="afterInteractive" />
          <Script src="/js/swiper.min.js" strategy="afterInteractive" />
          <Script src="/js/gsap.min.js" strategy="afterInteractive" />
          <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
          <Script src="/js/Splitetext.js" strategy="afterInteractive" />
          <Script src="/js/aos.js" strategy="afterInteractive" />
          <Script src="/js/particles.min.js" strategy="afterInteractive" />
          <Script src="/js/magnific-popup.js" strategy="afterInteractive" />
          <Script src="/js/nice-select.js" strategy="afterInteractive" />
          <Script src="/js/waypoints.js" strategy="afterInteractive" />
          <Script src="/js/counter.js" strategy="afterInteractive" />
          <Script src="/js/circle-progress.js" strategy="afterInteractive" />
          <Script src="/js/main.js" strategy="afterInteractive" />
          <Script src="/js/home.js" strategy="afterInteractive" />
          <Script src="/js/custom.js" strategy="afterInteractive" />
        </body>
      </Html>
    )
  }
}

export default MyDocument


