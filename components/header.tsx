"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para adicionar efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight hover:opacity-70">
            TechCareers
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-light">
            <li>
              <Link href="/" className="hover:text-muted-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link href="/vagas" className="hover:text-muted-foreground">
                Vagas
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-muted-foreground">
                Contato
              </Link>
            </li>
          </ul>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 text-sm font-light pb-4">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-muted-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link href="/vagas" onClick={() => setIsMenuOpen(false)} className="block hover:text-muted-foreground">
                Vagas
              </Link>
            </li>
            <li>
              <Link href="/contato" onClick={() => setIsMenuOpen(false)} className="block hover:text-muted-foreground">
                Contato
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
