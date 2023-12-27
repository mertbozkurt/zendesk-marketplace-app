/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonCompact } from "../ButtonCompact";
import { FrameSmallOff } from "../FrameSmallOff";
import { IconLineBlack } from "../IconLineBlack";
import "./style.css";

interface Props {
  size: "large" | "small";
  button: "off" | "on";
  point:
    | "up-center"
    | "down-right"
    | "up-right_1"
    | "down-center"
    | "right"
    | "up-left"
    | "up-right"
    | "down-left"
    | "down-centre"
    | "down-center_1"
    | "left"
    | "up-center_1"
    | "right-center"
    | "right-center_1";
  addColor: "off" | "on";
  className: any;
  frameSmallOffDivClassName: any;
  frameSmallOffText: string;
  rectangle: string;
}

export const Tooltip = ({
  size,
  button,
  point,
  addColor,
  className,
  frameSmallOffDivClassName,
  frameSmallOffText = "Pi App Tooltip",
  rectangle = "/img/rectangle-294-13.svg",
}: Props): JSX.Element => {
  return (
    <div className={`tooltip ${point} ${size} ${button} ${className}`}>
      {size === "large" && (
        <p className="div">
          Before would be sent in HTTP request headers as X-Api-Key Now deprecated, please use Custom.
        </p>
      )}

      {button === "on" && (
        <ButtonCompact
          className="button-compact-instance"
          icon20RegularBlackCheckIcon={<IconLineBlack />}
          label="Button"
          property1="outline"
          radius="four"
          showRightIcon={false}
          size="XS" showLeftIcon={false} showText={false}        />
      )}

      {size === "large" && (
        <>
          <div className="rectangle" />
          <img
            className="img"
            alt="Rectangle"
            src={
              point === "up-center_1"
                ? "/img/rectangle-294-6.svg"
                : point === "left"
                ? "/img/rectangle-294-7.svg"
                : point === "right"
                ? "/img/rectangle-294-8.svg"
                : ["right-center", "right-center_1"].includes(point)
                ? "/img/rectangle-294-9.svg"
                : point === "down-right"
                ? "/img/rectangle-294-10.svg"
                : ["down-center", "down-center_1", "down-left"].includes(point)
                ? "/img/rectangle-294-12.svg"
                : point === "up-right_1"
                ? "/img/frame-3357-3.svg"
                : button === "off" && point === "up-left"
                ? "/img/frame-3357-4.svg"
                : point === "up-right"
                ? "/img/frame-3357.svg"
                : "/img/frame-3357-2.svg"
            }
          />
        </>
      )}

      {((point === "left" && size === "small") ||
        (point === "up-center_1" && size === "small") ||
        (point === "up-left" && size === "small") ||
        (point === "up-right" && size === "small")) && (
        <img
          className="rectangle-2"
          alt="Rectangle"
          src={
            point === "up-center_1" && addColor === "off"
              ? "/img/rectangle-294-15.svg"
              : point === "left" && addColor === "off"
              ? "/img/rectangle-294-16.svg"
              : point === "up-center_1" && addColor === "on"
              ? "/img/rectangle-294-19.svg"
              : point === "left" && addColor === "on"
              ? "/img/rectangle-294-20.svg"
              : addColor === "on" && ["up-left", "up-right"].includes(point)
              ? "/img/frame-3372-3.svg"
              : "/img/frame-3372-1.svg"
          }
        />
      )}

      {size === "small" && (
        <FrameSmallOff
          className={`${addColor === "off" && ["up-center_1", "up-left", "up-right"].includes(point) && "class-3"} ${
            point === "left" && addColor === "off" && "class-4"
          } ${addColor === "on" && ["up-center_1", "up-left", "up-right"].includes(point) && "class-5"} ${
            point === "left" && addColor === "on" && "class-6"
          } ${
            ((addColor === "off" && point === "down-left") ||
              (addColor === "off" && point === "down-right") ||
              (addColor === "off" && point === "right") ||
              point === "down-center_1") &&
            "class-7"
          } ${
            ((addColor === "on" && point === "down-left") ||
              (addColor === "on" && point === "down-right") ||
              (addColor === "on" && point === "right") ||
              point === "down-centre") &&
            "class-8"
          }`}
          divClassName={`${["left", "up-center_1", "up-left", "up-right"].includes(point) && "class-2"} ${
            ["down-center_1", "down-centre", "down-left", "down-right", "right"].includes(point) &&
            frameSmallOffDivClassName
          }`}
          text={
            ["left", "up-center_1", "up-left", "up-right"].includes(point)
              ? "Pi App Tooltip"
              : ["down-center_1", "down-centre", "down-left", "down-right", "right"].includes(point)
              ? frameSmallOffText
              : undefined
          }
          typeBasicClassName={`${addColor === "on" && "class"}`}
        />
      )}

      {((point === "down-center_1" && size === "small") ||
        point === "down-centre" ||
        (point === "down-left" && size === "small") ||
        (point === "down-right" && size === "small") ||
        (point === "right" && size === "small")) && (
        <img
          className="rectangle-3"
          alt="Rectangle"
          src={
            point === "down-center_1"
              ? rectangle
              : point === "right" && addColor === "off"
              ? "/img/rectangle-294-14.svg"
              : point === "down-centre"
              ? "/img/rectangle-294-17.svg"
              : point === "right" && addColor === "on"
              ? "/img/rectangle-294-18.svg"
              : addColor === "on" && ["down-left", "down-right"].includes(point)
              ? "/img/frame-3371-3.svg"
              : "/img/frame-3371-1.svg"
          }
        />
      )}
    </div>
  );
};

Tooltip.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
  button: PropTypes.oneOf(["off", "on"]),
  point: PropTypes.oneOf([
    "up-center",
    "down-right",
    "up-right_1",
    "down-center",
    "right",
    "up-left",
    "up-right",
    "down-left",
    "down-centre",
    "down-center_1",
    "left",
    "up-center_1",
    "right-center",
    "right-center_1",
  ]),
  addColor: PropTypes.oneOf(["off", "on"]),
  frameSmallOffText: PropTypes.string,
  rectangle: PropTypes.string,
};
