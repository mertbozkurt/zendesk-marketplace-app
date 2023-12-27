/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconChannelMail = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-channel-mail ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.375 22.2013C20.0674 22.2013 22.25 20.0187 22.25 17.3263C22.25 14.6339 20.0674 12.4513 17.375 12.4513C14.6826 12.4513 12.5 14.6339 12.5 17.3263C12.5 20.0187 14.6826 22.2013 17.375 22.2013Z"
        fill="#FF3B3B"
        opacity="0.8"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M21.1169 3H12.0584H3V18.95H21.1169V3Z"
        fillRule="evenodd"
        stroke="#1C1C28"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M3 3L12.5 11.5L21 3"
        stroke="#1C1C28"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
