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

export const Check = ({ color = "black", className }: Props): JSX.Element => {
  return (
    <svg
      className={`check ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M10 3L4.5 8.5L2 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

Check.propTypes = {
  color: PropTypes.string,
};
