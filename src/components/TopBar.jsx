import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side: Office, Hours, Phone & Email */}
        <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center md:justify-start gap-y-1">
          <div className="flex items-center space-x-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Office: Erandwane, Pune</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Mon - Sat: 10:00 AM – 06:30 PM</span>
          </div>
          <a
            href="tel:+919028644499"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>+91 9028644499</span>
          </a>
          <a
            href="mailto:rahulchate.ca@gmail.com"
            className="hidden lg:flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>rahulchate.ca@gmail.com</span>
          </a>
        </div>

        {/* Right Side: Tax Calendar 2025 Pill & WhatsApp Quick Button */}
        <div className="flex items-center space-x-3">
          <Link
            to="/calculators#tax-calendar"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Tax Calendar 2025</span>
          </Link>

          <a
            href="https://wa.me/919028644499?text=Hello%20ABS%20Consultancy,%20I%20would%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
