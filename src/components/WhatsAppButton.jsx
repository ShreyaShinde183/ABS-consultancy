import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919028644499';
  const defaultMessage = encodeURIComponent(
    'Hello ABS Consultancy, I would like to enquire about your professional taxation, audit, and financial advisory services.'
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 group">
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ABS Consultancy on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 relative"
      >
        <MessageCircle className="w-7 h-7" />
        
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Quick WhatsApp Enquiry
        </span>

        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-20 animate-ping -z-10" />
      </a>
    </aside>
  );
};

export default WhatsAppButton;
