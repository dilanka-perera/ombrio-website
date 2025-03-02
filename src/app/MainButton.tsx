import Link from 'next/link';

interface ButtonProps {
  text: string;
  link: string;
}

const MainButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="inline-block border-l-2 border-yellow-500 bg-white text-black font-normal text-sm sm:text-base md:text-lg px-6 py-3 shadow-lg min-w-[200px] text-center rounded hover:bg-slate-200"
    >
      {text}
    </Link>
  );
};

export default MainButton;
