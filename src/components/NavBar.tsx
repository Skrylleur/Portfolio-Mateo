'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavBar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'À propos', href: '/about' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Mes projets', href: '/projects' },
  ]

  return (
    <header className="w-full bg-[#fdfaf4] text-[#0c1c3c] border-b border-[#e2e2e2]">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:opacity-80 transition cursor-pointer">
            Mateo LEGIGAN
          </h1>
        </Link>

        <nav className="space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'transition hover:text-[#2d5fff]',
                pathname === item.href
                  ? 'text-[#2d5fff] font-semibold underline underline-offset-4'
                  : ''
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}