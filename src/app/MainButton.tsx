import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

const MainButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="inline-block bg-slate-800 text-white font-semibold text-sm sm:text-base md:text-lg px-6 py-3 shadow-lg hover:bg-slate-700 min-w-[200px] text-center rounded"
    >
      {text}
    </Link>
  );
};

export default MainButton;
