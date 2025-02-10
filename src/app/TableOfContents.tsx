"use client";

import React, { useState } from "react";
import StandardContainer from "./StandardContainer";
import { FiChevronDown } from "react-icons/fi";

interface Section {
  name: string;
  id: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = 80; // Adjust as needed

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsOpen(false); // Close dropdown after selection
    }
  };

  return (
    <div className="max-w-[1920px] h-[40px] mx-auto bg-white ring-1 ring-gray-500/10 shadow-md">
      <div className="">
        <StandardContainer>
          {/* Desktop View */}
          <div className="hidden sm:flex px-6 h-[40px] font-normal items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={(e) => handleSectionClick(e, section.id)}
                className="font-normal text-black hover:text-slate-700"
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="sm:hidden flex px-6 h-[40px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-between items-center text-black font-normal hover:text-slate-700"
            >
              Table of Contents
              <FiChevronDown
                className={`transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isOpen && (
              <div className="absolute left-0 w-full mt-[40px] bg-white ring-1 ring-gray-500/10 shadow-md rounded-b-lg z-10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={(e) => handleSectionClick(e, section.id)}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </StandardContainer>
      </div>
    </div>
  );
};

export default TableOfContents;
