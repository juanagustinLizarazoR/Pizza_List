import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextFieldProps, TextField } from './TextField';

export default {
  title: 'Textos/TextField',
  component: TextField,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' }
      ]
    }
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: true,
  disabled: false,
  backgroundColor: '#f69',
  label: 'hello'
};