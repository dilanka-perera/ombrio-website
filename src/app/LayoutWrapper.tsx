import React from "react";
import FadeInWrapper from "./FadeInWrapper";

export const LayoutBreak = () => {
  return <div className="flex-grow overflow-hidden" />;
};

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const childrenArray = React.Children.toArray(children);
  let breakRendered = false;
  const beforeBreakChildren: React.ReactNode[] = [];
  const afterBreakChildren: React.ReactNode[] = [];

  childrenArray.forEach((child) => {
    if (
      React.isValidElement(child) &&
      child.type === LayoutBreak &&
      !breakRendered
    ) {
      breakRendered = true;
      return; // Skip adding the LayoutBreak to either list, we'll render it separately
    }
    if (!breakRendered) {
      beforeBreakChildren.push(child); // Collect children before the break
    } else {
      afterBreakChildren.push(child); // Collect children after the break
    }
  });

  return (
    <FadeInWrapper>
      {/* Render before the LayoutBreak */}
      <div className="overflow-hidden">{beforeBreakChildren}</div>

      {/* Render the LayoutBreak itself */}
      {breakRendered && <LayoutBreak />}

      {/* Render after the LayoutBreak */}
      <div className="overflow-hidden">{afterBreakChildren}</div>
    </FadeInWrapper>
  );
};
