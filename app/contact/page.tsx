import ContactForm from "@/components/ContactForm"
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Award } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6 hover:bg-blue-200 transition-colors duration-300">
            <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Get In Touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6">
            Ready to Transform Your HVAC Business?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to discuss your digital transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-outfit font-bold text-gray-900 mb-8">Get Started Today</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-outfit font-bold text-gray-900">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@minaret.agency</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                   8992 Preston Rd
                    <br />
                    Frisco, TX 75034
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="font-semibold text-gray-900">Why Choose Minaret?</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  Dedicated HVAC industry experts
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-600 mr-2" />
                  24/7 support and monitoring
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 text-blue-600 mr-2" />
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
