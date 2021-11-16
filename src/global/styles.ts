import styled, { css } from "styled-components/native";

import { screenWidth } from "./dimensions";

import Logo from "../assets/images/logo.svg";
import { colors } from "./colors";

export const MainWrapper = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  align-items: center;
  background-color: ${colors.white};
`;

export const HeroImage = styled(Logo).attrs({
  width: screenWidth * 0.3,
  height: screenWidth * 0.3
})``;

export const FormField = styled.View`
  width: ${screenWidth * 0.9}px;
  margin-bottom: 16px;
  margin-top: 12px;
`;

export const FormLabel = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  margin-left: 4px;
  color: ${colors.primaryColor};
  font-weight: 700;
`;
