import Link from "next/link";

const ContactSalesBanner: React.FC = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-700 to-slate-500 h-[250px] items-center justify-center">
      <p className="text-white text-2xl sm:text-3xl md:text-4xl mb-8">
        Connect with Us
      </p>
      <Link
        href="/contact"
        className="bg-white text-slate-900 px-6 py-2 font-semibold hover:bg-slate-200 rounded text-xs sm:text-sm md:text-lg"
      >
        Contact Sales
      </Link>
    </div>
  );
};

export default ContactSalesBanner;
