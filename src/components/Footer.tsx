
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zenfit-purple-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-zenfit-pink">Zen</span>Fit
              </span>
            </Link>
            <p className="text-white/80 mb-4">
              Holistic wellness solutions for urban professionals and fitness enthusiasts in the heart of Auckland CBD.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-zenfit-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-zenfit-yellow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/classes" className="text-white/80 hover:text-zenfit-yellow transition-colors">Classes</Link></li>
              <li><Link to="/instructors" className="text-white/80 hover:text-zenfit-yellow transition-colors">Instructors</Link></li>
              <li><Link to="/schedule" className="text-white/80 hover:text-zenfit-yellow transition-colors">Schedule</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-zenfit-yellow transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-zenfit-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-zenfit-pink" />
                <span className="text-white/80">123 Queen Street, Auckland CBD, New Zealand</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-zenfit-pink" />
                <span className="text-white/80">+64 9 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-zenfit-pink" />
                <span className="text-white/80">info@zenfitstudio.co.nz</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/80">Monday - Friday</span>
                <span className="text-white">6:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Saturday</span>
                <span className="text-white">8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/80">Sunday</span>
                <span className="text-white">8:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ZenFit Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
