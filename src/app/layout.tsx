'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/' 

  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-[#fdfaf4] text-[#0c1c3c]">
        {!isHome && <NavBar />}
        <div className="flex-grow flex flex-col bg-[#fdfaf4]">
          {children}
        </div>

        {!isHome && <Footer />}
      </body>
    </html>
  )
}