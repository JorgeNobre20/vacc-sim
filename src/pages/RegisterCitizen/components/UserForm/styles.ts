import styled from "styled-components/native";
import { TextInput as RnTextInput } from "react-native";
import { colors } from "../../../../global/colors";

export const Test = styled.Text``;

export const TextInput = styled(RnTextInput)<{ focused: boolean }>`
  width: 100%;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 0px 16px;
  font-size: 18px;
  height: 60px;
  border-color: ${({ focused }) =>
    focused ? colors.primaryColor : colors.lightGray};
  border-radius: 6px;
  border-width: 2px;
`;

export const DatePickerContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  background-color: ${colors.white};
  border-radius: 16px;
  padding: 0px 16px;
  height: 60px;
  font-size: 18px;
  border-color: ${colors.primaryColor};
  border-radius: 6px;
  border-width: 2px;
`;

export const DateButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.black};
`;

export const ButtonContainer = styled.View<{ lastButton?: boolean }>`
  width: 70%;
  margin-top: 24px;
  margin-bottom: 34px;
`;
