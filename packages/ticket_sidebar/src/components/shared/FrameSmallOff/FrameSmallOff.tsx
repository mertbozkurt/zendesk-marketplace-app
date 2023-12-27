/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  text: string | undefined;
  typeBasicClassName: any;
}

export const FrameSmallOff = ({
  className,
  divClassName,
  text = "Email Share",
  typeBasicClassName,
}: Props): JSX.Element => {
  return (
    <div className={`frame-small-off ${className}`}>
      <div className={`type-basic ${typeBasicClassName}`}>
        <div className={`email-share ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

FrameSmallOff.propTypes = {
  text: PropTypes.string,
};
