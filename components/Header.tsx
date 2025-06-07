"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import StrategyCallModal from "./StrategyCallModal"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Bespoke Websites", href: "/services/websites" },
      { name: "Social Automation", href: "/services/automation" },
      { name: "SEO Excellence", href: "/services/seo" },
      { name: "Digital Workflows", href: "/services/workflows" },
      { name: "Customer Follow-ups", href: "/services/followups" },
      { name: "Smart Scheduling", href: "/services/scheduling" },
    ],
  },
  { name: "Calculator", href: "/calculator" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsOpen(false)
        setMobileSubmenuOpen(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMobileSubmenu = (itemName: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === itemName ? null : itemName)
  }

  const handleCallButtonClick = () => {
    setIsModalOpen(true)
    setIsOpen(false) // Close mobile menu if open
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center hover:scale-105 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-32 h-12 md:w-40 md:h-16">
                <Image
                  src="https://i.postimg.cc/c6WB00Jt/Chat-GPT-Image-Jun-7-2025-08-35-03-PM-removebg-preview.png"
                  alt="Minaret Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 relative"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>

                  {/* Desktop Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-blue-100 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={handleCallButtonClick}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm xl:text-base"
              >
                Book Strategy Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 mobile-menu-button" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Overlay */}
          {isOpen && (
            <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
          )}

          {/* Mobile Navigation */}
          <div className={`lg:hidden mobile-menu fixed left-0 right-0 top-16 md:top-20 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-xl transition-all duration-300 z-50 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <div className="max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-3 flex-1"
                        onClick={() => !item.submenu && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileSubmenuOpen === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className={`overflow-hidden transition-all duration-300 ${
                        mobileSubmenuOpen === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-gray-500 hover:text-blue-600 transition-colors duration-200 py-2 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-blue-100">
                  <button
                    onClick={handleCallButtonClick}
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-center font-medium"
                  >
                    Book Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <StrategyCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}