import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from "@/components"

export const metadata: Metadata = {
  title: 'Plantastic',
  description: 'Find the perfect plant for your home and garden.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
