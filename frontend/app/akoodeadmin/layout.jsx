import Head from 'next/head'

export default function AdminLayout({ children }) {
  return (
    <>
      <Head>
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
        <link rel="stylesheet" href="/admin/css/main.css" />
        <link rel="stylesheet" href="/admin/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/admin/css/fontawesome.css" />
        <link rel="stylesheet" href="/admin/css/sidebar.css" />
      </Head>
      {children}
    </>
  )
}
