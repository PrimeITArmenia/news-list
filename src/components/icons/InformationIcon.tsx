import React from "react";

interface IconProps {
  width: string;
  height: string;
}

export const InformationIcon: React.FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 6.41667V9.33333M7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 6.31056 1.8858 5.62787 2.14963 4.99091C2.41347 4.35395 2.80018 3.7752 3.28769 3.28769C3.7752 2.80018 4.35395 2.41347 4.99091 2.14963C5.62787 1.8858 6.31056 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7C12.25 8.39239 11.6969 9.72774 10.7123 10.7123C9.72774 11.6969 8.39239 12.25 7 12.25ZM7.02917 4.66667V4.725H6.97083V4.66667H7.02917Z"
        stroke="#858C9F"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
