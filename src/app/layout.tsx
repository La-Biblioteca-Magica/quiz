import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import BackgroundMask from '@/components/background/background'
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'La Biblioteca Mágica',
  description: 'Descubre tu próximo libro y danos dinero',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#825bd5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Navbar></Navbar>
        <div style={{ paddingTop: 78, position: 'relative', zIndex: 1 }}>{children}</div>
        <BackgroundMask></BackgroundMask>
      </body>
    </html>
  )
}
