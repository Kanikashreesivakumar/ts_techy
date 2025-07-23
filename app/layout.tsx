import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ts-techy',
  icons: {
    icon: '/images/ts-logo.webp', // or '/favicon.ico' if you have a favicon
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
