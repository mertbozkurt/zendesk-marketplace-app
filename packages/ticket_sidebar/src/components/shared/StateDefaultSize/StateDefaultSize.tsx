/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { DivWrapper } from "../DivWrapper";
import { IconSolidBlack } from "../IconSolidBlack";
import "./style.css";

interface Props {
  className: any;
  divWrapperIcon: JSX.Element;
}

export const StateDefaultSize = ({
  className,
  divWrapperIcon = <IconSolidBlack className="icon-20-solid-black-trendup" icon20SolidBlackTrendup10Color={""} icon20SolidBlackTrendup10StyleOverrideClassName={undefined} />,
}: Props): JSX.Element => {
  return (
    <div className={`state-default-size ${className}`}>
      <div className="type-no-icon-action">
        <DivWrapper className="icon-20-regular-black-xmark" icon={divWrapperIcon} />
        <div className="text-wrapper">3</div>
      </div>
    </div>
  );
};
