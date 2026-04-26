import React, { useState } from 'react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-green-900">Request Received</h3>
        <p className="text-green-700 mt-2">A credentialing specialist will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-slate-500">Practice Name</label>
          <input required type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-blue-600 transition" placeholder="Medical Group LLC" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-slate-500">Provider NPI (Optional)</label>
          <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-blue-600 transition" placeholder="1234567890" />
        </div>
      </div>
      
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase text-slate-500">Contact Email</label>
        <input required type="email" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-blue-600 transition" placeholder="admin@practice.com" />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold uppercase text-slate-500">Service Needed</label>
        <select className="w-full p-3 rounded-lg border border-slate-200 bg-white">
          <option>Full Credentialing Package</option>
          <option>Insurance Enrollment Only</option>
          <option>Billing & Revenue Support</option>
          <option>CAQH Maintenance</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-700 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-100">
        Submit Audit Request
      </button>
      <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest">
        🔒 HIPAA Compliant Data Submission
      </p>
    </form>
  );
};
