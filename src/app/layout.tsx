import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import BackgroundMask from '@/components/background/background'


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
      <body>
        <Navbar></Navbar>
        <div style={{ paddingTop: 78, position: 'relative', zIndex: 1 }}>{children}</div>
        <BackgroundMask></BackgroundMask>
      </body>
    </html>
  )
}
