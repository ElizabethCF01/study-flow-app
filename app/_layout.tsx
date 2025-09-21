import "@/global.css";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { config } from "../gluestack-ui.config";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded, error] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await SecureStore.getItemAsync("hasOnboarded");
        if (value === "true") {
          setHasOnboarded(true);
        }
      } catch (error) {
        console.error("Failed to load onboarding status", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (isLoading || !fontsLoaded || error) {
    // maybe splash screen or loading indicator here
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <GluestackUIProvider config={config}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {hasOnboarded ? (
            <>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="account" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{ presentation: "modal", title: "Modal" }}
              />
            </>
          ) : (
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          )}
        </Stack>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
