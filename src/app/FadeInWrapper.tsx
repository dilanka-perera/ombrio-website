"use client";

import { useEffect, useState } from "react";

const FadeInWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`${className} content ${isMounted ? "fade-in" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInWrapper;
