import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Input,InputProps} from './Input';

export default {
  component: Input,
  title: 'Input',
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story /></div>],
  argTypes: {
    color: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color'
    }
  },
  args: {
    label: 'Last',
    color: '#00f',
    backgroundColor: '#000',
    disabled: true
  }
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Input {...args} />
);

export const InputOne = Template.bind({});

InputOne.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value:'#f00' },
      { name: 'green', value:'#0f0' },
      { name: 'blue', value: '#00f' }
    ]
  }
}

