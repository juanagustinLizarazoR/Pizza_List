import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { List, ListProps} from './List';
import * as ListItemStories from './ListItem.stories';

export default {
  title: 'List',
  component: List,
  argTypes: {
    color: {
      control: 'color'
    },
    backgroundColor: {
      control: 'color'
    }
  }
} as Meta;

const Template: Story<ListProps> = (args) => (
<List {...args} >
  <ListItemStories.Primary {...ListItemStories.Primary.args} />
</List>
  );

export const ListOne = Template.bind({});

ListOne.args = {
  title: 'Lista',
  color:'red',
  backgroundColor: 'blue',
}

