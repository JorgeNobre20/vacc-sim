import styled from "styled-components/native";
import { colors } from "../../global/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingAnimation = styled.ActivityIndicator.attrs({
  color: colors.darkGreen,
  size: 36
})``;
