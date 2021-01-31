import React from 'react';

export interface InputProps {
  label?: string;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
}

export const Input: React.FC<InputProps> = ({
  label = 'Name',
  disabled = false,
  ...props
}) => (
  <input
    style={{
      color: props.color,
      backgroundColor: props.backgroundColor
    }}
    placeholder={label}
    disabled={disabled}/>
);