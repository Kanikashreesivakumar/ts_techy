import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TS Techy SEO',
  icons: {
    icon: '/images/ts-logo.webp', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
