'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: 'Hasi Safe Stick', href: '/hasi-safe-stick' },
    { name: 'Hasi Cloud', href: '/hasi-cloud' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header className="bg-hasi-darkblue text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <div className="text-2xl font-bold">
              <span className="text-white">HASI</span>{' '}
              <span className="text-hasi-accent">Elektronic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-hasi-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+4970421639"
              className="flex items-center space-x-2 px-6 py-2.5 bg-hasi-accent text-white rounded-lg font-medium hover:bg-hasi-blue transition-colors shadow-md"
            >
              <span>📞</span>
              <span>07042 / 16391</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-hasi-blue transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menü öffnen</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-hasi-blue">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-hasi-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+4970421639"
                className="mx-4 mt-4 text-center px-6 py-2.5 bg-hasi-accent text-white rounded-lg font-medium hover:bg-hasi-blue transition-colors"
              >
                📞 07042 / 16391
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
