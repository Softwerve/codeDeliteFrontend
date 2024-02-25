import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About CodeDelite - Empowering the World of Code',
  description: "In today's digital landscape, coding is the language of innovation. At our coded website marketplace, we're not just offering templates – we're empowering creators and businesses to unleash their full potential through code. Join us in revolutionizing the way websites are built, bought, and sold.",
}

export default function AboutUsLayout({
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
