"use client";

import { useEffect, useState } from "react";

const FadeInWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after component mounts
  }, []);

  return (
    <div
      className={`flex flex-grow flex-col overflow-hidden content ${
        isMounted ? "fade-in" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
