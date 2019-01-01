import React from 'react';
import { Input } from './styled';

const CustomInput = props => {
  const { input, meta, ...rest } = props;

  return <Input {...input} {...rest} />;
};

export default CustomInput;
