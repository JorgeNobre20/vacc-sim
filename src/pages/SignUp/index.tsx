import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { ValidationError } from "yup";
import { useNavigation } from "@react-navigation/core";

import { colors } from "../../global/colors";
import { ButtonContainer, HeroImageContainer, TextInput } from "./styles";
import {
  MainWrapper,
  HeroImage,
  FormLabel,
  FormField
} from "../../global/styles";

import { Button } from "../../components/Button";

import { SignUpSchema } from "../../validations/SignUp.schema";
import {
  showErrorMessage,
  showSucessMessage
} from "../../utils/validationMessage";
import { maskPhoneNumber } from "../../utils/masks";

import { api } from "../../services/api";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function registerUser() {
    try {
      const data = {
        name: username,
        email,
        password
      };

      setLoading(false);
      await api.post("/users", data);
      showSucessMessage("Cadastro realizado com sucesso");
      navigation.navigate("Login", {});
    } catch (error) {
      setLoading(false);
      showErrorMessage("Erro ao cadastrar usuário");
    }
  }

  async function handleRegister() {
    setLoading(true);
    try {
      const data = {
        username,
        phoneNumber: phoneNumber.replace(/\D/g, ""),
        email,
        password
      };
      const validData = await SignUpSchema.validate(data, {
        abortEarly: false
      });

      if (validData) {
        await registerUser();
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof ValidationError) {
        showErrorMessage(error.errors[0]);
      } else {
        showErrorMessage("Erro ao validar dados do usuário");
      }
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <MainWrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <HeroImageContainer>
            <HeroImage resizeMode="cover" />
          </HeroImageContainer>

          <FormField>
            <FormLabel>Nome Completo</FormLabel>
            <TextInput
              focused={!!username}
              placeholder="Digite o nome completo"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </FormField>

          <FormField>
            <FormLabel>Número de telefone</FormLabel>
            <TextInput
              focused={!!phoneNumber}
              placeholder="(XX) 00000-0000"
              keyboardType="number-pad"
              onChangeText={(text) => {
                const maskedValue = maskPhoneNumber(text);
                setPhoneNumber(maskedValue);
              }}
              value={phoneNumber}
            />
          </FormField>

          <FormField>
            <FormLabel>Email</FormLabel>
            <TextInput
              focused={!!email}
              placeholder="meu_e-mail@gmail.com"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </FormField>

          <FormField>
            <FormLabel>Senha</FormLabel>
            <TextInput
              focused={!!password}
              secureTextEntry={true}
              placeholder="**********"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </FormField>

          <ButtonContainer lastButton>
            <Button
              loading={loading}
              disabled={loading}
              label="Concluir"
              color={colors.secondayColor}
              onPress={handleRegister}
            />
          </ButtonContainer>
        </ScrollView>
      </MainWrapper>
    </>
  );
};

export { SignUp };
