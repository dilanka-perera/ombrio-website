import React from 'react';
import { Metadata, NextPage } from 'next';
import { LayoutBreak, LayoutWrapper } from '../LayoutWrapper';
import HeadBanner from '../HeadBanner';
import ContactCards from './ContactCards';
import Breadcrumb from '../Breadcrumb';
import TableOfContents from '../TableOfContents';
import ContactBanner from '../ContactBanner';

const title = 'Contact | Ombrio';
const description =
  'Get in touch with Ombrio. Reach out for inquiries, support, or to learn more about our AI and web development services. We’re here to help your business succeed.';
const imageUrl = '/OG.jpg';
const twitterImageUrl = '/Twitter.jpg';

export const metadata: Metadata = {
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
      <Breadcrumb />
      <HeadBanner slug="contact" />
      <TableOfContents sections={sections} />
      <ContactCards />
      <LayoutBreak />
      <ContactBanner />
    </LayoutWrapper>
  );
};

export default Contact;
