import "bootstrap/dist/css/bootstrap.css";
import './globals.css'
import { Inter } from 'next/font/google';
import Header from '../components/Header';
/**
 * Renders a RootLayout component with children
 * @param {Object} props - The props object containing the children prop
 * @param {React.ReactNode} props.children - The children to render inside the body tag
 * @returns {JSX.Element} - The RootLayout component
 */

const inter = Inter({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'], 

})

export const metadata = {
  title: 'Ekip Kalir Portfolio and GitHub Activity Page',
  description: 'Personal portfolio and GitHub activity page',
  author: 'Ekip Kalir',
  siteUrl: 'https://ekipkalir.com',
  twitterUsername: '@ekipkalir',
  ogImage: 'https://ekipkalir.com/og-image.png',
  keywords: ['Ekip Kalir', 'Portfolio', 'GitHub Activity'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header text={''} />
        <main className ="container">
          {children}
        </main>
      </body>
    </html>
  )
}
