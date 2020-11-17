import React from 'react';
import styled from 'styled-components';
import {theme} from '../style';
const {colors, fontSizes} = theme;

const Input = styled.TextInput`
  width: 270px;
  padding: 7px;
  font-size: ${fontSizes.md};
  background-color: ${colors.text};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const TextInput = (props) => {
  return <Input {...props} />;
};

export default TextInput;
