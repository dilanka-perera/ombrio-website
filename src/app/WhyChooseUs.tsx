'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useData } from '@/contexts/DataContext';
import ImageSnippets from './ImageSnippets';
import StandardContainer from './StandardContainer';
import Topic from './Topic';

const WhyChooseUs: React.FC = () => {
  const { tileCollections } = useData();
  const tileCollection = tileCollections.find(
    (item) => item.slug === 'why-choose-us',
  );

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  if (!tileCollection) {
    return null;
  }

  const topics = tileCollection.tiles.map((tile) => ({
    slug: tile.slug,
    title: tile.title,
    description: tile.description,
    imageSrc: `https:${tile.image}`,
  }));

  return (
    <div
      ref={sectionRef}
      className="bg-white bg-opacity-20 shadow-lg backdrop-blur-lg"
    >
      <StandardContainer>
        <motion.div
          style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
        >
          <div className="pt-10">
            <Topic text="Why Choose Us?" />
          </div>

          <div className="pt-6">
            <ImageSnippets topics={topics} />
          </div>
        </motion.div>
      </StandardContainer>
    </div>
  );
};

export default WhyChooseUs;
