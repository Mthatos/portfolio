import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, X, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({ 
    show: false, 
    message: '', 
    type: 'success' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (Network delay)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
      showToast('Message sent successfully! I will get back to you soon.', 'success');
    } catch (error) {
      console.error('Submission error:', error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Open to opportunities in Machine Learning and Software Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800">
             <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
             <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors border border-slate-700 group-hover:border-emerald-500/30">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Email</p>
                        <a href="mailto:Thatolesudi563@gmail.com" className="text-white hover:text-emerald-400 transition-colors font-medium">Thatolesudi563@gmail.com</a>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors border border-slate-700 group-hover:border-emerald-500/30">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Phone</p>
                        <p className="text-white font-medium">+27 65 800 3498</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors border border-slate-700 group-hover:border-emerald-500/30">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Location</p>
                        <p className="text-white font-medium">Johannesburg, Gauteng</p>
                    </div>
                </div>
             </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800">
             <h3 className="text-2xl font-bold text-white mb-6">Online Presence</h3>
             <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.platform} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-emerald-600 text-white rounded-xl transition-all border border-slate-700 hover:border-emerald-500/50 group"
                    >
                      {link.platform === 'GitHub' && <Github size={20} />}
                      {link.platform === 'LinkedIn' && <Linkedin size={20} />}
                      <span className="font-medium">{link.platform}</span>
                    </a>
                ))}
             </div>
          </div>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 relative">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-slate-600" 
                          placeholder="John Doe" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-slate-600" 
                          placeholder="john@example.com" 
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder-slate-600" 
                      placeholder="Project Inquiry" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors h-32 resize-none placeholder-slate-600" 
                      placeholder="Tell me about your project..."
                    ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                </button>
            </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
          toast.type === 'success' 
            ? 'bg-slate-900 border-emerald-500/50 text-white' 
            : 'bg-slate-900 border-red-500/50 text-white'
        }`}>
          <div className={`p-1 rounded-full ${toast.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
            {toast.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          </div>
          <p className="font-medium text-sm">{toast.message}</p>
          <button 
            onClick={() => setToast(prev => ({ ...prev, show: false }))}
            className="ml-2 text-slate-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};