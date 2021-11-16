import styled from "styled-components/native";
import ModalDropDown, { PositionStyle } from "react-native-modal-dropdown";

import { screenHeight, screenWidth } from "../../global/dimensions";
import { colors } from "../../global/colors";

const FLOAT_BUTTON_SIZE = screenWidth * 0.15;
export const FLOAT_ICON_SIZE = screenWidth * 0.075;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 36px;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  margin-top: 32px;
  margin-bottom: 16px;
  width: 100%;
`;

export const FloatButton = styled.TouchableOpacity`
  width: ${FLOAT_BUTTON_SIZE}px;
  height: ${FLOAT_BUTTON_SIZE}px;
  border-radius: ${FLOAT_BUTTON_SIZE / 2}px;
  background-color: ${colors.primaryColor};
  position: absolute;
  bottom: ${screenHeight * 0.05}px;
  right: ${screenHeight * 0.05}px;
  justify-content: center;
  align-items: center;
`;

export const FilterContainer = styled.View`
  width: 100%;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
`;

export const FilterLabel = styled.Text`
  font-size: 20px;
  color: ${colors.secondayColor};
  font-weight: 700;
  margin-left: 6px;
`;

export const Filter = styled(ModalDropDown).attrs({
  defaultTextStyle: {
    fontSize: 20,
    height: "100%"
  },
  textStyle: {
    fontSize: 20,
    height: "100%",
    color: colors.placeholder,
    fontWeight: "700"
  },
  dropdownStyle: {
    width: screenWidth * 0.9
  },
  dropdownTextStyle: {
    fontSize: 18,
    paddingLeft: 16,
    paddingVertical: 18
  },
  dropdownTextHighlightStyle: {
    color: colors.primaryColor,
    fontWeight: "700"
  },
  adjustFrame: (position: PositionStyle) => ({
    ...position,
    left: (screenWidth * 0.1) / 2
  })
})`
  background-color: ${colors.white};
  padding-left: 8px;
  justify-content: center;
`;
