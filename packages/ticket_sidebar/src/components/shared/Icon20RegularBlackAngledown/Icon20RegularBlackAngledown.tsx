/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon20LineBlackAngledown126 } from "../../../icons/Icon20LineBlackAngledown126";
import "./style.css";

interface Props {
  className: any;
  icon: JSX.Element | undefined;
}

export const Icon20RegularBlackAngledown = ({
  className,
  icon = <Icon20LineBlackAngledown126 className="icon-20-line-black-angledown-126" />,
}: Props): JSX.Element => {
  return <div className={`icon-20-regular-black-angledown ${className}`}>{icon}</div>;
};
