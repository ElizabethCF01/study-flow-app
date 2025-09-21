import GlowView from "@/components/glow-view";
import GradientButton from "@/components/gradient-button";
import { Box } from "@gluestack-ui/themed";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { Image, Text } from "react-native";

const FocusImage = require("../../assets/images/focus.png");
const MusicImage = require("../../assets/images/music.png");
const NotificationsImage = require("../../assets/images/notifications-off.png");

export default function FirstOnboardingScreen() {

    const handleOnboardingComplete = async () => {
        try {
          await SecureStore.setItemAsync("hasOnboarded", "true");
          router.replace("/account/sign-in"); // TODO: Replace this with a session check
        } catch (error) {
          console.error("Failed to save onboarding status", error);
        }
      };

  return (
    <GlowView>
        {/* Heading */}
        <Box className="items-center justify-center mt-36">
          <Text className="text-white text-3xl font-medium">
            Welcome To Studyflow
          </Text>
          <Text className="text-gray-400 text-base">
            Your one solution for focus sessions
          </Text>
        </Box>

        {/* Features List */}
        <Box className="flex-1 px-4 w-full ">
          <Box className="bg-white/10 p-6 rounded-xl mt-12 w-full backdrop-blur-md gap-6">
            <Box className="flex-row items-center gap-4">
              <Image source={FocusImage} className="h-12 w-12" />
              <Text className="text-white text-xl font-medium">
                Preset Focus Modes
              </Text>
            </Box>
            <Box className="flex-row items-center gap-4 mt-4">
              <Image source={MusicImage} className="h-12 w-12" />
              <Text className="text-white text-xl font-medium">
                Lead By Music
              </Text>
            </Box>
            <Box className="flex-row items-center gap-4 mt-4">
              <Image source={NotificationsImage} className="h-12 w-12" />
              <Text className="text-white text-xl font-medium">
                No Clutter, No Distractions
            </Text>
            </Box>
          </Box>
        </Box>
        {/* Continue Button */}
        <GradientButton
          text="Let's Get Started"
          className="w-60 h-14"
          handleClick={handleOnboardingComplete}
        />
    </GlowView>
  );
}
