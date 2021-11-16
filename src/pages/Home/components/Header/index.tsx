import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

import { useAuth } from "../../../../contexts/auth.context";

import { colors } from "../../../../global/colors";

import {
  Header,
  IconContainer,
  ICON_SIZE,
  WelcomeMessageContainer,
  WelcomeTextContainer,
  WelcomeText,
  Username,
  LogoutButton,
  LOGOUT_ICON_SIZE
} from "./styles";

const HeaderComponent = () => {
  const { logout, user } = useAuth();

  async function handleLogout() {
    logout();
  }

  return (
    <Header>
      <WelcomeMessageContainer>
        <IconContainer>
          <FontAwesome5Icon
            name="user-alt"
            color={colors.white}
            size={ICON_SIZE}
          />
        </IconContainer>

        <WelcomeTextContainer>
          <WelcomeText>Bem-vindo(a),</WelcomeText>
          <Username numberOfLines={1}>{user?.name.split(" ")[0]}</Username>
        </WelcomeTextContainer>
      </WelcomeMessageContainer>

      <LogoutButton onPress={handleLogout}>
        <AntDesign size={LOGOUT_ICON_SIZE} color={colors.red} name="logout" />
      </LogoutButton>
    </Header>
  );
};

export { HeaderComponent };
