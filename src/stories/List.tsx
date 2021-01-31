import React from 'react';
import { ListItem, ListItemProps } from './ListItem';

export interface ListProps {
  title: string;
  color: string;
  backgroundColor: string;
}

export const List: React.FC<ListProps> = ({
  title= 'Lista',
  ...props
}) =>{
  return (
    <>
      <h3 style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}>{title}</h3>
      <ul>
        {props.children}
      </ul>
    </>
  );
}