import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { ValidationError } from "yup";

import {
  HeroImage,
  FormField,
  FormLabel,
  MainWrapper
} from "../../global/styles";
import {
  ButtonContainer,
  HeroImageContainer,
  TextInputWithIconContainer,
  TextInput,
  PasswordVisibilityControl
} from "./styles";

import { colors } from "../../global/colors";

import { LoginSchema } from "../../validations/Login.schema";
import { showErrorMessage } from "../../utils/validationMessage";

import { RequestError } from "../../global/interfaces";

import { useAuth } from "../../contexts/auth.context";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  function errorHandler(status: number = 0) {
    if (status === 0 || status !== 400) {
      showErrorMessage("Erro ao fazer login");
    } else {
      showErrorMessage("Email ou senha incorretos");
    }
  }

  async function handleLogin() {
    try {
      await signIn(email, password);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      const requestError = error as RequestError;
      errorHandler(requestError?.response?.status);
    }
  }

  async function validateLoginData() {
    setLoading(true);

    try {
      const validData = await LoginSchema.validate(
        { email, password },
        { abortEarly: false }
      );

      if (validData) {
        await handleLogin();
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof ValidationError) {
        showErrorMessage(error.errors[0]);
      } else {
        showErrorMessage("Erro ao validar dados");
      }
    }
  }

  function handlePasswordVisibility() {
    setHidePassword((prevState) => !prevState);
  }

  function navigateToSignUp() {
    navigation.navigate("SignUp", {});
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <SafeAreaView style={{ flex: 1 }}>
        <MainWrapper>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <HeroImageContainer>
              <HeroImage resizeMode="contain" />
            </HeroImageContainer>

            <FormField>
              <FormLabel>E-mail</FormLabel>
              <TextInputWithIconContainer focused={!!email}>
                <TextInput
                  placeholder="meu_e-mail@gmail.com"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />

                <MaterialCommunityIcon
                  name="email-outline"
                  size={30}
                  color={!!email ? colors.primaryColor : colors.inputIcon}
                />
              </TextInputWithIconContainer>
            </FormField>

            <FormField>
              <FormLabel>Senha</FormLabel>
              <TextInputWithIconContainer focused={!!password}>
                <TextInput
                  secureTextEntry={hidePassword}
                  placeholder="*********"
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
                <PasswordVisibilityControl onPress={handlePasswordVisibility}>
                  {hidePassword ? (
                    <Feather
                      name="eye"
                      size={24}
                      color={
                        !!password ? colors.primaryColor : colors.inputIcon
                      }
                    />
                  ) : (
                    <Feather
                      name="eye-off"
                      size={24}
                      color={colors.primaryColor}
                    />
                  )}
                </PasswordVisibilityControl>
              </TextInputWithIconContainer>
            </FormField>

            <ButtonContainer>
              <Button
                loading={loading}
                disabled={loading}
                onPress={validateLoginData}
                label={"Entrar"}
                color={colors.primaryColor}
              />
            </ButtonContainer>

            <ButtonContainer lastButton>
              <Button
                loading={false}
                label={"Cadastrar"}
                onPress={navigateToSignUp}
                color={colors.secondayColor}
              />
            </ButtonContainer>
          </KeyboardAwareScrollView>
        </MainWrapper>
      </SafeAreaView>
    </>
  );
};

export { Login };
