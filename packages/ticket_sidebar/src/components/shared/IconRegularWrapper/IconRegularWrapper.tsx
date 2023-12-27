/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon20LineBlackCircleplus } from "../../../icons/Icon20LineBlackCircleplus";
import "./style.css";

interface Props {
  className: any;
  icon: JSX.Element | undefined;
}

export const IconRegularWrapper = ({
  className,
  icon = <Icon20LineBlackCircleplus className="icon-20-line-black-circleplus" />,
}: Props): JSX.Element => {
  return <div className={`icon-regular-wrapper ${className}`}>{icon}</div>;
};
