'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Topic from './Topic';
import MainButton from './MainButton';

const OurJourney: React.FC = () => {
  // Ref for the entire component
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

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, y: translateY }}
      className="pb-8"
    >
      {/* Section Title */}
      <motion.div style={{ opacity, y: translateY }} className="pt-10">
        <Topic text="Discover Who We Are" />
      </motion.div>

      <motion.div style={{ opacity, y: translateY }} className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          At <strong>Ombrio</strong>, we are driven by a passion for technology
          and a commitment to innovation. Our team of experts leverages the
          latest advancements in AI and web development to create solutions that
          empower businesses to thrive. We believe in pushing boundaries to
          deliver exceptional results and help our clients navigate the digital
          age with confidence.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Learn more about our journey, our mission, and how we bring
          transformative solutions to businesses around the globe.
        </p>

        <div className="pt-6 sm:flex items-end">
          <div className="mr-6 mb-4 sm:mb-0">
            <MainButton text="View Our Story" link="/about" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OurJourney;
