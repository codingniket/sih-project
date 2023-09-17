import './globals.css'
import { Outfit } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "./components/navbar";
import Footer from "./components/footer"

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'LetsCode',
  description: 'SIH Project',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
