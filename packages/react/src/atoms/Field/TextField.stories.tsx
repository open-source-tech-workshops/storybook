import React from "react";
import TextField from "./TextField";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as Meta;
const Template: Story = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
