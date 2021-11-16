import { TextInput as RnTextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../global/colors";

export const HeroImageContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 16px;
`;

export const TextInput = styled(RnTextInput).attrs({
  placeholderTextColor: colors.placeholder
})`
  width: 90%;
  background-color: ${colors.white};
  padding: 0px 16px;
  height: 60px;
  font-size: 18px;
  border-radius: 6px;
`;

export const TextInputWithIconContainer = styled.View<{ focused: boolean }>`
  flex-direction: row;
  width: 100%;
  background-color: ${colors.white};
  align-items: center;
  border-color: ${({ focused }) =>
    focused ? colors.primaryColor : colors.lightGray};
  border-radius: 6px;
  border-width: 2px;
`;

export const ButtonContainer = styled.View<{ lastButton?: boolean }>`
  width: 70%;
  margin-top: 24px;
  margin-bottom: ${({ lastButton }) => (lastButton ? "18px" : "0px")};
`;

export const PasswordVisibilityControl = styled(TouchableOpacity)``;
