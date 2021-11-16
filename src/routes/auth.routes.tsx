import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export { AuthRoutes };
