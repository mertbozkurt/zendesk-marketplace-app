/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DivWrapper } from "../DivWrapper";
import { IconSolidBlack } from "../IconSolidBlack";
import "./style.css";

interface Props {
  className: any;
  divWrapperIcon: JSX.Element;
  text: string;
}

export const StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn = ({
  className,
  divWrapperIcon = (
    <IconSolidBlack
      className="icon-solid-black-instance"
      icon20SolidBlackTrendup10Color="#FFB702"
      icon20SolidBlackTrendup10StyleOverrideClassName="icon-20-solid-black-trendup-instance"
    />
  ),
  text = "xxsmall",
}: Props): JSX.Element => {
  return (
    <div className={`state-default-size-XXS-radius-XL-color-yellow-type-light-iconright-off-iconleft-on ${className}`}>
      <div className="type-no-icon-action-4">
        <DivWrapper className="icon-20-regular-black-xmark-instance" icon={divWrapperIcon} />
        <div className="xxsmall">{text}</div>
      </div>
    </div>
  );
};

StateDefaultSizeXxsRadiusXlColorYellowTypeLightIconrightOffIconleftOn.propTypes = {
  text: PropTypes.string,
};
