import React from 'react';
import {
  FormItem,
  Label,
  InputGroup,
  InputGroupAddon,
  ButtonPlus,
  ButtonMinus,
  Message
} from './styled';

const cssDisable = {
  backgroundColor: '#f8f8f8'
};

const cssInvalid = {
  borderColor: '#d24339'
};

const makeField = Component => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  symbol,
  disabled,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  const styleDisabled = disabled === true ? cssDisable : {};
  const styleInvalid = hasError ? cssInvalid : {};
  return (
    <FormItem>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Label>{label}</Label>
        {hasError && meta.error && <Message>{meta.error}</Message>}
      </div>

      <InputGroup>
        <Component
          disabled={disabled}
          style={{ ...styleDisabled, ...styleInvalid }}
          {...input}
          {...rest}
          children={children}
        />
        <InputGroupAddon style={{ ...styleDisabled, ...styleInvalid }}>
          {symbol}
        </InputGroupAddon>
      </InputGroup>
    </FormItem>
  );
};

export default makeField;
