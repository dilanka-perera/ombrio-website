"use client";

import React from "react";

interface TopicProps {
  text: string; // The main topic text
}

const Topic: React.FC<TopicProps> = ({ text }) => {
  return (
    <div className="relative font-medium text-2xl sm:text-3xl md:text-4xl px-8 uppercase">
      {text}
      <div className="bottom-0 w-14 sm:w-16 md:w-20 h-1 bg-yellow-500 mt-1" />
    </div>
  );
};

export default Topic;
