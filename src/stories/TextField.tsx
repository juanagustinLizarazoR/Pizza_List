import React from 'react';
import './TextField.css';

export interface TextFieldProps {
  dark?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  label?:string
}

export const TextField: React.FC<TextFieldProps> = ({
  dark = false,
  disabled = true,
  backgroundColor,
  label,
  ...props
}) => {
  const mode = dark ? 'dark' : 'day';
  return (
    <input 
      type="text"
      className={mode}
      disabled={disabled}
      placeholder={label}
      style={{ backgroundColor }}/>
  )
}