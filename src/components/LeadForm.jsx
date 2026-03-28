import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; //

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState(''); // New state for specific errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(''); // Clear previous errors
    
    try {
      // 1. Guardrail: Check if email exists
      const { data: existingLead, error: checkError } = await supabase
        .from('leads')
        .select('email')
        .eq('email', formData.email)
        .maybeSingle();

      if (checkError) throw checkError;

      if (existingLead) {
        setErrorMessage("This email is already registered. Please use a different email address.");
        setStatus('idle');
        return; 
      }

      // 2. Insert if unique
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ 
          full_name: formData.name, 
          email: formData.email, 
          whatsapp: formData.whatsapp || null 
        }]);

      if (dbError) throw dbError;
      setStatus('success');
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus('error');
    }
  };

  if (status === 'success') {
    // Add '?download=1' or similar if your storage setup supports forced download via URL
    const pdfUrl = "https://jkiapkmsrkiopkjmzxtx.supabase.co/storage/v1/object/public/Ginger%20farming%20material/Ginger%20Farming%20Handbook%20(2).pdf?download=";
    const whatsappGroupLink = "https://chat.whatsapp.com/DbbYuLoT8DB182Dka2aMtR?mode=gi_t"; 
    const firstName = formData.name.split(' ')[0];

    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center animate-in fade-in zoom-in duration-700">
        <div className="bg-white px-4 py-10 rounded-[3rem] shadow-2xl border-t-8 border-green-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 text-4xl">✨</div>
          <h3 className="text-3xl font-black mb-2 text-slate-900">Success, {firstName}!</h3>
          <p className="text-slate-500 mb-8">Your handbook is ready for download below.</p>
          
          <div className="space-y-6">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              download="Ginger_Farming_Handbook.pdf" // Forced download attribute
              className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white font-bold text-sm rounded-2xl shadow-lg hover:bg-slate-800 transition-all transform hover:scale-[1.02]"
            >
              📥 DOWNLOAD HANDBOOK
            </a>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
              <div className="relative flex justify-center text-xs uppercase font-bold text-slate-400 bg-white px-4 tracking-widest">Recommended Step</div>
            </div>

            <div className="bg-green-50 py-6 rounded-3xl border border-green-100 px-4">
              <h4 className="font-bold text-green-900 mb-2 italic">"Don't farm alone!"</h4>
              <p className="text-sm text-green-700 mb-4 leading-relaxed">
                Join our private WhatsApp community to get real-time farming tips.
              </p>
              <a 
                href={whatsappGroupLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white font-black text-sm rounded-2xl shadow-xl hover:bg-[#128C7E] transition-all pulse-animation"
              >
                JOIN THE WHATSAPP GROUP
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="form-section" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-slate-900 py-10 px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Claim Your Copy</h3>
            <p className="text-slate-400">Join 100+ farmers growing better ginger.</p>
          </div>

          <form onSubmit={handleSubmit} className="px-4 py-8 md:p-10 space-y-6">
            {/* Display the duplicate email error message here */}
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-bold rounded-xl animate-bounce">
                ⚠️ {errorMessage}
              </div>
            )}

            <input 
              required type="text" placeholder="Full Name" 
              className="w-full px-6 py-4 rounded-2xl bg-green-50 text-black border border-green-200 outline-none focus:ring-2 focus:ring-green-600 transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              required type="email" placeholder="Email Address" 
              className={`w-full px-6 py-4 rounded-2xl bg-green-50 text-black border outline-none focus:ring-2 transition-all ${errorMessage ? 'border-red-500 focus:ring-red-500' : 'border-green-200 focus:ring-green-600'}`}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input 
              type="tel" placeholder="WhatsApp Number (Optional)" 
              className="w-full px-6 py-4 rounded-2xl bg-green-50 text-black border border-green-200 outline-none focus:ring-2 focus:ring-green-600 transition-all"
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            />
            <button 
              disabled={status === 'submitting'}
              className="w-full py-5 bg-green-700 text-white font-black text-sm rounded-2xl hover:bg-green-800 transition-all shadow-lg active:scale-95"
            >
              {status === 'submitting' ? 'VERIFYING...' : 'SEND ME THE HANDBOOK →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;