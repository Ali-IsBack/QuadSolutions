import { Shield, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-blue-700" strokeWidth={2.5} />
          <span className="text-xl font-bold tracking-tighter text-slate-900">QUAD SOLUTIONS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-blue-700 transition">Services</a>
          <a href="#workflow" className="hover:text-blue-700 transition">Process</a>
          <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition shadow-lg shadow-slate-200">
            Provider Portal
          </button>
        </div>
        <Menu className="md:hidden w-6 h-6" />
      </div>
    </nav>
  );
};
