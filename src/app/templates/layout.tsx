import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Templates - Browse Stunning Web Templates for Every Project',
  description: 'Discover a curated selection of meticulously crafted web templates tailored to suit various industries and design preferences. Explore our diverse range of templates to find the perfect match for your next website project',
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
