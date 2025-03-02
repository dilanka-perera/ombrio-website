import React from 'react';
import { Metadata, NextPage } from 'next';
import HeadBanner from '../HeadBanner';
import { LayoutBreak, LayoutWrapper } from '../LayoutWrapper';
import ContactBanner from '../ContactBanner';
import JoinUs from './JoinUs';
import AboutCompany from './AboutCompany';
import WhyWorkAtCompany from './WhyWorkAtCompany';
import Breadcrumb from '../Breadcrumb';
import TableOfContents from '../TableOfContents';

const title = 'Careers | Ombrio';
const description =
  'Join the Ombrio team! Explore exciting career opportunities in AI, web development, and technology. Be part of a forward-thinking company that values innovation and growth.';
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
        alt: 'Ombrio - Careers',
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

const Careers: NextPage = () => {
  const sections = [
    { name: 'Join Us', id: 'join' },
    { name: 'About Us', id: 'about-us' },
    { name: 'Why Us', id: 'why-us' },
  ];

  return (
    <LayoutWrapper>
      <Breadcrumb />
      <HeadBanner slug="careers" />
      <TableOfContents sections={sections} />
      <JoinUs />
      <AboutCompany />
      <WhyWorkAtCompany />
      <LayoutBreak />
      <ContactBanner
        title="Join Our Team"
        buttonText="Explore Open Roles"
        href="https://www.linkedin.com/company/ombrio-io"
      />
    </LayoutWrapper>
  );
};

export default Careers;
