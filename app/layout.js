import './globals.css'
import { Outfit } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'


const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'LetsCode',
  description: 'SIH Project',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
