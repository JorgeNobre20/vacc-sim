import styled, { css } from "styled-components/native";

import { colors } from "../../global/colors";

export const DoseOptions = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const doseOptionStyle = css`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const DoseOption = styled.TouchableOpacity<{
  selected?: boolean;
  dose: "LEFT" | "RIGHT";
}>`
  ${doseOptionStyle};

  background-color: ${(props) =>
    props.selected ? colors.secondayColor : "#d1d1d1"};
  width: 50%;

  border-top-left-radius: ${(props) =>
    props.dose === "LEFT" ? "16px" : "0px"};
  border-top-right-radius: ${(props) =>
    props.dose === "LEFT" ? "0px" : "16px"};
  border-bottom-left-radius: ${(props) =>
    props.dose === "LEFT" ? "16px" : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.dose === "LEFT" ? "0px" : "16px"};
`;

export const Dose = styled.Text<{
  selected?: boolean;
}>`
  font-size: 18px;
  color: ${(props) => (props.selected ? colors.white : "rgba(0,0,0,0.4)")};
  font-weight: 700;
`;
