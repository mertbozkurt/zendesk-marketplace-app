/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon20LineBlackXmark1 } from "../../../icons/Icon20LineBlackXmark1";
import "./style.css";

interface Props {
  className: any;
  icon: JSX.Element;
}

export const DivWrapper = ({
  className,
  icon = <Icon20LineBlackXmark1 className="icon-20-line-black-xmark-1" />,
}: Props): JSX.Element => {
  return <div className={`div-wrapper ${className}`}>{icon}</div>;
};
