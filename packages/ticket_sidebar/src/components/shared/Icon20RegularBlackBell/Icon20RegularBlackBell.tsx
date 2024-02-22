/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon20LineBlackBell125 } from "../../../icons/Icon20LineBlackBell125";
import "./style.css";

interface Props {
  className: any;
  icon:any;
}

export const Icon20RegularBlackBell = ({
  className,
  icon = <Icon20LineBlackBell125 className="icon-20-line-black-bell-126" />,
}: Props): JSX.Element => {
  return <div className={`icon-20-regular-black-bell ${className}`}>{icon}</div>;
};
