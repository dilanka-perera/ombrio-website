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

  // Ref for the component
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for fade-in and slide-up effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Fade-in effect
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Slide-up effect
  const translateY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

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
    <motion.div
      ref={sectionRef}
      style={{ opacity, y: translateY }}
      className="bg-white bg-opacity-20 shadow-lg"
    >
      <StandardContainer>
        <div>
          {/* Section Title */}
          <motion.div style={{ opacity, y: translateY }} className="pt-10">
            <Topic text="Why Choose Us?" />
          </motion.div>

          {/* Image Snippets */}
          <motion.div style={{ opacity, y: translateY }} className="pt-6">
            <ImageSnippets topics={topics} />
          </motion.div>
        </div>
      </StandardContainer>
    </motion.div>
  );
};

export default WhyChooseUs;
