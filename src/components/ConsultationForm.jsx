import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '../services/api';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Validation Schema with Zod
const consultationSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please provide a valid corporate or personal email' }),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit Indian mobile number' }),
  companyName: z.string().optional(),
  serviceRequired: z.string().min(1, { message: 'Please select a service category' }),
  consultationType: z.enum(['Virtual (Google Meet / Zoom)', 'In-Person (Pune Office)'], {
    errorMap: () => ({ message: 'Please select consultation mode' }),
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters detailing your requirement' }),
});

const serviceOptions = [
  'GST Services & Inverted Duty Refunds',
  'Income Tax & Scrutiny Advisory',
  'Statutory Audit & Assurance',
  'Tax Audit u/s 44AB',
  'Virtual CFO & Strategic Financial MIS',
  'Company / LLP Incorporation',
  'Corporate & MCA / ROC Compliance',
  'NGO, Trusts & Section 12AB/80G',
  'Other Corporate Advisory'
];

const ConsultationForm = () => {
  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      consultationType: 'Virtual (Google Meet / Zoom)',
      serviceRequired: 'Income Tax & Scrutiny Advisory',
    },
  });

  const onSubmit = async (data) => {
    setSubmissionState({ loading: true, success: false, error: null, message: null });
    try {
      const response = await submitContactForm(data);
      if (response.success) {
        setSubmissionState({
          loading: false,
          success: true,
          error: null,
          message: response.message || 'Consultation request received. A Chartered Accountant will contact you within 24 business hours.',
        });
        reset();
      } else {
        setSubmissionState({
          loading: false,
          success: false,
          error: response.error || 'Unable to submit enquiry. Please call us directly.',
          message: null,
        });
      }
    } catch (err) {
      setSubmissionState({
        loading: false,
        success: false,
        error: 'Network connectivity error. Please reach out via WhatsApp or phone.',
        message: null,
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          Direct Engagement
        </span>
        <h3 className="text-2xl font-bold text-navy mt-1">Schedule a Consultation</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Connect directly with practicing Chartered Accountants for confidential statutory evaluation and fee quotation.
        </p>
      </div>

      {submissionState.success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Consultation Enquiry Submitted</p>
            <p className="mt-0.5">{submissionState.message}</p>
          </div>
        </div>
      )}

      {submissionState.error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Notice</p>
            <p className="mt-0.5">{submissionState.error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register('fullName')}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                errors.fullName
                  ? 'border-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-2 focus:ring-primary-900 focus:border-transparent'
              }`}
              placeholder="e.g. Ramesh Kulkarni"
            />
            {errors.fullName && (
              <p className="text-[11px] text-rose-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              {...register('email')}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                errors.email
                  ? 'border-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-2 focus:ring-primary-900 focus:border-transparent'
              }`}
              placeholder="e.g. ramesh@company.com"
            />
            {errors.email && (
              <p className="text-[11px] text-rose-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Number (10 Digits) <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              {...register('mobile')}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                errors.mobile
                  ? 'border-rose-400 bg-rose-50/30'
                  : 'border-slate-300 focus:ring-2 focus:ring-primary-900 focus:border-transparent'
              }`}
              placeholder="9876543210"
            />
            {errors.mobile && (
              <p className="text-[11px] text-rose-500 mt-1">{errors.mobile.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Company / Entity Name
            </label>
            <input
              type="text"
              {...register('companyName')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all"
              placeholder="e.g. Apex Industries Pvt. Ltd."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Service Required <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('serviceRequired')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all bg-white"
            >
              {serviceOptions.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Consultation Mode <span className="text-rose-500">*</span>
            </label>
            <select
              {...register('consultationType')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="Virtual (Google Meet / Zoom)">Virtual (Google Meet / Zoom)</option>
              <option value="In-Person (Pune Office)">In-Person (Patil Arcade, Pune Office)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Requirement Overview / Case Details <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={4}
            {...register('message')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all ${
              errors.message
                ? 'border-rose-400 bg-rose-50/30'
                : 'border-slate-300 focus:ring-2 focus:ring-primary-900 focus:border-transparent'
            }`}
            placeholder="Please summarize your requirements, current turnover bracket, or pending compliance notices..."
          />
          {errors.message && (
            <p className="text-[11px] text-rose-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submissionState.loading}
          className="w-full py-3.5 px-6 rounded-xl bg-navy hover:bg-primary-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submissionState.loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-accent" />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
