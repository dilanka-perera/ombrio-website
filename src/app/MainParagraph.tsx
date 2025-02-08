"use client";

import React from "react";

interface MainParagraphProps {
  text: string; // The entire text with special markers for highlighted parts
}

const MainParagraph: React.FC<MainParagraphProps> = ({ text }) => {
  // Split the text by the custom delimiter (e.g., "[[highlight]]")
  const regex = /\[\[highlight\]\]([\s\S]*?)\[\[\/highlight\]\]/g;
  const parts = [];

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add the text before the match
    if (lastIndex < match.index) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    // Add the highlighted text part
    parts.push({ type: "highlight", content: match[1] });
    lastIndex = regex.lastIndex;
  }

  // Add the remaining text after the last match
  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return (
    <div className="relative italic font-bold text-xl sm:text-2xl md:text-3xl px-8 text-center pt-10">
      {parts.map((part, index) =>
        part.type === "highlight" ? (
          <span key={index} className="text-yellow-500">
            {part.content}
          </span>
        ) : (
          <span key={index}>{part.content}</span>
        )
      )}
    </div>
  );
};

export default MainParagraph;
