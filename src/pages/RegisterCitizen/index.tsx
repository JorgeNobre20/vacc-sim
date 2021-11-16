import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ValidationError } from "yup";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../../global/colors";

import { MainWrapper } from "../../global/styles";
import { Header, Title, Form, FormHeader } from "./styles";

import { CitizenSchema } from "../../validations/Citizen.schema";

import { UserForm } from "./components/UserForm";
import { StepHeader } from "./components/StepHeader";
import { VaccineForm } from "./components/VaccineForm";

import {
  showErrorMessage,
  showSucessMessage
} from "../../utils/validationMessage";

import { api } from "../../services/api";
import { maskDate } from "../../utils/masks";

const RegisterCitizen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [vaccineType, setVaccineType] = useState("Selecione uma vacina");
  const [bornDate, setBornDate] = useState(new Date());
  const [selectedDose, setSelectedDose] = useState(1);
  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [currentStep, setCurrentStep] = useState<"CITIZEN" | "VACCINE">(
    "CITIZEN"
  );

  async function registerCitzen() {
    setLoading(true);
    try {
      const data = {
        name,
        cpf,
        vaccineName: vaccineType,
        birthDate: bornDate,
        vaccineDose: selectedDose
      };

      await api.post("/citizens", data);

      setLoading(false);
      showSucessMessage("Cidadão cadastrado com sucesso");

      navigation.navigate("Home", {});
    } catch (error) {
      setLoading(false);
      showErrorMessage("Erro ao cadastrar cidadão!");
    }
  }

  const getCitizenData = (
    citizenName: string,
    citizenCpf: string,
    citizenBornDate: Date
  ) => {
    setName(citizenName);
    setCPF(citizenCpf);
    setBornDate(citizenBornDate);
    setCurrentStep("VACCINE");
  };

  const getVaccineData = (dose: number, vaccine: string) => {
    setSelectedDose(dose);
    setVaccineType(vaccine);
    setSubmitted(true);
  };

  function handleGoBack() {
    setCurrentStep("CITIZEN");
  }

  async function handleValidateData() {
    try {
      await CitizenSchema.validate(
        {
          name: name,
          cpf: cpf,
          birthDate: maskDate(bornDate).replace(/\D/g, ""),
          vaccineName: vaccineType,
          dose: selectedDose
        },
        { abortEarly: false }
      );

      await registerCitzen();
    } catch (error) {
      if (error instanceof ValidationError) {
        showErrorMessage(error.errors[0]);
      } else {
        showErrorMessage("Erro ao validar dados");
      }
    }
  }

  useEffect(() => {
    if (submitted) {
      handleValidateData();
    }
  }, [submitted]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <MainWrapper>
          <Header>
            <Title>Cadastrar Cidadão</Title>
          </Header>

          <Form>
            <FormHeader>
              <StepHeader step={currentStep} />
            </FormHeader>
            {currentStep === "CITIZEN" ? (
              <UserForm
                name={name}
                cpf={cpf}
                bornDate={bornDate}
                onSubmit={getCitizenData}
              />
            ) : (
              <VaccineForm
                vaccine={vaccineType}
                dose={selectedDose}
                goBack={handleGoBack}
                loadingRequest={loading}
                onSubmit={getVaccineData}
              />
            )}
          </Form>
        </MainWrapper>
      </SafeAreaView>
    </>
  );
};

export { RegisterCitizen };
