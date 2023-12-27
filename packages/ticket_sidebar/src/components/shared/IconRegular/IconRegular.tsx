/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon20LineBlackPlus1 } from "../../../icons/Icon20LineBlackPlus1";
import "./style.css";

interface Props {
  className: any;
  icon: JSX.Element | undefined;
}

export const IconRegular = ({
  className,
  icon = <Icon20LineBlackPlus1 className="icon-line-black" />,
}: Props): JSX.Element => {
  return <div className={`icon-regular ${className}`}>{icon}</div>;
};
