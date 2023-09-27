import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  // ...
}

//Usage example
<Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>Inter Black</Text>;
