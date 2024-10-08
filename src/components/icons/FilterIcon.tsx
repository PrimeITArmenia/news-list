import React from "react";

interface IconProps {
  width: string;
  height: string;
}

export const FilterIcon: React.FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_350_20446)">
        <path
          d="M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447716 6 0 5.55228 0 5Z"
          fill="white"
        />
        <path
          d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
          fill="white"
        />
        <path
          d="M8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H12C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14H8Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_350_20446">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
