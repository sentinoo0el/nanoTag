import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NanoTag',
  description: 'First ever bulk checker',
  generator: 'NanoTag',
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
