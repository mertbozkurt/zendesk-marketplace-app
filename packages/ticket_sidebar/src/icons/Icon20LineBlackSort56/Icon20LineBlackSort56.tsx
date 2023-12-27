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

export const Icon20LineBlackSort56 = ({ color = "#1C1C28", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-line-black-sort-56 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_2346_20842)">
        <path
          className="path"
          d="M13.2538 10.9371H6.72426C5.47604 10.9371 4.84285 12.4531 5.7323 13.3358L9.00954 16.6159C9.55487 17.1651 10.4481 17.1651 10.997 16.6159L14.2508 13.3358C15.1282 12.4542 14.5308 10.9371 13.2538 10.9371ZM10 15.6231L6.74623 12.3429H13.2802L10 15.6231ZM6.72045 9.03641H13.2749C14.5232 9.03641 15.1563 7.5205 14.2669 6.63779L10.9929 3.3831C10.4475 2.83396 9.55428 2.83396 9.00544 3.3831L5.75163 6.66327C4.84666 7.54569 5.46875 9.03641 6.72045 9.03641ZM10 4.37594L13.2538 7.6561H6.72045L10 4.37594Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_2346_20842">
          <rect className="rect" fill="white" height="14.995" transform="translate(5.31403 2.50248)" width="9.37191" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icon20LineBlackSort56.propTypes = {
  color: PropTypes.string,
};
