import React from 'react';

export interface ListItemProps {
  title?: string;
  color?: string;
  backgroundColor?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  title = 'Item 1',
  color = 'blue',
  ... props
}) => (
  <li 
    style={{
      color: color,
      backgroundColor: props.backgroundColor
    }}
    >
      {title}
  </li>
);