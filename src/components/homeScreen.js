import React from 'react';
import styled from 'styled-components';
import {mixins} from '../style';
import ReverseLogo from '../util/reverseLogo'
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';

// //root
const Root = styled.View`
  ${mixins.centerScreen};
`;

const Title = styled.Text`
  font-size: 30px;
  color: white;
  margin: 15px 0;
`;

const SecondaryParagraph = styled.Text`

`

const ScreenStack = () => {
  return (
    <Root>
        <ReverseLogo />
      <Title>Currency Coverter</Title>
      <FirstRow />
      <SecondRow />
      <SecondaryParagraph>Dolllar currency is on it's peak.</SecondaryParagraph>
    </Root>
  );
};

export default ScreenStack;
