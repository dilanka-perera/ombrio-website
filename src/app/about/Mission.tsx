'use client';

import { useRef } from 'react';
import Topic from '../Topic';
import { motion, useScroll, useTransform } from 'framer-motion';

const Mission: React.FC = () => {
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
      className="pt-6 pb-[60px]"
    >
      {/* Section Title */}
      <div>
        <Topic text="Our Mission" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          At Ombrio, our mission is to deliver intelligent, customized AI
          solutions and world-class web development services that help
          businesses thrive in a rapidly evolving digital world. We are
          committed to fostering creativity, providing robust support, and
          building lasting partnerships that drive success and growth.
        </p>
      </div>
    </motion.div>
  );
};

export default Mission;
