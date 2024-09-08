import './globals.scss'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const myFont = localFont({
  src: './w95fa.woff2',
})

export const metadata = {
  title: '<Mo/> 👋',
  description: 'Windows 95 themed portfolio of Mo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
