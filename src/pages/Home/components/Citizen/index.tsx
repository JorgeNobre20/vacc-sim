import React, { memo } from "react";

import {
  CitizenInfo,
  CitizenName,
  Container,
  Info,
  Label,
  RowContent,
  VaccineDose,
  VaccineIcon,
  VaccineInfo
} from "./styles";

import { CitizenProps } from "./interfaces";
import { maskCpf, maskDate } from "../../../../utils/masks";

const Citizen = ({ citizen }: CitizenProps) => {
  return (
    <Container>
      <CitizenInfo>
        <CitizenName numberOfLines={1}>{citizen.name}</CitizenName>

        <RowContent>
          <Label>CPF:</Label>
          <Info numberOfLines={1}>{maskCpf(citizen.cpf)}</Info>
        </RowContent>
        <RowContent>
          <Label>Data de Nascimento:</Label>
          <Info numberOfLines={1}>{maskDate(new Date(citizen.birthDate))}</Info>
        </RowContent>
      </CitizenInfo>

      <VaccineInfo>
        <VaccineIcon />
        <VaccineDose>{citizen.vaccineDose}ª Dose</VaccineDose>
      </VaccineInfo>
    </Container>
  );
};

const CitizenComponent = memo(Citizen);

export { CitizenComponent };
