import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import Header from '../app/components/Header/index'
import Footer from '../app/components/Footer/index'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <head>
    //   </head>
      // <body >
      <>
        <Header />
        {children}
        <Footer />
        </>
      // </body>
    // </html>
  )
}

