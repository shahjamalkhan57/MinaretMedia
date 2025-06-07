import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50/30 text-gray-700 py-16 border-t border-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="https://i.postimg.cc/CnwGNH2s/a-logo-design-for-minaret-a-digital-agen-Dn-Iu-Ue-Sc-QMKvb-W3y8-KXE3-A-4-Ex-Jz-X7-Rc-SMFOsdj-S8-Ffg-removebg-prev.png"
                  alt="Minaret Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-gray-900">Minaret</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transforming HVAC businesses through bespoke digital solutions and intelligent automation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 mr-3" />
                (555) 123-4567
              </div>
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 mr-3" />
                hello@minaret.agency
              </div>
              <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mr-3" />
                8992 Preston Rd, Frisco TX
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/websites" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Bespoke Websites
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Social Media Automation
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-600 hover:text-blue-600 transition-colors">
                  SEO Excellence
                </Link>
              </li>
              <li>
                <Link href="/services/workflows" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Digital Workflows
                </Link>
              </li>
              <li>
                <Link href="/services/followups" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Customer Follow-ups
                </Link>
              </li>
              <li>
                <Link href="/services/scheduling" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Smart Scheduling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-blue-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">Ready to get started?</h4>
              <Link
                href="/book-call"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                Schedule a call
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Minaret Digital Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}