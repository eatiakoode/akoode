
export const metadata = {  
  title: 'Akoode',  
  description: 'Akoode digital solutions',
};
export default function RootLayout({ children }) {  
  return (
        <html lang="en">      
        <body>{children}</body>    
        </html>  
      );
    }