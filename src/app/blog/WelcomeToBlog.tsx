import { useRef } from 'react';
import Topic from '../Topic';
import { motion, useScroll, useTransform } from 'framer-motion';
const WelcomeToBlog: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start -100px'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      className="pt-10 pb-8"
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
    >
      <div>
        <Topic text="Welcome to Ombrio Blog" />
      </div>

      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          At Ombrio, we are passionate about the ever-evolving world of
          Artificial Intelligence and Web Development. Our blog serves as a hub
          where we explore cutting-edge advancements in AI, innovative web
          technologies, and trends that are shaping the future of the tech
          industry. Whether you&apos;re a developer, a tech enthusiast, or
          someone curious about the potential of AI, we aim to bring you
          insightful articles, tutorials, and updates that will keep you
          informed and inspired. Join us as we dive deep into the exciting
          intersection of AI and web development!
        </p>
      </div>
    </motion.div>
  );
};

export default WelcomeToBlog;
