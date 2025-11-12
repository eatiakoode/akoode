import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'AkoodeNext Admin',
  description: 'AkoodeNext Admin Panel',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/admin/css/akoode/bootstrap.min.css" />
        <link rel="stylesheet" href="/admin/css/akoode/fontawesome.css" />
        <link rel="stylesheet" href="/admin/css/akoode/main.css" />
        <link rel="stylesheet" href="/admin/css/akoode/mobile.css" />
        <link rel="stylesheet" href="/admin/css/akoode/others.css" />
        <link rel="stylesheet" href="/admin/css/akoode/sidebar.css" />
        <link rel="stylesheet" href="/admin/css/main.css" />
        <link rel="stylesheet" href="/admin/css/flaticon.css" />
        <link rel="stylesheet" href="/admin/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/admin/css/responsive.css" />
        <link rel="stylesheet" href="/admin/css/dashbord_navitaion.css" />
        <link rel="stylesheet" href="/admin/css/menu.css" />
        <link rel="stylesheet" href="/admin/css/megadropdown.css" />
        <link rel="stylesheet" href="/admin/css/ace-responsive-menu.css" />
        <link rel="stylesheet" href="/admin/css/font-awesome-animation.min.css" />
      </head>
      <body>
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
      </body>
    </html>
  )
}