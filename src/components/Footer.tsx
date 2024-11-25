import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-black/80 text-white backdrop-blur-lg border-t border-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black/80 pointer-events-none" />
      
      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-dynaPuff">
              4BRO
            </h2>
            <p className="text-lg text-gray-400 font-poppins">
              Join the revolution with #VONBROS4BROS
            </p>
            <div className="flex gap-4">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full border-blue-500/20 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full border-blue-500/20 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
              >
                <TikTokIcon />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-dynaPuff">Contact</h3>
            <div className="space-y-4 font-poppins">
              <div className="flex items-center gap-3 text-gray-400 group hover:text-blue-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p>SCHORNHORSTSTR. 9</p>
                  <p>44532 LÜNEN DEUTSCHLAND</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group hover:text-blue-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <p>BROSERVICE@4BRO.DE</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group hover:text-blue-400 transition-colors duration-300">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <p>+49 (0)1234 567890</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-dynaPuff">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 font-poppins">
              {[
                ['Datenschutz', '/datenschutz'],
                ['Impressum', '/impressum'],
                ['AGB', '/agb'],
                ['Widerruf', '/widerrufsbelehrung'],
                ['Versand', '/versandmethoden'],
                ['Zahlung', '/zahlungsmethoden'],
              ].map(([label, href]) => (
                <a 
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="h-1 w-1 rounded-full bg-blue-500 group-hover:w-2 transition-all duration-300" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-blue-500/20" />

        {/* Copyright */}
        <div className="py-6 text-center text-gray-500 font-poppins">
          <p>© 2024 4BRO. All rights reserved. #VONBROS4BROS</p>
        </div>
      </div>
    </footer>
  );
}