import { useData } from '@/contexts/DataContext';
import StandardContainer from './StandardContainer';
import WideContainer from './WideContainer';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface ContactNavProps {
  setIsDropdownOpen: (value: number | null) => void;
}

const ContactNav: React.FC<ContactNavProps> = ({ setIsDropdownOpen }) => {
  const { websiteImages } = useData();

  const contactItems = [
    {
      slug: 'contact-service',
      title: 'Contact Services',
      description:
        'Reach out for service inquiries, consultations, or custom solutions.',
      email: 'services@ombrio.io',
      buttonText: 'Get in Touch',
      buttonUrl: '/contact/contact-services',
    },
    {
      slug: 'contact-general',
      title: 'General Inquiries',
      description:
        'For any general questions or inquiries, feel free to reach out to us.',
      email: 'info@ombrio.io',
      buttonText: 'Contact Us',
      buttonUrl: '/contact/general-inquiries',
    },
  ];

  return (
    <div>
      <WideContainer>
        <div className="relative w-full align-left bg-slate-100 bg-opacity-50">
          <StandardContainer>
            <div className="flex flex-wrap justify-center">
              {contactItems.map(
                ({
                  slug,
                  title,
                  description,
                  email,
                  buttonText,
                  buttonUrl,
                }) => (
                  <div key={slug} className="w-1/2">
                    <div className="flex flex-col items-start overflow-hidden md:px-20 py-8 w-full mx-auto align-left">
                      <div className="relative font-medium text-xl align-left">
                        {title}
                      </div>
                      <div className="flex space-x-4">
                        <Image
                          className="opacity-90 pb-5 object-contain w-1/4 mt-5"
                          src={`https:${websiteImages.find((item) => item.slug === slug)?.image || 'no.png'}`}
                          alt={title}
                          width={100}
                          height={100}
                          unoptimized
                        />
                        <div className="flex flex-col">
                          <p className="text-left mt-5 text-lg">
                            {description}
                          </p>
                          <p className="text-left mt-2 mb-5 text-base text-blue-900">
                            Email: {email}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={buttonUrl}
                        onClick={() => setIsDropdownOpen(null)}
                        className="inline-block bg-blue-950 bg-opacity-80 hover:bg-opacity-90 text-white font-normal text-sm text-lg px-3 py-3 shadow-lg min-w-[200px] text-center rounded"
                      >
                        {buttonText}
                      </Link>
                    </div>
                  </div>
                ),
              )}
            </div>
          </StandardContainer>
        </div>
      </WideContainer>
      <WideContainer>
        <div className="relative w-full align-left bg-blue-300 bg-opacity-70 h-[40px]">
          <StandardContainer>
            <div className="ml-5 flex flex-row justify-between">
              <Link
                className="flex flex-row h-[40px] text-base font-medium text-slate-900 hover:text-slate-700 items-center"
                href="/contact"
                onClick={() => setIsDropdownOpen(null)}
              >
                View Contact Page
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </Link>
              <button
                className="mr-5 text-slate-900 hover:text-slate-700"
                onClick={() => setIsDropdownOpen(null)}
              >
                <ChevronDown className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </StandardContainer>
        </div>
      </WideContainer>
    </div>
  );
};

export default ContactNav;
