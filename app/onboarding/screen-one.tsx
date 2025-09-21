import GradientButton from "@/components/gradient-button";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function FinalOnboardingScreen() {
  const handleOnboardingComplete = async () => {
    try {
      await SecureStore.setItemAsync("hasOnboarded", "true");
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Failed to save onboarding status", error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/glow-1.png")}
      style={styles.background}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GradientButton handleClick={handleOnboardingComplete} text="Log In" className="w-40" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    backgroundColor: "#080A0D",
  },
});