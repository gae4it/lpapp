"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { HeaderProps } from "@/types"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header({ logo, navigation, ctaButton }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={logo.href ?? "/"} className="flex items-center space-x-2" aria-label="Homepage">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {item.title}
                </Link>
                {item.items && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-950 rounded-lg shadow-lg border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-400 hover:text-primary hover:bg-gray-900 rounded-md transition-colors"
                        >
                          <div className="font-medium">{subItem.title}</div>
                          {subItem.description && (
                            <div className="text-sm text-gray-500">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {ctaButton && (
              <Button asChild className="hidden md:inline-flex">
                <Link href={ctaButton.href}>{ctaButton.text}</Link>
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300" 
              aria-label="Toggle mobile menu" 
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-gray-900 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.items && (
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-primary hover:bg-gray-900 rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {ctaButton && (
                <div className="pt-2">
                  <Button asChild className="w-full">
                    <Link href={ctaButton.href} onClick={() => setMobileMenuOpen(false)}>
                      {ctaButton.text}
                    </Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}