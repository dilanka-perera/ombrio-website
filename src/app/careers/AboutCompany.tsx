'use client';

import { useRef } from 'react';
import Topic from '../Topic';
import { motion, useScroll, useTransform } from 'framer-motion';
const AboutCompany: React.FC = () => {
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
      className="pt-10 pb-[60px]"
    >
      {/* Section Title */}
      <div>
        <Topic text="About Ombrio" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Ombrio is a leading AI and web development company dedicated to
          providing innovative solutions that drive digital transformation. With
          expertise in artificial intelligence, machine learning, and web
          technologies, we help businesses harness the power of intelligent,
          scalable solutions to tackle real-world challenges.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          We believe in the power of creativity and collaboration to push
          technological boundaries and deliver impactful, future-ready products.
          At Ombrio, we partner with businesses to create tailored solutions
          that evolve with their needs, empowering them to stay ahead in a
          fast-paced digital landscape.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          As a dynamic and growing team, we foster a culture of continuous
          learning and innovation, ensuring our clients and employees thrive in
          an ever-changing technological world.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutCompany;
