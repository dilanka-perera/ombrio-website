"use client";

import React, { useState, useEffect } from "react";
import StandardContainer from "./StandardContainer";

interface Section {
  name: string;
  id: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80); // Default offset

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 325) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Dynamically get header height
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.clientHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = headerHeight + 20; // Adding extra spacing to ensure visibility

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`z-30 transition-all duration-300 ${
        isSticky ? "fixed top-[79px] left-0 w-full" : "relative"
      }`}
    >
      <div className="max-w-[1920px] mx-auto bg-white ring-1 ring-gray-500/10 shadow-md">
        <StandardContainer>
          <div className="px-6 h-[40px] font-normal flex items-center  space-x-8">
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
        </StandardContainer>
      </div>
    </div>
  );
};

export default TableOfContents;
