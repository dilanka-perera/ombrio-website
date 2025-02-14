'use client';

import { useData } from '@/contexts/DataContext';
import Topic from '../Topic';
import Image from 'next/image';

const Team: React.FC = () => {
  const { teams } = useData();
  const team = teams.find((item) => item.slug === 'management-team');

  if (!team) {
    return null;
  }

  return (
    <div className="pt-6 pb-8">
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
    </div>
  );
};

export default Team;
