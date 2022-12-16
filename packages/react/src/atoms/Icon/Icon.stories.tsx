import React from "react";
import Icon from "./Icon";
import { ComponentMeta, ComponentStory, Meta, Story } from "@storybook/react";
import "@twk-ui-lib/scss/root/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { IconType } from "./Type";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;
const Template: ComponentStory<typeof Icon> = (args: IconType) => (
  <Icon {...args} />
);
const iconClickHandler = (e: Event) => {
  alert(e);
};
export const Primary = Template.bind({});
Primary.args = {
  description: "Search Icon",
};
