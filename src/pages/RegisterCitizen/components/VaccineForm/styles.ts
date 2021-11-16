import styled from "styled-components/native";
import ModalDropDown, { PositionStyle } from "react-native-modal-dropdown";

import { screenWidth } from "../../../../global/dimensions";
import { colors } from "../../../../global/colors";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 24,
    alignItems: "center",
    position: "relative"
  },
  showsVerticalScrollIndicator: false
})``;

export const DosageOptionsContainer = styled.View`
  width: ${screenWidth * 0.9}px;
`;

export const ButtonContainer = styled.View<{ lastButton?: boolean }>`
  width: 46%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${screenWidth * 0.9}px;
  margin-top: 34px;
  margin-bottom: 34px;
`;

export const VaccineSelect = styled(ModalDropDown).attrs({
  defaultTextStyle: {
    fontSize: 16,
    height: "100%"
  },
  textStyle: {
    fontSize: 16,
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
})<{ focused: boolean }>`
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 0px 16px;
  height: 60px;
  border-color: ${({ focused }) =>
    focused ? colors.primaryColor : colors.lightGray};
  border-radius: 6px;
  border-width: 2px;
  justify-content: center;
`;
