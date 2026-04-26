import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Workflow } from './sections/Workflow'; // Created in previous response
import { FAQ } from './sections/FAQ';
import { ContactForm } from './components/ContactForm'; // Created in previous response

function App() {
  return (
    <div className="antialiased text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <FAQ />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Quad Solutions</h2>
            <p className="text-slate-500 mb-8">Ready to streamline your practice operations? Reach out for a custom quote.</p>
            <div className="space-y-4 text-sm font-medium">
              <p>📧 Support@quadsolutions.com</p>
              <p>📞 +1 (800) QUAD-MED</p>
              <p>📍 101 Health Tower, New York, NY</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-500 py-10 text-center text-xs">
        &copy; 2026 Quad Solutions Medical Credentialing. HIPAA Certified Practice Partner.
      </footer>
    </div>
  );
}

export default App;
