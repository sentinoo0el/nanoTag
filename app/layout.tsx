import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NanoTag',
  description: 'First ever bulk checker',
  generator: 'NanoTag',
  openGraph: {
    title: 'NanoTag',
    description: 'First ever bulk checker',
    url: 'https://nanotag.vercel.app',
    siteName: 'NanoTag',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NanoTag',
    description: 'First ever bulk checker',
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