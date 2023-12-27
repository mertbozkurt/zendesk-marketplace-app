/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { MouseEventHandler } from "react";
import { Icon20LineBlackAngledown64 } from "../../../icons/Icon20LineBlackAngledown64";
import { Icon20RegularBlackAngledown } from "../Icon20RegularBlackAngledown";
import { Icon20RegularBlackCheck } from "../Icon20RegularBlackCheck";
import { IconLineBlack } from "../IconLineBlack";
import "./style.css";

interface Props {
  showRightIcon: boolean;
  label: string;
  showLeftIcon: boolean;
  showText: boolean;
  property1: "default" | "filled" | "outline" | "subtle" | "disabled";
  radius: "sixteen" | "zero" | "two" | "thirty-two" | "four" | "eight";
  size: "MD" | "SM" | "LG" | "XL" | "XS";
  className: any;
  override?: JSX.Element;
  divClassName: any;
  clickFunc:   Function | undefined 
}
// const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
//   // Your event handling logic here
//   console.log (" handle click" + event)
// };

export const ButtonDefault = ({
  showRightIcon = true,
  label = "Button",
  showLeftIcon = true,
  showText = true,
  property1,
  radius,
  size,
  className,
  override = <Icon20RegularBlackCheck className="icon-20-regular-black-check-instance" icon={<IconLineBlack />} />,
  divClassName,
  clickFunc 
}: Props): JSX.Element => {
  return (
    <button className={`button-default ${property1} ${radius} ${size} ${className}`} onClick={clickFunc}>
      {showLeftIcon && <>{override}</>}

      {showText && <div className={`button ${divClassName}`}>{label}</div>}

      {showRightIcon && (
        <Icon20RegularBlackAngledown
          className="icon-regular-instance"
          icon={
            (property1 === "disabled" && size === "XL") ||
            (property1 === "filled" && size === "XL") ||
            (property1 === "outline" && size === "XL") ||
            (property1 === "subtle" && size === "XL") ||
            size === "LG" ||
            size === "SM" ||
            size === "XS" ? (
              <Icon20LineBlackAngledown64
                className="icon-20-line-black-angledown-64"
                color={
                  property1 === "filled"
                    ? "white"
                    : ["outline", "subtle"].includes(property1)
                    ? "#0D7BFF"
                    : property1 === "disabled"
                    ? "#AAAFC9"
                    : property1 === "default"
                    ? "#67709F"
                    : undefined
                }
              />
            ) : undefined
          }
        />
      )}
    </button>
  );
};

ButtonDefault.propTypes = {
  showRightIcon: PropTypes.bool,
  label: PropTypes.string,
  showLeftIcon: PropTypes.bool,
  showText: PropTypes.bool,
  property1: PropTypes.oneOf(["default", "filled", "outline", "subtle", "disabled"]),
  radius: PropTypes.oneOf(["sixteen", "zero", "two", "thirty-two", "four", "eight"]),
  size: PropTypes.oneOf(["MD", "SM", "LG", "XL", "XS"]),
  clickFunc: PropTypes.func
};
