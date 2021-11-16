import Snackbar from "react-native-snackbar";
import { colors } from "../global/colors";

export function showErrorMessage(message: string) {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: colors.red
  });
}

export function showSucessMessage(message: string) {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: colors.success
  });
}
