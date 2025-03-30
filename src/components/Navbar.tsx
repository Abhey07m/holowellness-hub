
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isHomePage = location.pathname === '/';
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled || !isHomePage 
          ? 'bg-zenfit-purple-dark py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-white text-2xl font-bold">
            <span className="text-zenfit-pink">Zen</span>Fit
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 items-center">
          <NavLink to="/" className={({isActive}) => cn('nav-link', isActive && 'active')}>
            Home
          </NavLink>
          <NavLink to="/classes" className={({isActive}) => cn('nav-link', isActive && 'active')}>
            Classes
          </NavLink>
          <NavLink to="/instructors" className={({isActive}) => cn('nav-link', isActive && 'active')}>
            Instructors
          </NavLink>
          <NavLink to="/schedule" className={({isActive}) => cn('nav-link', isActive && 'active')}>
            Schedule
          </NavLink>
          <NavLink to="/pricing" className={({isActive}) => cn('nav-link', isActive && 'active')}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => cn('nav-link', isActive && 'active')}>
            Contact
          </NavLink>
          <Button asChild className="ml-4 bg-zenfit-pink hover:bg-zenfit-pink-light text-white">
            <Link to="/booking">Book a Class</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-zenfit-purple-dark">
          <div className="container py-4 flex flex-col space-y-4">
            <NavLink to="/" className="text-white hover:text-zenfit-yellow py-2">
              Home
            </NavLink>
            <NavLink to="/classes" className="text-white hover:text-zenfit-yellow py-2">
              Classes
            </NavLink>
            <NavLink to="/instructors" className="text-white hover:text-zenfit-yellow py-2">
              Instructors
            </NavLink>
            <NavLink to="/schedule" className="text-white hover:text-zenfit-yellow py-2">
              Schedule
            </NavLink>
            <NavLink to="/pricing" className="text-white hover:text-zenfit-yellow py-2">
              Pricing
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-zenfit-yellow py-2">
              Contact
            </NavLink>
            <Button asChild className="w-full mt-4 bg-zenfit-pink hover:bg-zenfit-pink-light text-white">
              <Link to="/booking">Book a Class</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
