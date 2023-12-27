/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon20LineBlackCheck125 } from "../../../icons/Icon20LineBlackCheck125";
import "./style.css";

interface Props {
  className: any;
  icon: JSX.Element;
}

export const Icon20RegularBlackCheck = ({
  className,
  icon = <Icon20LineBlackCheck125 className="icon-20-line-black-check-126" />,
}: Props): JSX.Element => {
  return <div className={`icon-20-regular-black-check ${className}`}>{icon}</div>;
};
