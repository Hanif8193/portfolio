'use client';
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailCopyStatus, setEmailCopyStatus] = useState('');
  const [phoneCopyStatus, setPhoneCopyStatus] = useState('');

  const copyToClipboard = async (text: string, setStatus: React.Dispatch<React.SetStateAction<string>>) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Copied!');
      setTimeout(() => setStatus(''), 2000); // Clear message after 2 seconds
    } catch (err) {
      setStatus('Failed to copy.');
      setTimeout(() => setStatus(''), 2000);
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipientEmail = 'hanifmemon27464@gmail.com';
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setFormStatus('Your email client should have opened. If not, please send manually.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <AnimatedSection id='Contact'>
      <section className="body-font relative">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-card rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.078321998961!2d67.17630218004913!3d24.89530992094002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e772671b63%3A0xdd2869cf85a7bf4b!2sKhalil%20Khan%20St%2C%20Model%20Colony%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731987778024!5m2!1sen!2s'
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.5)" }}
            />
            <div className="bg-background relative flex flex-wrap py-6 rounded shadow-md w-full">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-foreground tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-foreground/80">
                  A/9 Bostan-e-Raza (Ext) Model Colony Malir Karachi.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-foreground tracking-widest text-xs">
                  EMAIL
                </h2>
                <div className="flex items-center">
                  <a href="mailto:hanifmemon27464@gmail.com" className="text-primary leading-relaxed hover:underline">hanifmemon27464@gmail.com</a>
                  <button
                    onClick={() => copyToClipboard('hanifmemon27464@gmail.com', setEmailCopyStatus)}
                    className="ml-2 p-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    aria-label="Copy email to clipboard"
                  >
                    {emailCopyStatus || 'Copy'}
                  </button>
                </div>
                {emailCopyStatus && <p className="text-sm text-primary mt-1">{emailCopyStatus}</p>}
                <h2 className="title-font font-semibold text-foreground tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <div className="flex items-center">
                  <p className="leading-relaxed text-foreground/80">+92 300 2756831</p>
                  <button
                    onClick={() => copyToClipboard('+92 300 2756831', setPhoneCopyStatus)}
                    className="ml-2 p-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    aria-label="Copy phone number to clipboard"
                  >
                    {phoneCopyStatus || 'Copy'}
                  </button>
                </div>
                {phoneCopyStatus && <p className="text-sm text-primary mt-1">{phoneCopyStatus}</p>}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-card flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-md">
            <h2 className="text-foreground text-2xl mb-1 font-medium title-font">
              Contact:
            </h2>
            <p className="leading-relaxed mb-5 text-foreground/80">
              Contact me without hesitation.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-foreground/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background rounded border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-foreground"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-foreground/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background rounded border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-foreground"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-background rounded border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-foreground"
                ></textarea>
              </div>
              <button type="submit" className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/80 rounded-lg text-lg transition-colors">
                Send Message
              </button>
            </form>
            {formStatus && (
              <p className="text-center text-sm text-primary mt-3">{formStatus}</p>
            )}
            <div className="border-t border-white/20 pt-8 mt-8 text-center">
              <a href="mailto:hanifmemon27464@gmail.com" className="text-primary hover:underline">
                hanifmemon27464@gmail.com
              </a>
              <p className="leading-normal my-5 text-foreground/80">
                Or find me on social media.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Contact;
