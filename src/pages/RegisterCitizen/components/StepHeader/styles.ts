import styled, { css } from "styled-components/native";
import { colors } from "../../../../global/colors";
import { screenWidth } from "../../../../global/dimensions";

const spaceBetweenRow = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View`
  width: ${screenWidth * 0.9}px;
  ${spaceBetweenRow};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.sectionTitle};
  font-weight: 700;
`;

export const StepsMarker = styled.View`
  ${spaceBetweenRow};
`;

export const StepMarker = styled.View<{
  currentStep: boolean;
  lastStep?: boolean;
}>`
  height: 8px;
  width: 20px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.currentStep ? colors.secondayColor : colors.lightGray};
  margin-left: ${(props) => (props.lastStep ? "10px" : "0px")};
`;
