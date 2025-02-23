import React from 'react';
import { Metadata, NextPage } from 'next';
import { LayoutBreak, LayoutWrapper } from '../LayoutWrapper';
import WideContainer from '../WideContainer';
import HeadBanner from '../HeadBanner';
import StandardContainer from '../StandardContainer';
import ContactCards from './ContactCards';
import Breadcrumb from '../Breadcrumb';
import TableOfContents from '../TableOfContents';

const title = 'Contact | Ombrio';
const description =
  'Get in touch with Ombrio. Reach out for inquiries, support, or to learn more about our AI and web development services. We’re here to help your business succeed.';
const imageUrl = '/OG.jpg';
const twitterImageUrl = '/Twitter.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://ombrio-website.vercel.app/'),
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
        alt: 'Ombrio - Contact',
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
  const sections = [{ name: 'Contact Info', id: 'contact-info' }];

  return (
    <LayoutWrapper>
      <WideContainer>
        <Breadcrumb />
      </WideContainer>

      <WideContainer>
        <HeadBanner slug="contact" />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="contact-info">
        <ContactCards />
      </StandardContainer>

      <LayoutBreak />
    </LayoutWrapper>
  );
};

export default Contact;
