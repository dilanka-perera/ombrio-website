'use client';

import TopicWhite from '@/app/TopicWhite';
import { useData } from '@/contexts/DataContext';
import Image from 'next/image';
import { useState } from 'react';

const ContactGeneral: React.FC = () => {
  const { websiteImages } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="flex flex-col xl:flex-row xl:space-x-4 py-12">
      <div className="xl:w-1/2">
        <TopicWhite text="General Inquiries" />
        <p className="px-8 pt-8 text-white text-base sm:text-lg md:text-xl leading-relaxed">
          Have a question about Ombrio, partnership opportunities, or general
          inquiries? We&apos;d love to hear from you! Whether you&apos;re
          reaching out for collaborations, press inquiries, or just want to
          learn more about what we do, our team is here to help. Use the form
          below to send us a message, and we&apos;ll respond as soon as
          possible. Let&apos;s connect!
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col bg-blue-100 p-6 mx-6 my-6 shadow-lg w-full max-w-[350px] items-center justify-center">
            <Image
              className="opacity-80"
              src={`https:${
                websiteImages.find((item) => item.slug === 'contact-general')
                  ?.image || 'no.png'
              }`}
              alt={'General Inquiries'}
              width={150}
              height={150}
              unoptimized
            />
            <p className="text-center mt-5 text-sm sm:text-base md:text-lg text-blue-900">
              Email: info@ombrio.io
            </p>
          </div>
        </div>
      </div>

      <div className="xl:w-1/2 flex">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-grow space-y-4 bg-white p-6 mx-6 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            className="w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (Optional)"
            className="w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          />

          <select
            name="inquiryType"
            required
            className="bg-white w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select Inquiry Type</option>
            <option value="partnership">Partnership</option>
            <option value="press">Press</option>
            <option value="careers">Careers</option>
            <option value="general">General Question</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none h-32"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-950 bg-opacity-80 hover:bg-opacity-90 text-white font-normal text-sm sm:text-base md:text-lg px-6 py-3 shadow-lg min-w-[200px] text-center rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactGeneral;
