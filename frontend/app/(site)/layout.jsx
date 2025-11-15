import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';

export const metadata = {
  title: 'Akoode',
  description: 'Akoode digital solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <link rel="shortcut icon" href="/images/fav-logo1.png" type="image/x-icon" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/mobile.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/others.css" />
        <link rel="stylesheet" href="/css/owlcarousel.min.css" />
        <link rel="stylesheet" href="/css/sidebar.css" />
        <link rel="stylesheet" href="/css/slick-slider.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
      </head>
      <body data-scroll-container className="homepage1-body">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/fontawesome.js" strategy="afterInteractive" />
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
        <Script id="hydration-bridge" strategy="afterInteractive">
          {`
            (function () {
              if (typeof window === 'undefined') return;
              if (!window.__NEXT_HYDRATED) {
                window.__NEXT_HYDRATED = true;
                window.dispatchEvent(new Event('next-hydrated'));
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
