import React from 'react';
import { Metadata, NextPage } from 'next';
import WideContainer from '../WideContainer';
import HeadBanner from '../HeadBanner';
import StandardContainer from '../StandardContainer';
import { LayoutBreak, LayoutWrapper } from '../LayoutWrapper';
import ContactBanner from '../ContactBanner';
import JoinUs from './JoinUs';
import AboutZynorax from './AboutZynorax';
import WhyWorkAtZynorax from './WhyWorkAtZynorax';
import Breadcrumb from '../Breadcrumb';
import TableOfContents from '../TableOfContents';

const title = 'Careers | ZynoraX';
const description =
  'Join the ZynoraX team! Explore exciting career opportunities in AI, web development, and technology. Be part of a forward-thinking company that values innovation and growth.';
const imageUrl = '/OG.jpg';
const twitterImageUrl = '/TWITTER.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://zynorax-website-project-1.vercel.app/'),
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
        alt: 'ZynoraX - Careers',
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
      <WideContainer>
        <Breadcrumb />
      </WideContainer>

      <WideContainer>
        <HeadBanner slug="careers" />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="join">
        <JoinUs />
      </StandardContainer>

      <StandardContainer id="about-us">
        <AboutZynorax />
      </StandardContainer>

      <WideContainer id="why-us">
        <WhyWorkAtZynorax />
      </WideContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner
          title="Join Our Team"
          buttonText="Explore Open Roles"
          href="https://www.linkedin.com/company/zynorax"
        />
      </WideContainer>
    </LayoutWrapper>
  );
};

export default Careers;
