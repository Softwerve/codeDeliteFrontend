import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Components - Explore Diverse Components for Your Projects',
  description: 'Dive into our comprehensive collection of coding components, from sleek CSS animations to robust JavaScript frameworks. Find the perfect pieces to elevate your projects and streamline your development process',
}

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
