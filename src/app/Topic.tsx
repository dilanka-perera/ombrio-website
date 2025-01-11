"use client";

import React from "react";

interface TopicProps {
  text: string; // The main topic text
}

const Topic: React.FC<TopicProps> = ({ text }) => {
  return (
    <span className="relative text-yellow-600 font-semibold text-3xl sm:text-4xl md:text-5xl">
      {text}
    </span>
  );
};

export default Topic;
