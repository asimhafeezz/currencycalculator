import React from 'react';
import styled from 'styled-components';
import TextInput from '../util/TextInput';
import Button from '../util/Button';
//root
const Root = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

const SecondRow = () => {
  return (
    <Root>
        <Button onPressFunction={()=> console.log('hello')}>UAD</Button>
      <TextInput />
    </Root>
  );
};

export default SecondRow;
