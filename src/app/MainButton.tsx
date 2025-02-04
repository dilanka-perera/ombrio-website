import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

const MainButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="inline-block bg-gray-800 text-white font-semibold text-sm sm:text-base md:text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200 w-[200px] text-center"
    >
      {text}
    </Link>
  );
};

export default MainButton;
