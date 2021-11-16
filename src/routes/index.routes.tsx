import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../contexts/auth.context";

import { Loading } from "../components/Loading";

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export { Routes };
