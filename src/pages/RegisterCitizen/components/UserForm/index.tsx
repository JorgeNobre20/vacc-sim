import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Yup from "yup";

import { colors } from "../../../../global/colors";
import { FormField, FormLabel } from "../../../../global/styles";

import {
  DateButtonText,
  ButtonContainer,
  TextInput,
  DatePickerContainer
} from "./styles";

import { Button } from "../../../../components/Button";
import { screenWidth } from "../../../../global/dimensions";
import { maskCpf, maskDate } from "../../../../utils/masks";
import { showErrorMessage } from "../../../../utils/validationMessage";
import { ValidationError } from "yup";

const UserFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório")
    .min(10, "Nome deve ter no mínimo 10 caracteres"),
  cpf: Yup.string().required("CPF é obrigatório").min(11, "CPF inválido"),
  bornDate: Yup.string().min(8, "Data inválida").required("Data inválida")
});

interface UserFormProps {
  onSubmit: (
    citizenName: string,
    citizenCpf: string,
    citizenBornDate: Date
  ) => void;
  name: string;
  cpf: string;
  bornDate: Date;
}

const UserForm = ({ onSubmit, ...rest }: UserFormProps) => {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [bornDate, setBornDate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);

  function handleDateChange(event: Event, selectedDate: Date | undefined) {
    if (!selectedDate) {
      setShowDatePicker(false);
      return null;
    }

    setBornDate(selectedDate);
    setShowDatePicker(false);
  }

  async function validateData() {
    try {
      await UserFormSchema.validate(
        {
          name,
          cpf: cpf.replace(/\D/g, ""),
          bornDate: maskDate(bornDate).replace(/\D/g, "")
        },
        {
          abortEarly: false
        }
      );

      onSubmit(name, cpf, bornDate);
    } catch (error) {
      if (error instanceof ValidationError) {
        showErrorMessage(error.errors[0]);
      } else {
        showErrorMessage("Erro ao validar dados");
      }
    }
  }

  useEffect(() => {
    setName(rest.name);
    setCPF(rest.cpf);
    setBornDate(rest.bornDate);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 24, alignItems: "center" }}
      showsVerticalScrollIndicator={false}
      style={{ width: screenWidth }}
    >
      <FormField>
        <FormLabel>Nome Completo</FormLabel>
        <TextInput
          focused={!!name}
          placeholder="Digite o nome completo"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </FormField>

      <FormField>
        <FormLabel>CPF</FormLabel>
        <TextInput
          focused={!!cpf}
          placeholder="000.000.000-00"
          keyboardType="number-pad"
          value={cpf}
          maxLength={14}
          onChangeText={(text) => {
            const maskedValue = maskCpf(text);
            setCPF(maskedValue);
          }}
        />
      </FormField>

      <FormField>
        <FormLabel>Data de Nascimento</FormLabel>

        <DatePickerContainer onPress={() => setShowDatePicker(true)}>
          <DateButtonText>{maskDate(bornDate)}</DateButtonText>

          {showDatePicker && (
            <DateTimePicker
              onChange={handleDateChange}
              mode="date"
              value={bornDate}
              maximumDate={new Date()}
            />
          )}

          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={24}
            color={colors.primaryColor}
          />
        </DatePickerContainer>
      </FormField>

      <ButtonContainer>
        <Button
          onPress={validateData}
          color={colors.secondayColor}
          loading={false}
          label="Continuar"
        />
      </ButtonContainer>
    </ScrollView>
  );
};

export { UserForm };
