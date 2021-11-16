import React from "react";

import { DoseOptions, DoseOption, Dose } from "./styles";

interface DoseProps {
  selectedDose: number;
  handleSelectDose: (dose: number) => void;
}

const DoseOptionsComponent = ({
  selectedDose,
  handleSelectDose
}: DoseProps) => {
  return (
    <DoseOptions>
      <DoseOption
        onPress={() => handleSelectDose(1)}
        selected={selectedDose === 1}
        dose="LEFT"
      >
        <Dose selected={selectedDose === 1}>1ª Dose</Dose>
      </DoseOption>
      <DoseOption
        onPress={() => handleSelectDose(2)}
        selected={selectedDose === 2}
        dose="RIGHT"
      >
        <Dose selected={selectedDose === 2}>2ª Dose</Dose>
      </DoseOption>
    </DoseOptions>
  );
};

export { DoseOptionsComponent };
