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

export const StateDefaultSizeXxsRadiusXlColorDarkTypeLightIconrightOffIconleftOff = ({
  className,
  text = "XXsmall",
}: Props): JSX.Element => {
  return (
    <div className={`state-default-size-XXS-radius-XL-color-dark-type-light-iconright-off-iconleft-off ${className}`}>
      <div className="type-no-icon-action-3">
        <div className="x-xsmall-3">{text}</div>
      </div>
    </div>
  );
};

StateDefaultSizeXxsRadiusXlColorDarkTypeLightIconrightOffIconleftOff.propTypes = {
  text: PropTypes.string,
};
