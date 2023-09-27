import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    " RobotoMedium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    " RobotoRegular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Увійти</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Логін" style={styles.input}></TextInput>
        <TextInput placeholder="Пароль" style={styles.input}></TextInput>
      </View>
      <TouchableOpacity style={styles.buttonAvatarRegistration}>
        <Text type="submit" style={styles.submitBtnRegister}>
          Увійти
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.submitBtnLogIn}>
          Немає акаунту? Зареєструватися
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    height: "60%",
    display: "flex",
    alignItems: "center",
  },

  input: {
    fontFamily: "RobotoRegular",
    weight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    backgroundColor: "#eaeaea",
    width: 343,
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
  },

  text: {
    fontFamily: "RobotoMedium",
    weight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: "1%",
    textAlign: "center",
    marginTop: 36,
    marginBottom: 30,
  },

  inputContainer: {
    display: "flex",
    gap: "20px",
  },

  submitBtnRegister: {
    fontFamily: "RobotoRegular",
    weight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },

  buttonAvatarRegistration: {
    backgroundColor: "#FF6C00",
    borderRadius: 10,
    paddingTop: 16,
    paddingBottom: 16,
    width: 343,
    marginTop: 30,
  },

  submitBtnLogIn: {
    fontFamily: "RobotoRegular",
    weight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    marginTop: 20,
    textAlign: "center",
  },
});
