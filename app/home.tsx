import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Button, StyleSheet } from "react-native";

export default function Home() {
  const onPressLogout = async () => {
    await SecureStore.deleteItemAsync("isLoggedIn");
    await router.push("/");
  };

  return (
    <ThemedView style={styles.container}>
      <Button title="Logout" onPress={onPressLogout} />
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
