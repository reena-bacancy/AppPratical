import { ThemedView } from "@/components/ThemedView";
import * as SecureStore from "expo-secure-store";
import { Button, StyleSheet } from "react-native";

export default function Login() {
  const onPressLogin = async () => {
    await SecureStore.setItemAsync("isLoggedIn", JSON.stringify(true));
  };

  return (
    <ThemedView style={styles.container}>
      <Button title="Login" onPress={onPressLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
