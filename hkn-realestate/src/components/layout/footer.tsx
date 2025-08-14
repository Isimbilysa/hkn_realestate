// Using regular anchor tags for navigation
import { Building, MapPin, Phone, Mail, ArrowUp, Heart } from "lucide-react"
import {FaFacebook, FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa"
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 left-10 w-32 h-32 bg-[#F7BD01] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#F7BD01] rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#F7BD01] via-blue-500 to-[#F7BD01]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Enhanced */}
          <div className="space-y-6 lg:col-span-1">
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F7BD01] to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <span className="font-serif font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    HKN Real Estate
                  </span>
                  {/* <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-3 h-3 text-[#F7BD01] fill-current" />
                    <Star className="w-3 h-3 text-[#F7BD01] fill-current" />
                    <Star className="w-3 h-3 text-[#F7BD01] fill-current" />
                    <Star className="w-3 h-3 text-[#F7BD01] fill-current" />
                    <Star className="w-3 h-3 text-[#F7BD01] fill-current" />
                    <span className="text-xs text-gray-400 ml-1">5.0</span>
                  </div> */}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted partner in finding the perfect property. We specialize in premium houses and land plots in
                prime locations across Rwanda.
              </p>

              {/* Enhanced Stats */}
              {/* <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#F7BD01]">500+</div>
                  <div className="text-xs text-gray-400">Properties</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-lg font-bold text-[#F7BD01]">1K+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#F7BD01]">15+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div> */}

              {/* Social Media - Enhanced */}
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebook, color: 'hover:bg-blue-600' },
                  { icon: FaTwitter, color: 'hover:bg-sky-500' },
                  { icon: FaInstagram, color: 'hover:bg-pink-600' },
                  { icon: FaLinkedin, color: 'hover:bg-blue-700' }
                ].map(({ icon: Icon, color }, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`group p-3 bg-white/10 rounded-full ${color} backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                  </a>
                ))}
              
              </div>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-xl text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#F7BD01] to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Map View', 'About Us', 'Services', 'Contact'].map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#F7BD01] transition-all duration-300 group-hover:translate-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-[#F7BD01] transition-colors"></div>
                    <span className="group-hover:font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types - Enhanced */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-xl text-white mb-6 relative">
              Property Types
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#F7BD01] to-transparent rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Residential Houses', count: '200+' },
                { name: 'Commercial Land', count: '150+' },
                { name: 'Luxury Villas', count: '80+' },
                { name: 'Investment Plots', count: '300+' }
              ].map((item, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#F7BD01]/30 transition-all duration-300 group-hover:scale-105"
                  >
                    <span className="text-white group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-xs text-[#F7BD01] bg-[#F7BD01]/20 px-2 py-1 rounded-full">{item.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-xl text-white mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#F7BD01] to-transparent rounded-full"></div>
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, text: 'Kigali Business District\nKN 3 Ave, Kigali, Rwanda', color: 'text-red-400' },
                { icon: Phone, text: '+250 788 123 456\n+250 722 987 654', color: 'text-green-400' },
                { icon: Mail, text: 'info@hknrealestate.rw\nsupport@hknrealestate.rw', color: 'text-blue-400' }
              ].map(({ icon: Icon, text, color }, index) => (
                <div key={index} className="group flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20">
                  <div className={`p-2 rounded-lg ${color.replace('text-', 'bg-').replace('-400', '-400/20')} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div className="flex-1">
                    {text.split('\n').map((line, idx) => (
                      <div key={idx} className="text-gray-300 text-sm group-hover:text-white transition-colors">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            {/* <div className="p-4 bg-gradient-to-r from-[#F7BD01]/10 to-blue-500/10 rounded-lg border border-[#F7BD01]/20">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">Get the latest property listings</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#F7BD01] transition-colors"
                />
                <button className="px-4 py-2 bg-[#F7BD01] text-black rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
           <div className="relative mt-10 pt-6 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <span>© 2025 HKN Real Estate. All rights reserved.</span>
          <a href="#" className="hover:text-[#F7BD01] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#F7BD01] transition-colors">Terms of Service</a>
        </div>
            
            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-[#F7BD01] rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <ArrowUp className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
              <span className="text-sm text-gray-300 group-hover:text-black transition-colors">Back to Top</span>
            </button>
          </div>

          {/* Developer Credit - Enhanced */}
           <div className="text-center mt-6 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
        <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>by</span>
          <span className="text-[#F7BD01] font-semibold">Isimbi Keza Lysa</span>
        </p>
        </div>
        </div>
        </div>

      {/* Floating decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F7BD01] to-transparent opacity-50"></div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}