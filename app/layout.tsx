import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mouse Pro',
  description: 'Created with v0',
  generator: 'Mouse Pro',
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
