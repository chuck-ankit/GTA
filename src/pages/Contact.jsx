import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="h-full bg-black text-white flex flex-col overflow-y-auto">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          <div className="max-w-2xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-[Helvetica_Now_Display]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 font-[Helvetica_Now_Display]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 font-[Helvetica_Now_Display]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 font-[Helvetica_Now_Display]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-[Helvetica_Now_Display]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 font-[Helvetica_Now_Display]"
                ></textarea>
              </div>
              {error && (
                <div className="text-red-500 font-[Helvetica_Now_Display]">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-green-500 font-[Helvetica_Now_Display]">
                  Message sent successfully!
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 bg-white text-black font-bold rounded-lg transition-colors font-[Helvetica_Now_Display] ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;