import { Metadata } from 'next';
import Carousel from './Carousel';
import ExploreOurBlog from './ExploreOurBlog';
import ContactBanner from './ContactBanner';
import OurJourney from './OurJourney';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import WideContainer from './WideContainer';
import StandardContainer from './StandardContainer';
import { LayoutBreak, LayoutWrapper } from './LayoutWrapper';
import TableOfContents from './TableOfContents';

const title = 'Ombrio | AI and Web Development';
const description =
  'Ombrio is a cutting-edge AI and web development company. We create innovative solutions like AI-powered applications, custom web platforms, and wireless technologies to help businesses excel in the digital world.';
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
        alt: 'Ombrio - AI and Web Development',
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

// Define sections for Table of Contents
const sections = [
  { name: 'What We Do', id: 'what-we-do' },
  { name: 'Why Us', id: 'why-choose-us' },
  { name: 'About Us', id: 'our-journey' },
  { name: 'Our Blog', id: 'explore-our-blog' },
];

export default function Home() {
  return (
    <LayoutWrapper>
      <WideContainer>
        <Carousel />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="what-we-do">
        <WhatWeDo />
      </StandardContainer>

      <WideContainer id="why-choose-us">
        <WhyChooseUs />
      </WideContainer>

      <StandardContainer id="our-journey">
        <OurJourney />
      </StandardContainer>

      <StandardContainer id="explore-our-blog">
        <ExploreOurBlog />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
}
