import styled from "styled-components/native";

import Vaccine from "../../../../assets/icons/vaccine.svg";

import { colors } from "../../../../global/colors";
import { screenWidth } from "../../../../global/dimensions";

export const Container = styled.View`
  width: 100%;
  border-radius: 16px;
  background-color: ${colors.citizenBg};
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CitizenInfo = styled.View`
  max-width: 70%;
`;

export const CitizenName = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;
  margin-top: 6px;
  color: ${colors.black};
`;

export const RowContent = styled.View`
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.darkGreen};
`;

export const Info = styled.Text`
  font-size: 16px;
  color: ${colors.black};
`;

export const VaccineInfo = styled.View`
  width: 30%;
  justify-content: center;
  align-items: center;
`;

export const VaccineIcon = styled(Vaccine).attrs({
  height: screenWidth * 0.2,
  width: screenWidth * 0.2
})``;

export const VaccineDose = styled.Text`
  font-size: 16px;
  color: ${colors.darkGreen};
  margin-top: 8px;
  font-weight: bold;
`;
