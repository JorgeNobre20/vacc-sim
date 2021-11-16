import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { User } from "../global/interfaces";

import {
  getStoragedToken,
  getStoragedUser,
  storeSignedUser,
  storeToken
} from "../lib/auth.storage";

import { api } from "../services/api";

interface LoginResponseData {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User | null;
  signed: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  function setDefaultAuthorizationHeader(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async function signIn(email: string, password: string) {
    try {
      const loginData = {
        email,
        password
      };
      const response = await api.post("/sessions/login", loginData);

      const responseData = response.data as LoginResponseData;

      setDefaultAuthorizationHeader(responseData.token);
      await storeSignedUser(responseData.user);
      await storeToken(responseData.token);

      setUser(responseData.user);
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    await AsyncStorage.clear();
    setUser(null);
  }

  async function loadStoragedData() {
    try {
      const user = await getStoragedUser();
      const token = await getStoragedToken();

      if (!user || !token) {
        setLoading(false);
        return;
      }

      setUser(user);
      setDefaultAuthorizationHeader(token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const authContextData = useContext(AuthContext);
  return authContextData;
};
