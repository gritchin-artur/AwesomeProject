import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Svg, { Circle, Path } from "react-native-svg";

export default function RegistrationScreen() {
  const [fontsLoaded] = useFonts({
    " RobotoMedium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    " RobotoRegular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <TouchableOpacity style={styles.addAvatarBtn} activeOpacity={0.7}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
          >
            <Circle cx="12.5" cy="12.5" r="12" stroke="#FF6C00" />
            <Path
              fill="#FF6C00"
              fill-rule="evenodd"
              d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
              clip-rule="evenodd"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Реєстрація</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Логін" style={styles.input}></TextInput>
        <TextInput
          placeholder="Адреса електронної пошти"
          style={styles.input}
        ></TextInput>
        <TextInput placeholder="Пароль" style={styles.input}></TextInput>
      </View>
      <TouchableOpacity style={styles.buttonAvatarRegistration}>
        <Text type="submit" style={styles.submitBtnRegister}>
          Зареєстуватися
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.submitBtnLogIn}>Вже є акаунт? Увійти</Text>
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
    marginTop: 80,
    marginBottom: 30,
  },

  avatarWrapper: {
    backgroundColor: "#eaeaea",
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: 0,
    left: 0,
    transform: [
      {
        translateX:
          Dimensions.get("window").width / 2 -
          Dimensions.get("window").height * 0.074,
      },
      { translateY: -Dimensions.get("window").height * 0.074 },
    ],
  },

  addAvatarImg: {
    width: 13,
    height: 13,
  },

  addAvatarBtn: {
    position: "absolute",
    right: -12,
    top: 80,
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
