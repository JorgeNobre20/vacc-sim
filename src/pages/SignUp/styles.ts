import { TextInput as RnTextInput } from "react-native";
import styled from "styled-components/native";

import { colors } from "../../global/colors";

export const HeroImageContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 16px;
`;

export const TextInput = styled(RnTextInput)<{ focused: boolean }>`
  width: 100%;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 0px 16px;
  height: 60px;
  font-size: 18px;
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
