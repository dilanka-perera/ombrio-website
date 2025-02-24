import Topic from '@/app/Topic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AboutCategoryProps {
  description: string;
}

const AboutCategory: React.FC<AboutCategoryProps> = ({ description }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      className="pt-10 pb-8"
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
    >
      {/* Category Title */}
      <div>
        <Topic text="Intro" />
      </div>

      {/* Category Description */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutCategory;
