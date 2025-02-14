import React from 'react';
import { Metadata, NextPage } from 'next';
import WideContainer from '../WideContainer';
import HeadBanner from '../HeadBanner';
import StandardContainer from '../StandardContainer';
import Vision from './Vision';
import Mission from './Mission';
import CoreValues from './CoreValues';
import Story from './Story';
import Team from './Team';
import { LayoutBreak, LayoutWrapper } from '../LayoutWrapper';
import ContactBanner from '../ContactBanner';
import AboutUs from './AboutUs';
import Breadcrumb from '../Breadcrumb';
import TableOfContents from '../TableOfContents';

const title = 'About Us | Ombrio';
const description =
  'Ombrio is a leading AI and web development company that delivers innovative solutions. We specialize in AI-powered apps, custom web solutions, and wireless technologies to help businesses thrive in the digital age.';
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
        alt: 'Ombrio - About Us',
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

const About: NextPage = () => {
  const sections = [
    { name: 'About Us', id: 'about-us' },
    { name: 'Vision', id: 'vision' },
    { name: 'Mission', id: 'mission' },
    { name: 'Core Values', id: 'core-values' },
    { name: 'Our Story', id: 'story' },
    { name: 'Our Team', id: 'team' },
  ];

  return (
    <LayoutWrapper>
      <WideContainer>
        <Breadcrumb />
      </WideContainer>

      <WideContainer>
        <HeadBanner slug="about" />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="about-us">
        <AboutUs />
      </StandardContainer>

      <StandardContainer id="vision">
        <Vision />
      </StandardContainer>

      <StandardContainer id="mission">
        <Mission />
      </StandardContainer>

      <WideContainer id="core-values">
        <CoreValues />
      </WideContainer>

      <StandardContainer id="story">
        <Story />
      </StandardContainer>

      <StandardContainer id="team">
        <Team />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
};

export default About;
