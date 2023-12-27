import { MasterDropdown } from ".";

export default {
  title: "Components/MasterDropdown",
  component: MasterDropdown,
  argTypes: {
    state: {
      options: ["active", "default", "master", "filled", "selected"],
      control: { type: "select" },
    },
    label: {
      options: ["dropdown", "off", "on"],
      control: { type: "select" },
    },
    size: {
      options: ["thirty-six", "default", "sixty", "thirty", "fifty", "forty"],
      control: { type: "select" },
    },
    hover: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    disabled: {
      options: ["fifty", "off", "on"],
      control: { type: "select" },
    },
    description: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    label: "dropdown",
    size: "thirty-six",
    hover: "off",
    disabled: "fifty",
    description: "off",
    className: {},
    text: "Option 1",
    iconRegularIconRegularClassName: {},
  },
};
