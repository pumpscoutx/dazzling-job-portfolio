
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-display font-medium mb-4">Naol Getahun R.</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Frontend developer with a passion for creating beautiful, functional, and efficient web experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:naolray@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+393509525512" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Contact</h3>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPin size={16} className="mr-2" />
              <p>Ancona, Italy</p>
            </div>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:naolray@gmail.com" className="hover:text-primary transition-colors">naolray@gmail.com</a>
            </div>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <Phone size={16} className="mr-2" />
              <a href="tel:+393509525512" className="hover:text-primary transition-colors">+39 350 952 5512</a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">Available for remote work worldwide</p>
          </div>
        </div>
        
        <div className="border-t border-muted/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Naol Getahun R. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Frontend Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
