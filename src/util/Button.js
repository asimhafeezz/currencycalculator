import React from 'react';
import {Text, Pressable} from 'react-native';
import styled from 'styled-components';
import {theme} from '../style';

const {fontSizes, colors} = theme;

const PressableStyledView = styled.View`
  padding: 11px 20px;
  background-color: ${({pressed}) => (pressed ? 'white' : '#d8d6d6')};
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const ButtonTitle = styled.Text`
  font-size: ${fontSizes.md};
  font-weight: 400;
`;

const Button = ({children, onPressFunction}) => {
  return (
    <Pressable onPress={() => onPressFunction()}>
      {({pressed}) => (
        <PressableStyledView pressed={pressed}>
          <ButtonTitle>{children}</ButtonTitle>
        </PressableStyledView>
      )}
    </Pressable>
  );
};

export default Button;
