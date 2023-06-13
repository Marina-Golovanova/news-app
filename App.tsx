import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Header } from "./src/components/Header";
import { Card } from "./src/components/Card";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
