import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet } from "react-native";

export default function Login() {
  const [checkingLogin, setCheckingLogin] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const data = await SecureStore.getItemAsync("isLoggedIn");
      if (data) {
        const isLoggedIn = JSON.parse(data);
        if (isLoggedIn) {
          router.replace("/home");
          return;
        }
      }
      setCheckingLogin(false);
    };

    checkLogin();
  }, []);

  const onPressLogin = async () => {
    await SecureStore.setItemAsync("isLoggedIn", JSON.stringify(true));
    router.replace("/home");
  };

  if (checkingLogin) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

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
