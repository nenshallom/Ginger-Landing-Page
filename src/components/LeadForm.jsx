import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
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
      setStatus('error');
    }
  };

  if (status === 'success') {
    // 1. YOUR SETTINGS
    const pdfUrl = "https://jkiapkmsrkiopkjmzxtx.supabase.co/storage/v1/object/public/Ginger%20farming%20material/Nendang_Shallom_Goshit_Frontend_Developer.pdf";
    const whatsappGroupLink = "https://chat.whatsapp.com/DbbYuLoT8DB182Dka2aMtR?mode=gi_t"; 
    const firstName = formData.name.split(' ')[0];

    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center animate-in fade-in zoom-in duration-700">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-t-8 border-green-600 relative overflow-hidden">
          
          {/* Decorative Sparkle */}
          <div className="absolute top-0 right-0 p-4 opacity-20 text-4xl">✨</div>

          <h3 className="text-3xl font-black mb-2 text-slate-900">Success, {firstName}!</h3>
          <p className="text-slate-500 mb-8">Your handbook is ready for download below.</p>
          
          <div className="space-y-6">
            {/* Action 1: Download */}
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center gap-3 w-full py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-slate-800 transition-all transform hover:scale-[1.02]"
            >
              📥 DOWNLOAD HANDBOOK
            </a>

            {/* Visual Divider with Text */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
              <div className="relative flex justify-center text-xs uppercase font-bold text-slate-400 bg-white px-4 tracking-widest">Recommended Step</div>
            </div>

            {/* Action 2: Join Community */}
            <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-2 italic">"Don't farm alone!"</h4>
              <p className="text-sm text-green-700 mb-4 leading-relaxed">
                Join our private WhatsApp community to get real-time weather alerts and ginger pest control tips.
              </p>
              
              <a 
                href={whatsappGroupLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white font-black text-xl rounded-2xl shadow-xl hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 pulse-animation"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-slate-900 py-10 px-8 text-center">
            <h3 className="text-3xl font-bold mb-2">Claim Your Copy</h3>
            <p className="text-slate-400">Join 1,200+ farmers growing better ginger.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-10 space-y-6 text-">
            <input 
              required type="text" placeholder="Full Name" 
              className="w-full px-6 py-4 rounded-2xl bg-green-100 text-black border border-green-500 outline-none focus:ring-2 focus:ring-green-600"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              required type="email" placeholder="Email Address" 
              className="w-full px-6 py-4 rounded-2xl bg-green-100 text-black border border-green-500  outline-none focus:ring-2 focus:ring-green-600"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input 
              type="tel" placeholder="WhatsApp Number (Optional)" 
              className="w-full px-6 py-4 rounded-2xl bg-green-100 text-black border border-green-500  outline-none focus:ring-2 focus:ring-green-600"
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            />
            <button 
              disabled={status === 'submitting'}
              className="w-full py-5 bg-green-700 text-white font-black text-lg rounded-2xl hover:bg-green-800 transition-all"
            >
              {status === 'submitting' ? 'SAVING...' : 'SEND ME THE HANDBOOK →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;