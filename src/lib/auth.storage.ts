import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../global/interfaces";

export async function storeToken(token: string) {
  try {
    await AsyncStorage.setItem("@InsightLab:token", token);
  } catch (error) {
    console.error("STORAGING TOKEN ERROR => ", error);
    throw error;
  }
}

export async function getStoragedToken(): Promise<string | null> {
  try {
    const storagedToken = await AsyncStorage.getItem("@InsightLab:token");
    return storagedToken;
  } catch (error) {
    console.error("GETTING STORAGED TOKEN ERROR => ", error);
    throw error;
  }
}

export async function storeSignedUser(user: User) {
  try {
    await AsyncStorage.setItem("@InsightLab:user", JSON.stringify(user));
  } catch (error) {
    console.error("STORAGING USER ERROR => ", error);
    throw error;
  }
}

export async function getStoragedUser(): Promise<User | null> {
  try {
    const storagedToken = await AsyncStorage.getItem("@InsightLab:user");
    const user = storagedToken ? (JSON.parse(storagedToken) as User) : null;
    return user;
  } catch (error) {
    console.error("GETTING STORAGED USER ERROR => ", error);
    throw error;
  }
}
