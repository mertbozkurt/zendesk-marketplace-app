import { ButtonCompact } from ".";

export default {
  title: "Components/ButtonCompact",
  component: ButtonCompact,
  argTypes: {
    property1: {
      options: ["default", "filled", "outline", "subtle", "disabled"],
      control: { type: "select" },
    },
    radius: {
      options: ["sixteen", "zero", "two", "thirty-two", "four", "eight"],
      control: { type: "select" },
    },
    size: {
      options: ["MD", "SM", "LG", "XL", "XS"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showRightIcon: true,
    label: "Button",
    showLeftIcon: true,
    showText: true,
    property1: "default",
    radius: "sixteen",
    size: "MD",
    className: {},
  },
};
