import React from 'react';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="relative antialiased  overflow-x-hidden">
      {/* Background Decorative Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[100px] -z-10"></div>

      <Hero />
      <LeadForm />
      
      <footer className="py-12  border-t border-slate-200 text-center">
        <p className="text-white text-sm font-medium">© {new Date().getFullYear()} A Product of GGN. Empowering Farmers Worldwide.</p>
        <a href='https://nenshallom.netlify.app/' className='text-xs pt-5 cursor-pointer text-blue-900'>Built by NSG</a>
      </footer>
    </div>
  );
}

export default App;