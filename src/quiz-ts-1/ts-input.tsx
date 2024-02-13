import React from 'react';

import { Box } from '@mui/material';

type InputValue = string | number | MyObject;
interface MyObject {
  name: string;
  age: number;
}
interface InputDisplayProps {
  value: InputValue;
}

function InputDisplay({ value }: InputDisplayProps) {

  const renderValue = () => {
    if (typeof value === 'string') {
      return <p>String: {value}</p>;
    } else if (typeof value === 'number') {
      return <p>Number: {value}</p>;
    } else {
      return <p>Object - Name: {value.name}, Age: {value.age}</p>;
    }
  };

  return (

    <Box>
      {renderValue()}
    </Box>
  );
}

export default InputDisplay;