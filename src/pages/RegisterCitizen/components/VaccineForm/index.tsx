import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { colors } from "../../../../global/colors";
import { FormField, FormLabel } from "../../../../global/styles";
import {
  ButtonContainer,
  VaccineSelect,
  Container,
  ButtonsContainer
} from "./styles";

import { DoseOptionsComponent as DoseOptions } from "../../../../components/DoseOptions";
import { Button } from "../../../../components/Button";

import { VACCINES_LABEL, VACCINES_TYPE, VACCINES_VALUE } from "./constants";
import { ValidationError } from "yup";
import { showErrorMessage } from "../../../../utils/validationMessage";

const VaccineDataSchema = Yup.object().shape({
  selectedDose: Yup.number().oneOf([1, 2]).required("Dose é obrigatória"),
  vaccine: Yup.string()
    .oneOf(VACCINES_VALUE, "Vacina é obrigatória")
    .required("Vacina é obrigatória")
});

interface VaccineFormProps {
  onSubmit: (dose: number, vaccine: string) => void;
  goBack: () => void;
  loadingRequest: boolean;
  vaccine: string;
  dose: number;
}

const VaccineForm = ({
  onSubmit,
  loadingRequest,
  goBack,
  ...rest
}: VaccineFormProps) => {
  const [selectedDose, setSelectedDose] = useState(1);
  const [vaccine, setVaccine] = useState("");

  function handleSelecteDose(dose: number) {
    setSelectedDose(dose);
  }

  async function handleContinue() {
    try {
      await VaccineDataSchema.validate(
        { selectedDose, vaccine },
        { abortEarly: false }
      );

      onSubmit(selectedDose, vaccine);
    } catch (error) {
      if (error instanceof ValidationError) {
        showErrorMessage(error.errors[0]);
      } else {
        showErrorMessage("Erro ao validar dados");
      }
    }
  }

  useEffect(() => {
    setVaccine(rest.vaccine);
    setSelectedDose(rest.dose);
  }, []);

  return (
    <Container>
      <FormField>
        <FormLabel>Vacina</FormLabel>
        <VaccineSelect
          defaultValue={vaccine}
          onSelect={(selectedIndex: String, selectedOption: unknown) => {
            const selectedVaccine = VACCINES_TYPE[Number(selectedIndex)];
            setVaccine(selectedVaccine.value);
          }}
          focused={false}
          options={VACCINES_LABEL}
        />
      </FormField>

      <FormField>
        <FormLabel>Dose da vacina</FormLabel>
        <DoseOptions
          selectedDose={selectedDose}
          handleSelectDose={handleSelecteDose}
        />
      </FormField>

      <ButtonsContainer>
        <ButtonContainer>
          <Button
            onPress={goBack}
            color={colors.orange}
            loading={false}
            disabled={loadingRequest}
            label="Voltar"
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
            onPress={handleContinue}
            color={colors.secondayColor}
            loading={loadingRequest}
            disabled={loadingRequest}
            label="Salvar"
          />
        </ButtonContainer>
      </ButtonsContainer>
    </Container>
  );
};

export { VaccineForm };
