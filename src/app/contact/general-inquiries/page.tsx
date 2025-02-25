import React from 'react';
import { Metadata, NextPage } from 'next';
import { LayoutBreak, LayoutWrapper } from '@/app/LayoutWrapper';
import WideContainer from '@/app/WideContainer';
import Breadcrumb from '@/app/Breadcrumb';
import StandardContainer from '@/app/StandardContainer';
import ContactGeneral from './ContactGeneral';

const title = 'Contact Services | Ombrio';
const description =
  'Get in touch with Ombrio. Reach out for inquiries, support, or to learn more about our AI and web development services. We’re here to help your business succeed.';
const imageUrl = '/OG.jpg';
const twitterImageUrl = '/Twitter.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://ombrio.vercel.app/'),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Ombrio - Contact Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [twitterImageUrl],
  },
};

const Contact: NextPage = () => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-blue-950 bg-opacity-80 backdrop-blur-lg flex flex-grow overflow-hidden">
      <LayoutWrapper>
        <WideContainer>
          <Breadcrumb
            nameReplacer={{
              'general-inquiries': 'General Inquiries',
            }}
          />
        </WideContainer>

        <StandardContainer>
          <ContactGeneral />
        </StandardContainer>

        <LayoutBreak />
      </LayoutWrapper>
    </div>
  );
};

export default Contact;
