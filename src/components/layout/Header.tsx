import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { HeaderProps } from "@/types"
import { Menu } from "lucide-react"

export function Header({ logo, navigation, ctaButton }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={logo.href ?? "/"} className="flex items-center space-x-2">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {item.title}
                </Link>
                {item.items && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="p-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors"
                        >
                          <div className="font-medium">{subItem.title}</div>
                          {subItem.description && (
                            <div className="text-sm text-gray-500 dark:text-gray-500">
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
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            {ctaButton && (
              <Button asChild>
                <Link href={ctaButton.href}>{ctaButton.text}</Link>
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}