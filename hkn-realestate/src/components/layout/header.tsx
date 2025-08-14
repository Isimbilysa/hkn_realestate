import { useState, useEffect } from "react"
import { Home, Building, MapPin, Phone, Menu, X, User, Plus } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // const [showListPropertyModal, setShowListPropertyModal] = useState(false)

  const navigation = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Properties", href: "#properties", icon: Building },
    { name: "Map View", href: "#map", icon: MapPin },
    { name: "About Us", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Phone },

  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleListProperty = () => {
    // setShowListPropertyModal(true)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F7BD01] rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className={`font-serif font-bold text-2xl transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    HKN
                  </span>
                  <span className={`font-medium text-sm -mt-1 transition-colors duration-300 ${
                    isScrolled ? 'text-[#1E3A8A]' : 'text-[#F7BD01]'
                  }`}>
                    Real Estate
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 backdrop-blur-sm relative ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10' 
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F7BD01] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            {/* <div className="hidden lg:flex items-center space-x-4">
              <div className="w-px h-6 bg-gray-300 opacity-50"></div>

              <button
                onClick={handleListProperty}
                className="group bg-gradient-to-r from-[#F7BD01] to-[#E5A800] hover:from-[#E5A800] hover:to-[#D4951A] text-black px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span>List Property</span>
              </button>
            </div> */}

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`rounded-full p-2 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10' 
                    : 'text-white hover:text-white hover:bg-white/20'
                }`}
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 py-6 bg-white/95 backdrop-blur-md rounded-2xl mx-4 mb-4 shadow-xl border border-gray-200/50">
              <div className="space-y-2">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10 rounded-xl transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#1E3A8A]/10 transition-colors duration-300">
                      <item.icon className="w-5 h-5 group-hover:text-[#1E3A8A] transition-colors duration-300" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white rounded-xl py-3 font-semibold shadow-lg flex items-center justify-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                  <button 
                    onClick={handleListProperty}
                    className="w-full bg-gradient-to-r from-[#F7BD01] to-[#E5A800] hover:from-[#E5A800] hover:to-[#D4951A] text-black rounded-xl py-3 font-bold shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>List Your Property</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* List Property Modal
      {showListPropertyModal && (
        <ListPropertyModal onClose={() => setShowListPropertyModal(false)} />
      )} */}

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

// List Property Modal Component
// interface ListPropertyModalProps {
//   onClose: () => void;
// }
// function ListPropertyModal({ onClose }: ListPropertyModalProps) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6 py-4 flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-white">List Your Property</h2>
//           <button 
//             onClick={onClose}
//             className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6 overflow-y-auto max-h-[80vh]">
//           <p className="text-gray-600 mb-6">
//             Ready to list your property? Fill out our quick form and we'll help you get started.
//           </p>

//           <div className="grid gap-6 md:grid-cols-2">
//             {/* Contact Information */}
//             <div className="space-y-4">
//               <h3 className="font-semibold text-lg text-gray-900">Contact Information</h3>
//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
//                 />
//               </div>
//             </div>

//             {/* Property Details */}
//             <div className="space-y-4">
//               <h3 className="font-semibold text-lg text-gray-900">Property Details</h3>
//               <div className="space-y-3">
//                 <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all">
//                   <option>Property Type</option>
//                   <option>Residential House</option>
//                   <option>Commercial Land</option>
//                   <option>Luxury Villa</option>
//                   <option>Investment Plot</option>
//                   <option>Apartment</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Location/Area"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Price Range"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="mt-6">
//             <h3 className="font-semibold text-lg text-gray-900 mb-3">Property Description</h3>
//             <textarea
//               // rows="4"
//               placeholder="Tell us more about your property..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all resize-none"
//             ></textarea>
//           </div>

//           {/* Features */}
//           <div className="mt-6">
//             <h3 className="font-semibold text-lg text-gray-900 mb-3">Key Features (Optional)</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//               {[
//                 'Swimming Pool', 'Garden', 'Parking', 'Security', 'Modern Kitchen', 
//                 'Balcony', 'Air Conditioning', 'Generator', 'Water Tank'
//               ].map((feature) => (
//                 <label key={feature} className="flex items-center space-x-2 cursor-pointer">
//                   <input type="checkbox" className="text-[#1E3A8A] rounded focus:ring-[#1E3A8A]" />
//                   <span className="text-sm text-gray-700">{feature}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-8">
//             <button
//               onClick={onClose}
//               className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//             >
//               Cancel
//             </button>
//             <button className="px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white rounded-lg hover:from-[#16275B] hover:to-[#1E3A8A] transition-all font-semibold shadow-lg flex-1 sm:flex-initial">
//               Submit Property Details
//             </button>
//           </div>

//           {/* Contact Alternative */}
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
//             <p className="text-gray-600 text-sm">
//               Prefer to speak directly? Call us at{' '}
//               <a href="tel:+250788123456" className="text-[#1E3A8A] font-semibold hover:underline">
//                 +250 788 123 456
//               </a>{' '}
//               or email{' '}
//               <a href="mailto:listings@hknrealestate.rw" className="text-[#1E3A8A] font-semibold hover:underline">
//                 listings@hknrealestate.rw
//               </a>
//             </p>
//           </div>
//         </div>
      // </div>
    // </div>
  // )
// }