import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-white text-xs" />
              </div>
              <span className="font-bold text-white">Bahudin Consultancy</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Guiding Pakistani students to European universities. Expert consultancy for Italy, France, and Germany.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://wa.me/+923453836699" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/study-italy', label: 'Study in Italy' },
                { to: '/universities', label: 'Scholarships List' },
                { to: '/success-stories', label: 'Success Stories' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>YouTube: Bahudin Consultancy</li>
              <li>WhatsApp Group Available</li>
              <li>Facebook Group Available</li>
              <li>Free Consultations for Students</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Itlay Admissions Simplified by Bahaudin Shah — All rights reserved.
        </div>
      </div>
    </footer>
  );
}