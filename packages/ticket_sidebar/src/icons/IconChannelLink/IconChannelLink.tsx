/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconChannelLink = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-channel-link ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M23.1665 29.6018C26.7563 29.6018 29.6665 26.6917 29.6665 23.1018C29.6665 19.512 26.7563 16.6018 23.1665 16.6018C19.5766 16.6018 16.6665 19.512 16.6665 23.1018C16.6665 26.6917 19.5766 29.6018 23.1665 29.6018Z"
        fill="#06C494"
        opacity="0.8"
      />
      <path
        className="path"
        d="M15.4473 17.6333L11.7368 23.4213C10.6548 25.1092 8.33408 25.4587 6.80295 24.1642V24.1642C5.5206 23.0801 5.25076 21.2086 6.1746 19.8064L10.0001 13.9999L12.6667 15.9999"
        stroke="#1C1C28"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M11.2971 11.8411L15.3212 6.16918C16.4324 4.60294 18.6029 4.23406 20.1691 5.34526V5.34526C21.7353 6.45646 22.1042 8.62696 20.993 10.1932L16.969 15.8651L14.1331 13.8531"
        stroke="#1C1C28"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
