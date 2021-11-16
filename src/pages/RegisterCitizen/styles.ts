import styled from "styled-components/native";

import { colors } from "../../global/colors";

export const Header = styled.View`
  width: 100%;
  padding: 16px 0;
  background-color: ${colors.primaryColor};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.white};
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 36px;
  position: relative;
`;

export const FormHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
