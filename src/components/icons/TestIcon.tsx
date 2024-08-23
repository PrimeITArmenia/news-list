import React from "react";

interface IconProps {
  width: string;
  height: string;
  color: string;
}

export const TestIcon: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 15h2v2h-2zm0-10h2v8h-2zm1-6a1 1 0 00-1 1v3h2V7a1 1 0 00-1-1z" />
    </svg>
  );
};
