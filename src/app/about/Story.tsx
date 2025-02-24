'use client';

import { useRef } from 'react';
import Topic from '../Topic';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story: React.FC = () => {
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
      className="pb-8"
    >
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Our Story" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Founded in 2025, <strong>Ombrio</strong> began as a small group of
          passionate engineers with a vision to revolutionize the way businesses
          use technology. Over the years, we&apos;ve grown into a global leader
          in AI and web development, delivering innovative solutions to hundreds
          of clients worldwide.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Our journey has been driven by a relentless commitment to innovation,
          collaboration, and delivering transformative results. We continuously
          learn and adapt to emerging trends, ensuring our clients benefit from
          the latest advancements in technology.
        </p>
      </div>
    </motion.div>
  );
};

export default Story;
