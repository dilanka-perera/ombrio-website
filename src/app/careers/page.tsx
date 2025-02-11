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

const title = 'Careers – ZynoraX';
const description =
  'Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.';
const imageUrl = '/OG.jpg';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: 'ZynoraX - AI and Web Development',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
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
