/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
}

export const StateDefaultSizeXxsRadiusXlColorRedTypeLightIconrightOffIconleftOff = ({
  className,
  text = "XXsmall",
}: Props): JSX.Element => {
  return (
    <div className={`state-default-size-XXS-radius-XL-color-red-type-light-iconright-off-iconleft-off ${className}`}>
      <div className="type-no-icon-action-2">
        <div className="x-xsmall-2">{text}</div>
      </div>
    </div>
  );
};

StateDefaultSizeXxsRadiusXlColorRedTypeLightIconrightOffIconleftOff.propTypes = {
  text: PropTypes.string,
};
