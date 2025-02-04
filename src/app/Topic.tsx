"use client";

import React from "react";

interface TopicProps {
  text: string; // The main topic text
}

const Topic: React.FC<TopicProps> = ({ text }) => {
  return (
    <div className="relative text-yellow-600 font-semibold text-2xl sm:text-3xl md:text-4xl px-8">
      {text}
    </div>
  );
};

export default Topic;
