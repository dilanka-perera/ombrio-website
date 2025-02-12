import Image from 'next/image';
import Topic from '../Topic';
// import MainButton from "../MainButton";

interface ContactCardProps {
  imageSrc: string;
  title: string;
  description: string;
  email: string;
  buttonText: string;
  buttonUrl: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  imageSrc,
  title,
  description,
  email,
  //   buttonText,
  //   buttonUrl,
}) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden md:px-20 py-8 w-full mx-auto text-center">
      <Image
        className="pb-5"
        src={imageSrc}
        alt={title}
        width={150}
        height={150}
        unoptimized
      />

      <Topic text={title} />
      <p className="text-center mt-5 text-base sm:text-lg md:text-xl">
        {description}
      </p>
      <p className="text-center mt-2 mb-5 text-sm sm:text-base md:text-lg text-blue-600">
        Email: {email}
      </p>

      {/* <MainButton text={buttonText} link={buttonUrl} /> */}
    </div>
  );
};

export default ContactCard;
