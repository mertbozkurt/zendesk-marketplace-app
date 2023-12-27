import { Tooltip } from ".";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    button: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    point: {
      options: [
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
      ],
      control: { type: "select" },
    },
    addColor: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    button: "off",
    point: "up-center",
    addColor: "off",
    className: {},
    frameSmallOffDivClassName: {},
    frameSmallOffText: "Pi App Tooltip",
    rectangle: "/img/rectangle-294-13.svg",
  },
};
