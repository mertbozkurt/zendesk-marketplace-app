/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon20LineBlackSort56 } from "../../../icons/Icon20LineBlackSort56";
import { IconLineBlack } from "../IconLineBlack";
import { IconRegular } from "../IconRegular";
import "./style.css";

interface Props {
  state: "active" | "default" | "master" | "filled" | "selected";
  label: "dropdown" | "off" | "on";
  size: "thirty-six" | "default" | "sixty" | "thirty" | "fifty" | "forty";
  hover: "off" | "on";
  disabled: "fifty" | "off" | "on";
  description: "off" | "on";
  className: any;
  text: string;
  iconRegularIconRegularClassName: any;
  iconRegularIcon: JSX.Element;
}

export const MasterDropdown = ({
  state,
  label,
  size,
  hover,
  disabled,
  description,
  className,
  text = "Option 1",
  iconRegularIconRegularClassName,
  iconRegularIcon = <IconLineBlack />,
}: Props): JSX.Element => {
  return (
    <div className={`master-dropdown ${size} ${state} ${label} ${hover} ${className}`}>
      {["default", "filled", "master", "selected"].includes(state) && (
        <div className="div">
          {label === "off" && (
            <div className={`auto-layout disabled-${disabled} size-0-${size} state-${state} hover-${hover}`}>
              {["fifty", "forty", "sixty", "thirty-six"].includes(size) && (
                <>
                  <div className="placeholder">
                    {state === "default" && <>Select</>}

                    {state === "selected" && disabled === "off" && <>{text}</>}

                    {(disabled === "on" || state === "filled") && (
                      <div className="option">
                        {hover === "on" && <>{text}</>}

                        {hover === "off" && <>Select</>}
                      </div>
                    )}
                  </div>
                  <IconRegular
                    className={`${
                      size === "sixty" &&
                      (disabled === "off" || state === "default") &&
                      ["selected", "default"].includes(state) &&
                      "class"
                    } ${
                      size === "fifty" &&
                      (disabled === "off" || state === "default") &&
                      ["selected", "default"].includes(state) &&
                      "class-2"
                    } ${
                      size === "forty" &&
                      (disabled === "off" || state === "default") &&
                      ["selected", "default"].includes(state) &&
                      "class-3"
                    } ${
                      size === "thirty-six" &&
                      (disabled === "off" || state === "default") &&
                      ["selected", "default"].includes(state) &&
                      "class-4"
                    } ${(disabled === "on" || state === "filled") && iconRegularIconRegularClassName}`}
                    icon={
                      state === "default" || (disabled === "off" && state === "selected") ? (
                        <IconLineBlack />
                      ) : undefined
                    }
                  />
                </>
              )}

              {size === "thirty" && (
                <div className="auto-layout-2">
                  <div className="master-input">
                    <div className="text-wrapper">Select</div>
                  </div>
                  <div className="icon-line-black-wrapper">
                    <Icon20LineBlackSort56 className="icon-20-line-black-sort-40" color="#BFC3D7" />
                  </div>
                </div>
              )}
            </div>
          )}

          {["dropdown", "on"].includes(label) && (
            <div className="auto-layout-3">
              <div className={`text-wrapper-2 disabled-1-${disabled} size-3-${size}`}>Label</div>
              <div className="text-wrapper-3">*</div>
            </div>
          )}

          {description === "off" && label === "on" && (
            <div className={`auto-layout-4 state-3-${state} disabled-2-${disabled} size-5-${size}`}>
              <div className="placeholder-wrapper">
                <div className="placeholder-2">
                  {(disabled === "on" || hover === "off") && <>Select</>}

                  {hover === "on" && disabled === "off" && <>{text}</>}
                </div>
              </div>
              <IconRegular className={iconRegularIconRegularClassName} icon={iconRegularIcon} />
            </div>
          )}

          {description === "on" && (
            <>
              <div className="text-wrapper-4">This is a description</div>
              <div className="auto-layout-5">
                <div className="master-input-2">
                  <div className="placeholder-3">Select</div>
                </div>
                <IconRegular
                  className={`${
                    size === "forty"
                      ? "class-3"
                      : size === "thirty-six"
                      ? "class-4"
                      : hover === "on"
                      ? "class-2"
                      : "class"
                  }`}
                  icon={<IconLineBlack />}
                />
              </div>
            </>
          )}
        </div>
      )}

      {state === "active" && (
        <>
          <div className="frame">
            <div className="component">
              {label === "on" && (
                <>
                  <div className="auto-layout-3">
                    <div className="text-wrapper-5">Label</div>
                    <div className="text-wrapper-6">*</div>
                  </div>
                  <div className="auto-layout-6">
                    <div className="div-wrapper">
                      <div className="placeholder-4">Select</div>
                    </div>
                    <div className="icon-20-line-black-sort-56-wrapper">
                      <Icon20LineBlackSort56 className="icon-20-line-black-sort-40" color="#BFC3D7" />
                    </div>
                  </div>
                </>
              )}

              {label === "off" && (
                <div className="auto-layout-7">
                  <div className="master-input-3">
                    <div className="placeholder-5">Select</div>
                  </div>
                  <div className="icon-20-line-black-sort-40-wrapper">
                    <Icon20LineBlackSort56 className="icon-20-line-black-sort-40" color="#BFC3D7" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <div className="text-wrapper-7">Option1</div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-8">Option2</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-9">Option3</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

MasterDropdown.propTypes = {
  state: PropTypes.oneOf(["active", "default", "master", "filled", "selected"]),
  label: PropTypes.oneOf(["dropdown", "off", "on"]),
  size: PropTypes.oneOf(["thirty-six", "default", "sixty", "thirty", "fifty", "forty"]),
  hover: PropTypes.oneOf(["off", "on"]),
  disabled: PropTypes.oneOf(["fifty", "off", "on"]),
  description: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
