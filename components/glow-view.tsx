import { Box } from "@gluestack-ui/themed";
import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";

const Logo = require("../assets/images/study-flow.png");
const RadialImage = require("../assets/images/glow-1.png");

export default function GlowView({children}: {children: React.ReactNode}) {

  return (
    <Box className="flex-1">
      <Image
        source={RadialImage}
        style={styles.radialImageOverlay}
        resizeMode="contain"
      />
      
      <ImageBackground
        source={require("../assets/images/blur-bg.png")}
        style={styles.background}
        className="gap-16 pb-16"
      >
        {/* Logo */}
        <Box className="absolute top-16 flex-row items-center gap-2 pt-10">
          <Image source={Logo} className="h-10 w-52" />
        </Box>

        {children}
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
  }
});
