import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { ListItem, ListItemProps } from './ListItem';
export default {
  title:'ListItem',
  component: ListItem,
  argTypes: {
    backgroundColor: {
      control:'color'
    },
    color: {
      control: 'color'
    }
  }
} as Meta;
const Template: Story<ListItemProps> = (args) =><ListItem {...args} />

export const Primary = Template.bind({});

Primary.args = {
  title: 'hola',
  color: '#00f',
  backgroundColor: 'black'
}

export const Secondary = Template.bind({});

Secondary.args = {
  title: 'adios',
  color: '#f0f',
  backgroundColor: 'purple'
}
