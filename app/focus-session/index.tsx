import { Box, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text } from "react-native";
import GlowView from "../../components/glow-view";
import GradientButton from "../../components/gradient-button";

const genres = [
  "Minimal House",
  "Pop",
  "Rock",
  "Classical",
  "Post - Rock",
  "Chillwave",
  "Cinematic",
  "Fantasy",
  "Lo-Fi",
  "Ambient",
  "Calm Electronic",
  "Instrumental Hip - Hop",
  "Acoustic",
];

export default function ChooseGenreScreen() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const handleGoBack = () => {
    router.back();
  };

  const handlePlay = () => {
    if (selectedGenre) {
      router.push(`/focus-session/playlist?genre=${encodeURIComponent(selectedGenre)}`);
    }
  };

  return (
    <GlowView showLogo={false}>
      <Box className="flex-row items-center mt-4 px-4 w-full">
        <Pressable onPress={handleGoBack} className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
          <ChevronLeft size={24} color="white" />
        </Pressable>
        <Box className="flex-1  ml-4">
          <Text className="text-white text-3xl font-medium">
            Choose Genre
          </Text>
          <Text className="text-gray-400 text-base">
            Deep Focus
          </Text>
        </Box>
        <Box className="w-12" />
      </Box>

      {/* Genre List */}
      <Box className="flex-1 px-4 mt-8 w-full flex-row flex-wrap justify-center gap-4">
        {genres.map((genre) => (
          <Pressable
            key={genre}
            className={`p-4 rounded-full border border-gray-500/50 ${
              selectedGenre === genre ? "border-white bg-white/10 backdrop-blur-sm" : ""
            }`}
            onPress={() => setSelectedGenre(genre)}
          >
            <Text
              className={`text-base font-medium ${
                selectedGenre === genre ? "text-white" : "text-gray-400"
              }`}
            >
              {genre}
            </Text>
          </Pressable>
        ))}
      </Box>

      {/* Play Button */}
      <GradientButton
        text="Play"
        className="w-60 h-14 mb-10"
        handleClick={handlePlay}
        disabled={!selectedGenre}
      />
    </GlowView>
  );
}
