import React from "react";
import { Container, StepMarker, StepsMarker, Title } from "./styles";

interface StepHeaderProps {
  step: "CITIZEN" | "VACCINE";
}

const StepHeader = ({ step }: StepHeaderProps) => {
  return (
    <Container>
      <Title>
        {step === "CITIZEN" ? "Dados do cidadão" : "Dados da vacina"}
      </Title>

      <StepsMarker>
        <StepMarker currentStep={step === "CITIZEN"} />
        <StepMarker lastStep currentStep={step === "VACCINE"} />
      </StepsMarker>
    </Container>
  );
};

export { StepHeader };
