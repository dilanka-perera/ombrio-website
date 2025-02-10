"use client";

import React from "react";

interface BlogTopicProps {
  text: string; // The main topic text
}

const Topic: React.FC<BlogTopicProps> = ({ text }) => {
  return (
    <div className="relative font-medium text-xl sm:text-2xl md:text-3xl px-8 uppercase">
      {text}
      <div className="bottom-0 w-14 sm:w-16 md:w-20 h-1 bg-yellow-500 mt-1" />
    </div>
  );
};

export default Topic;
