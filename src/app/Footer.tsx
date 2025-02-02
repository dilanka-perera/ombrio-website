import Link from "next/link";

interface FooterProps {
  fromColor: string;
  toColor: string;
  textColor: string;
  textHoverColor: string;
}

export default function Footer({
  fromColor,
  toColor,
  textColor,
  textHoverColor,
}: FooterProps) {
  return (
    <footer
      style={{
        background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
      }}
      className={` text-${textColor} p-6`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between md:items-center">
        {/* Links Section - Stacked on small screens, horizontal on larger screens */}
        <div className="flex flex-col md:flex-row gap-6 text-left mb-4 md:mb-0">
          <Link
            href="#"
            className={`text-${textColor} hover:text-${textHoverColor}`}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className={`text-${textColor} hover:text-${textHoverColor}`}
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright Section with a white border on small screens */}
        <div className="text-center border-t border-white md:border-none pt-2">
          <p>© ZynoraX 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
