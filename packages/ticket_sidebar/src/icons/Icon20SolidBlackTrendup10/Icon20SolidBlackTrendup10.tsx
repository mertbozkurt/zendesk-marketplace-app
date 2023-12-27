/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Icon20SolidBlackTrendup10 = ({ color = "#06C494", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-solid-black-trendup-10 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_11981_1005)">
        <g className="g" clipPath="url(#clip1_11981_1005)">
          <path
            className="path"
            d="M8.62664 5.37319C8.32667 5.37319 8.08433 5.13085 8.08433 4.83088C8.08433 4.53092 8.32667 4.28857 8.62664 4.28857H11.3382C11.6381 4.28857 11.8805 4.53092 11.8805 4.83088V7.54242C11.8805 7.84238 11.6381 8.08473 11.3382 8.08473C11.0382 8.08473 10.7959 7.84238 10.7959 7.54242V6.14089L7.92503 9.01004C7.71319 9.22188 7.36916 9.22188 7.15732 9.01004L5.37279 7.22551L3.04426 9.55235C2.83242 9.76419 2.48839 9.76419 2.27655 9.55235C2.06472 9.34051 2.06472 8.99648 2.27655 8.78464L4.98809 6.07311C5.19993 5.86127 5.54396 5.86127 5.7558 6.07311L7.54202 7.85933L10.0282 5.37319H8.62664Z"
            fill={color}
          />
        </g>
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_11981_1005">
          <rect className="rect" fill="white" height="10.1231" transform="translate(2.11914 1.93848)" width="9.76154" />
        </clipPath>
        <clipPath className="clip-path" id="clip1_11981_1005">
          <rect className="rect" fill="white" height="8.67692" transform="translate(2.11914 2.6615)" width="9.76154" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icon20SolidBlackTrendup10.propTypes = {
  color: PropTypes.string,
};
