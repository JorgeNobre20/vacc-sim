import React from "react";
import { TouchableOpacityProps } from "react-native";
import { CommonButton, Label, Loading } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
  label: string;
  loading: boolean;
}

const Button = ({ label, color, loading, onPress, ...rest }: ButtonProps) => {
  return (
    <CommonButton onPress={onPress} backgroundColor={color} {...rest}>
      {loading ? <Loading /> : <Label>{label}</Label>}
    </CommonButton>
  );
};

export { Button };
