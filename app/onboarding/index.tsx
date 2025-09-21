import GradientButton from "@/components/gradient-button";
import { Box } from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text } from "react-native";

const Logo = require("../../assets/images/study-flow.png");
const RadialImage = require("../../assets/images/glow-1.png");
const FocusImage = require("../../assets/images/focus.png");
const MusicImage = require("../../assets/images/music.png");
const NotificationsImage = require("../../assets/images/notifications-off.png");

export default function FirstOnboardingScreen() {

    const handleGoToNext = () => {
        console.log("Navigating to next onboarding screen");
        router.push("/onboarding/screen-one");
    }
  return (
    <Box className="flex-1">
      <Image
        source={RadialImage}
        style={styles.radialImageOverlay}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/blur-bg.png")}
        style={styles.blurOverlay}
        resizeMode="contain"
      />
      <ImageBackground
        source={require("../../assets/images/blur-bg.png")}
        style={styles.background}
        className="gap-16 pb-16"
      >
        {/* Logo */}
        <Box className="absolute top-16 flex-row items-center gap-2 pt-10">
          <Image source={Logo} className="h-10 w-52" />
        </Box>

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
          handleClick={handleGoToNext}
        />
      </ImageBackground>
    </Box>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    paddingTop: 80,
  },
  radialImageOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
    flex: 1,
    top: -240,
  },
  blurOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    top: -10,
  },
});
