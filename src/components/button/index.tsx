import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #343434;
  font-size: 24px;
  height: 50px;
  margin: 15px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const Button = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{label}</StyledText>
    </StyledButton>
  );
};
