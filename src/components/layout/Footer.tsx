import Link from "next/link"
import type { FooterSectionProps } from "@/types"

export function Footer({ companyName, description, sections, socialLinks }: FooterSectionProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            {description && (
              <p className="text-gray-400 mb-6 leading-relaxed">
                {description}
              </p>
            )}
            
            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    {/* Icon placeholder - in real implementation, use proper icons */}
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}