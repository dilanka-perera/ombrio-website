'use client';

import { useRef } from 'react';
import Topic from '../Topic';
import { motion, useScroll, useTransform } from 'framer-motion';

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start -100px'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
      className="pt-6 pb-8"
    >
      {/* Section Title */}
      <div>
        <Topic text="Our Vision" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          To be the leading innovator in AI-driven solutions and web
          development, empowering businesses to transform through cutting-edge
          technologies, creativity, and seamless user experiences.
        </p>
      </div>
    </motion.div>
  );
};

export default Vision;
