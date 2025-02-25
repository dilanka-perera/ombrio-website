'use client';

import { useData } from '@/contexts/DataContext';
import Topic from '../Topic';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Team: React.FC = () => {
  const { teams } = useData();
  const team = teams.find((item) => item.slug === 'management-team');

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start -100px'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  if (!team) {
    return null;
  }

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
      className="pt-6 pb-8"
    >
      {/* Section Title */}
      <div>
        <Topic text="Meat the Team" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Our team is a dynamic and diverse group of talented professionals who
          are curious, driven, and passionate about excellence. Meet the
          brilliant minds behind <strong>Ombrio</strong>, and see how our
          combined expertise is shaping the future of technology.
        </p>
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          {team.teamMembers.map((member) => (
            <div key={member.slug} className="flex flex-col items-center">
              <Image
                src={member.profilePicture}
                alt={`${member.firstName} ${member.lastName}`}
                width={300}
                height={300}
                className="rounded-full mb-4"
                unoptimized
              />
              <h3 className="text-xl font-semibold">{`${member.firstName} ${member.lastName}`}</h3>
              <p className="text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
