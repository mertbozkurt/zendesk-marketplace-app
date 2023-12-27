/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string | undefined;
  className: any;
}

export const Icon20LineBlackAngledown64 = ({ color = "#0D7BFF", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-line-black-angledown-64 ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.4279 9.75954L11.5311 14.3696C11.3829 14.5372 11.1896 14.608 10.9996 14.608C10.8095 14.608 10.6168 14.5375 10.468 14.3966L5.57118 9.75954C5.26094 9.46315 5.24805 8.97347 5.54089 8.6642C5.83503 8.3517 6.32632 8.34204 6.6343 8.63521L10.9996 12.7685L15.3648 8.63198C15.6729 8.33901 16.1622 8.35009 16.4582 8.66219C16.7501 8.97347 16.7372 9.46315 16.4279 9.75954Z"
        fill={color}
      />
    </svg>
  );
};

Icon20LineBlackAngledown64.propTypes = {
  color: PropTypes.string,
};
