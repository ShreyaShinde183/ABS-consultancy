import React, { useState } from 'react';
import testimonialsData from '../data/testimonials.json';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1.5">
            Client Voices
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Trusted by Entrepreneurs & Corporate Leaders
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            See how our proactive compliance, audit rigor, and tax planning have anchored businesses through audits, funding rounds, and growth cycles.
          </p>

          {/* Sample Review Notice Banner as required */}
          <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Sample client case feedback illustrating actual engagement scopes. Actual references available upon request.</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-card relative">
            <Quote className="w-12 h-12 text-slate-200 absolute top-6 right-8 -z-0 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6 text-amber-500">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Feedback Body */}
            <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 relative z-10 font-normal">
              "{current.feedback}"
            </blockquote>

            {/* Author Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-100 pt-6 gap-4">
              <div>
                <h4 className="text-base font-bold text-navy">{current.clientName}</h4>
                <p className="text-xs text-slate-500 font-medium">
                  {current.designation} • <span className="text-primary-800">{current.companyName}</span>
                </p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {current.industry}
                </span>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-slate-400 px-2">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
