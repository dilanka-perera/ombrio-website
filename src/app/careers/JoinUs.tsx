'use client';

import React from 'react';
import TwoHalvesCareers from './TwoHalvesCareers';
import Topic from '../Topic';
import { useData } from '@/contexts/DataContext';
import MainButton from '../MainButton';
import StandardContainer from '../StandardContainer';
import WideContainer from '../WideContainer';

const JoinUs: React.FC = () => {
  const { websiteImages } = useData();

  const backgroundImage = `url('https:${
    websiteImages.find((item) => item.slug === 'background-8')?.image ||
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

        <div className="relative">
          <StandardContainer id="join">
            <div className="pt-10 pb-8 lg:pb-16">
              <div>
                <Topic text="Join Us" />
              </div>

              <TwoHalvesCareers
                title="Join the Future of AI & Web Innovation at Ombrio!"
                imageSrc={`https:${
                  websiteImages.find((item) => item.slug === 'careers-join-us')
                    ?.image || 'no.png'
                }`}
                imageFirst={true}
                content={
                  <>
                    <p>
                      At <strong>Ombrio</strong>, we&apos;re committed to
                      advancing the digital frontier with the power of
                      artificial intelligence and cutting-edge web technologies.
                      Our mission is to empower businesses with AI-driven
                      solutions and advanced web development, helping transform
                      industries with intelligent, scalable, and future-ready
                      digital experiences.
                    </p>
                    <p className="my-5">
                      We continuously push the boundaries of AI, machine
                      learning, and custom web solutions to create impactful
                      products that address real-world challenges. If
                      you&apos;re passionate about innovation and eager to make
                      a meaningful impact, we want you to be part of our team!
                    </p>
                    <MainButton
                      text="Explore Open Roles"
                      link="https://www.linkedin.com/company/ombrio-io"
                    />
                    <p className="mt-5">
                      Don&apos;t see the perfect fit? Send us your resume and
                      let&apos;s talk about how you can contribute to our
                      mission.
                    </p>
                    <p className="text-blue-900">Email: careers@ombrio.io</p>
                  </>
                }
              />
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default JoinUs;
