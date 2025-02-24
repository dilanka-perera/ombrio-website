'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Topic from './Topic';
import MainButton from './MainButton';

const OurJourney: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
      className="pb-8"
    >
      <div className="pt-10">
        <Topic text="Discover Who We Are" />
      </div>

      <div className="pt-6 px-8">
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
      </div>
    </motion.div>
  );
};

export default OurJourney;
