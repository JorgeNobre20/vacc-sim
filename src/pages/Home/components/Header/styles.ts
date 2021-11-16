import styled, { css } from "styled-components/native";

import { colors } from "../../../../global/colors";
import { screenWidth } from "../../../../global/dimensions";

const ICON_CONTAINER_SIZE = screenWidth * 0.12;
export const ICON_SIZE = screenWidth * 0.06;
export const LOGOUT_ICON_SIZE = screenWidth * 0.06;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;
  border-radius: 6px;
`;

export const WelcomeMessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${ICON_CONTAINER_SIZE}px;
  width: ${ICON_CONTAINER_SIZE}px;
  border-radius: ${ICON_CONTAINER_SIZE / 2}px;
  background-color: ${colors.primaryColor};
  padding-bottom: 2px;
  margin-right: 16px;
`;

export const WelcomeTextContainer = styled.View`
  max-width: 70%;
`;

const welcomeMessageStyle = css`
  font-size: 18px;
  text-align: left;
`;

export const WelcomeText = styled.Text`
  color: ${colors.sectionTitle};
  ${welcomeMessageStyle};
  font-weight: 600;
`;

export const Username = styled.Text`
  ${welcomeMessageStyle};
  color: ${colors.primaryColor};
  margin-top: 2px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 6px;
  /* width: ${LOGOUT_ICON_SIZE + 10}px;
  height: ${LOGOUT_ICON_SIZE + 10}px; */
`;
