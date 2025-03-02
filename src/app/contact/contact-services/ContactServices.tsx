'use client';

import TopicWhite from '@/app/TopicWhite';
import { useData } from '@/contexts/DataContext';
import Image from 'next/image';
import { useState } from 'react';

const ContactServices: React.FC = () => {
  const { websiteImages } = useData();
  const [currency, setCurrency] = useState<'LKR' | 'USD'>('USD');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    details: '',
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

  const budgetOptions =
    currency === 'USD'
      ? ['Less than $300', '$300 - $1000', '$1000 - $2000', '$2000+']
      : [
          'Less than LKR 100,000',
          'LKR 100,000 - LKR 200,000',
          'LKR 200,000 - LKR 300,000',
          'LKR 300,000+',
        ];

  return (
    <div className="flex flex-col xl:flex-row xl:space-x-4 py-12">
      <div className="xl:w-1/2">
        <TopicWhite text="Contact Services" />
        <p className="px-8 pt-8 text-white text-base sm:text-lg md:text-xl leading-relaxed">
          Looking to develop an innovative AI solution or build a
          high-performance website? At Ombrio, we specialize in cutting-edge AI
          development and web solutions tailored to your needs. Whether
          you&apos;re a startup, enterprise, or entrepreneur, our team is ready
          to collaborate and bring your vision to life. Fill out the form below
          with your project details, and we&apos;ll get back to you with the
          next steps. Let&apos;s create something extraordinary together!
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col bg-blue-100 p-6 mx-6 my-6 shadow-lg w-full max-w-[350px] items-center justify-center">
            <Image
              className="opacity-80"
              src={`https:${
                websiteImages.find((item) => item.slug === 'contact-service')
                  ?.image || 'no.png'
              }`}
              alt={'General Inquiries'}
              width={150}
              height={150}
              unoptimized
            />
            <p className="text-center mt-5 text-sm sm:text-base md:text-lg text-blue-900">
              Email: services@ombrio.io
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
            name="projectType"
            required
            className="bg-white w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select Project Type</option>
            <option value="ai">AI Development</option>
            <option value="web">Web Development</option>
            <option value="custom">Custom Solution</option>
          </select>

          <div className="flex space-x-4 items-center">
            <label className="font-medium text-gray-700">Currency:</label>
            <button
              type="button"
              className={`px-4 py-2 border rounded-md ${
                currency === 'USD' ? 'bg-blue-950 text-white' : 'bg-white'
              }`}
              onClick={() => setCurrency('USD')}
            >
              USD
            </button>
            <button
              type="button"
              className={`px-4 py-2 border rounded-md ${
                currency === 'LKR' ? 'bg-blue-950 text-white' : 'bg-white'
              }`}
              onClick={() => setCurrency('LKR')}
            >
              LKR
            </button>
          </div>

          {/* Dynamic Budget Options */}
          <select
            name="budget"
            required
            className="bg-white w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select Budget Range</option>
            {budgetOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <textarea
            name="details"
            placeholder="Project Details"
            required
            className="w-full px-4 py-3 border rounded-lg text-slate-800 focus:ring-2 focus:ring-slate-500 focus:outline-none h-32"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-900 text-white font-normal text-sm sm:text-base md:text-lg px-6 py-3 shadow-lg min-w-[200px] text-center rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactServices;
