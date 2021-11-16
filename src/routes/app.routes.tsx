import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { RegisterCitizen } from "../pages/RegisterCitizen";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="RegisterCitizen" component={RegisterCitizen} />
    </AppStack.Navigator>
  );
};

export { AppRoutes };
