/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon20RegularBlackBell } from "../Icon20RegularBlackBell";
import { Icon20RegularBlackCheck } from "../Icon20RegularBlackCheck";
import { IconLineBlack } from "../IconLineBlack";
import { IconLineBlackWrapper } from "../IconLineBlackWrapper";
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
  icon20RegularBlackCheckIcon: JSX.Element;
}

export const ButtonCompact = ({
  showRightIcon = true,
  label = "Button",
  showLeftIcon = true,
  showText = true,
  property1,
  radius,
  size,
  className,
  icon20RegularBlackCheckIcon = <IconLineBlack />,
}: Props): JSX.Element => {
  return (
    <button className={`button-compact property-1-0-${property1} radius-${radius} size-0-${size} ${className}`}>
      {showLeftIcon && (
        <>
          <>
            {((property1 === "default" && radius === "eight" && size === "SM") ||
              (property1 === "default" && radius === "four" && size === "LG") ||
              (property1 === "default" && radius === "four" && size === "MD") ||
              (property1 === "default" && radius === "four" && size === "SM") ||
              (property1 === "default" && radius === "four" && size === "XL") ||
              (property1 === "default" && radius === "sixteen") ||
              (property1 === "default" && radius === "thirty-two") ||
              (property1 === "default" && radius === "two" && size === "SM") ||
              (property1 === "default" && radius === "zero" && size === "SM") ||
              (property1 === "disabled" && radius === "eight" && size === "SM") ||
              (property1 === "disabled" && radius === "four") ||
              (property1 === "disabled" && radius === "sixteen") ||
              (property1 === "disabled" && radius === "thirty-two") ||
              (property1 === "disabled" && radius === "two" && size === "SM") ||
              (property1 === "disabled" && radius === "zero" && size === "MD") ||
              (property1 === "disabled" && radius === "zero" && size === "SM") ||
              (property1 === "filled" && radius === "four" && size === "LG") ||
              (property1 === "filled" && radius === "four" && size === "MD") ||
              (property1 === "filled" && radius === "four" && size === "XL") ||
              (property1 === "filled" && radius === "four" && size === "XS") ||
              (property1 === "filled" && radius === "sixteen" && size === "LG") ||
              (property1 === "filled" && radius === "sixteen" && size === "MD") ||
              (property1 === "filled" && radius === "sixteen" && size === "XL") ||
              (property1 === "filled" && radius === "sixteen" && size === "XS") ||
              (property1 === "filled" && radius === "thirty-two" && size === "LG") ||
              (property1 === "filled" && radius === "thirty-two" && size === "MD") ||
              (property1 === "filled" && radius === "thirty-two" && size === "XL") ||
              (property1 === "filled" && radius === "thirty-two" && size === "XS") ||
              (property1 === "filled" && radius === "zero" && size === "MD") ||
              (property1 === "filled" && size === "SM") ||
              (property1 === "outline" && radius === "eight" && size === "SM") ||
              (property1 === "outline" && radius === "four") ||
              (property1 === "outline" && radius === "sixteen") ||
              (property1 === "outline" && radius === "thirty-two") ||
              (property1 === "outline" && radius === "two" && size === "SM") ||
              (property1 === "outline" && radius === "zero" && size === "MD") ||
              (property1 === "outline" && radius === "zero" && size === "SM") ||
              (property1 === "subtle" && size === "MD") ||
              (property1 === "subtle" && size === "SM") ||
              (radius === "eight" && size === "LG") ||
              (radius === "eight" && size === "MD") ||
              (radius === "eight" && size === "XL") ||
              (radius === "eight" && size === "XS") ||
              (radius === "two" && size === "LG") ||
              (radius === "two" && size === "MD") ||
              (radius === "two" && size === "XL") ||
              (radius === "two" && size === "XS") ||
              (radius === "zero" && size === "LG") ||
              (radius === "zero" && size === "XL") ||
              (radius === "zero" && size === "XS")) && (
              <Icon20RegularBlackCheck
                className={`${
                  ((property1 === "default" && radius === "eight" && size === "SM") ||
                    (property1 === "default" && radius === "four" && size === "MD") ||
                    (property1 === "default" && radius === "four" && size === "SM") ||
                    (property1 === "default" && radius === "four" && size === "XL") ||
                    (property1 === "default" && radius === "sixteen") ||
                    (property1 === "default" && radius === "thirty-two") ||
                    (property1 === "default" && radius === "two" && size === "SM") ||
                    (property1 === "default" && radius === "zero" && size === "SM") ||
                    (property1 === "disabled" && radius === "eight" && size === "SM") ||
                    (property1 === "disabled" && radius === "four") ||
                    (property1 === "disabled" && radius === "sixteen") ||
                    (property1 === "disabled" && radius === "thirty-two") ||
                    (property1 === "disabled" && radius === "two" && size === "SM") ||
                    (property1 === "disabled" && radius === "zero" && size === "SM") ||
                    (property1 === "filled" && radius === "four" && size === "LG") ||
                    (property1 === "filled" && radius === "four" && size === "MD") ||
                    (property1 === "filled" && radius === "four" && size === "XL") ||
                    (property1 === "filled" && radius === "four" && size === "XS") ||
                    (property1 === "filled" && radius === "sixteen" && size === "LG") ||
                    (property1 === "filled" && radius === "sixteen" && size === "MD") ||
                    (property1 === "filled" && radius === "sixteen" && size === "XL") ||
                    (property1 === "filled" && radius === "sixteen" && size === "XS") ||
                    (property1 === "filled" && radius === "thirty-two" && size === "LG") ||
                    (property1 === "filled" && radius === "thirty-two" && size === "MD") ||
                    (property1 === "filled" && radius === "thirty-two" && size === "XL") ||
                    (property1 === "filled" && radius === "thirty-two" && size === "XS") ||
                    (property1 === "filled" && size === "SM") ||
                    (property1 === "outline" && radius === "eight" && size === "SM") ||
                    (property1 === "outline" && radius === "four") ||
                    (property1 === "outline" && radius === "sixteen") ||
                    (property1 === "outline" && radius === "thirty-two") ||
                    (property1 === "outline" && radius === "two" && size === "SM") ||
                    (property1 === "outline" && radius === "zero" && size === "SM") ||
                    (property1 === "subtle" && size === "SM") ||
                    (radius === "eight" && size === "LG") ||
                    (radius === "eight" && size === "MD") ||
                    (radius === "eight" && size === "XL") ||
                    (radius === "eight" && size === "XS") ||
                    (radius === "two" && size === "LG") ||
                    (radius === "two" && size === "MD") ||
                    (radius === "two" && size === "XL") ||
                    (radius === "two" && size === "XS") ||
                    (radius === "zero" && size === "LG") ||
                    (radius === "zero" && size === "MD") ||
                    (radius === "zero" && size === "XL") ||
                    (radius === "zero" && size === "XS")) &&
                  "instance-node"
                } ${property1 === "default" && radius === "four" && size === "LG" && "class-9"}`}
                icon={icon20RegularBlackCheckIcon}
              />
            )}

            {property1 === "default" &&
              ["four", "zero"].includes(radius) &&
              (radius === "four" || size === "MD") &&
              (radius === "zero" || size === "XS") &&
              ["XS", "MD"].includes(size) && (
                <Icon20RegularBlackBell
                  className="icon-20-regular-black-bell-instance"
                  icon={<Icon20RegularBlackCheck className="instance-node" icon={<IconLineBlack />} />}
                />
              )}
          </>
        </>
      )}

      {showText && <div className="button-2">{label}</div>}

      {showRightIcon && (
        <Icon20RegularBlackBell className="icon-20-regular-black-bell-instance" icon={<IconLineBlackWrapper />} />
      )}
    </button>
  );
};

ButtonCompact.propTypes = {
  showRightIcon: PropTypes.bool,
  label: PropTypes.string,
  showLeftIcon: PropTypes.bool,
  showText: PropTypes.bool,
  property1: PropTypes.oneOf(["default", "filled", "outline", "subtle", "disabled"]),
  radius: PropTypes.oneOf(["sixteen", "zero", "two", "thirty-two", "four", "eight"]),
  size: PropTypes.oneOf(["MD", "SM", "LG", "XL", "XS"]),
};
