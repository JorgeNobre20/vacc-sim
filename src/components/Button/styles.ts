import styled from "styled-components/native";
import { colors } from "../../global/colors";

interface ButtonStyleProps {
  backgroundColor: string;
}

export const CommonButton = styled.TouchableOpacity<ButtonStyleProps>`
  border-radius: 8px;
  padding: 8px 16px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: ${colors.white};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 20,
  color: colors.white
})``;
