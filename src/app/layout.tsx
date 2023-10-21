import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/navbar'


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
        {children}
      </body>
    </html>
  )
}
