'use client';

import { useData } from '@/contexts/DataContext';
import ContactCard from './ContactCard'; // Import your ContactCard component
import StandardContainer from '../StandardContainer';
import WideContainer from '../WideContainer';

const ContactCards: React.FC = () => {
  const { websiteImages } = useData();

  const backgroundImage = `url('https:${
    websiteImages.find((item) => item.slug === 'background-6')?.image ||
    'no.png'
  }')`;

  return (
    <WideContainer>
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute inset-0 bg-blue-300 bg-opacity-50" />

        <div className="relative">
          <StandardContainer id="contact-info">
            <div className="flex flex-wrap py-12 justify-center">
              <div className="xl:w-1/2 p-4">
                <ContactCard
                  imageSrc={`https:${
                    websiteImages.find(
                      (item) => item.slug === 'contact-service',
                    )?.image || 'no.png'
                  }`}
                  title="Contact Services"
                  description="Reach out for service inquiries, consultations, or custom solutions."
                  email="services@ombrio.io"
                  buttonText="Get in Touch"
                  buttonUrl="/contact/contact-services"
                />
              </div>

              <div className="xl:w-1/2 p-4">
                <ContactCard
                  imageSrc={`https:${
                    websiteImages.find(
                      (item) => item.slug === 'contact-general',
                    )?.image || 'no.png'
                  }`}
                  title="General Inquiries"
                  description="For any general questions or inquiries, feel free to reach out to us."
                  email="info@ombrio.io"
                  buttonText="Contact Us"
                  buttonUrl="/contact/general-inquiries"
                />
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default ContactCards;
