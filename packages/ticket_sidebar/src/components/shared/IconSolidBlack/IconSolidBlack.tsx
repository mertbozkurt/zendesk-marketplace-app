/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon20SolidBlackTrendup10 } from "../../../icons/Icon20SolidBlackTrendup10";
import "./style.css";

interface Props {
  className: any;
  icon20SolidBlackTrendup10StyleOverrideClassName: any;
  icon20SolidBlackTrendup10Color: string;
}

export const IconSolidBlack = ({
  className,
  icon20SolidBlackTrendup10StyleOverrideClassName,
  icon20SolidBlackTrendup10Color = "black",
}: Props): JSX.Element => {
  return (
    <div className={`icon-solid-black ${className}`}>
      <Icon20SolidBlackTrendup10
        className={icon20SolidBlackTrendup10StyleOverrideClassName}
        color={icon20SolidBlackTrendup10Color}
      />
    </div>
  );
};

IconSolidBlack.propTypes = {
  icon20SolidBlackTrendup10Color: PropTypes.string,
};
