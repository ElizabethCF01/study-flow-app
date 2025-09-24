import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import GlowView from "../../components/glow-view";

const song1 = require("../../assets/images/playlist/song-1.png");
const music = require("../../assets/music/Daydreams.mp3")


const TimeDisplay = ({ time }: { time: number }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return <Text className="text-white text-7xl font-bold">{formatTime(time)}</Text>;
};

export default function FocusSessionScreen() {
  const { playlistId, duration, breakTime } = useLocalSearchParams();
  const initialTime = parseInt(duration.toString()) * 60; // Convert to seconds
  const [sessionTime, setSessionTime] = useState(initialTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying && sessionTime > 0) {
      interval = setInterval(() => {
        setSessionTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (sessionTime === 0) {
      clearInterval(interval as any);
      // Logic for when the timer ends
    }
    return () => clearInterval(interval as any);
  }, [isPlaying, sessionTime]);

  const handleGoBack = () => {
    router.back();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Mock data for the current song
  const currentSong = {
    title: "Lantern Orchestra",
    frequency: "12-30 Hz",
    albumArt: song1,
  };

  const radius = 100;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = (sessionTime / initialTime) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <GlowView showLogo={false}>
      {/* Header */}
      <View className="flex-row items-center mt-4 px-4 w-full">
        <Pressable
          onPress={handleGoBack}
          className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft size={24} color="white" />
        </Pressable>
        <View className="flex-1 ml-4">
          <Text className="text-white text-xl font-medium">Rainy Day Reads</Text>
          <Text className="text-gray-400 text-sm">Focus Session</Text>
        </View>
        <View className="flex-row items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
          <Text className="text-white text-sm font-bold mr-2">
            {duration} min
          </Text>
          <View className="w-2 h-2 rounded-full bg-white" />
        </View>
      </View>

      {/* Timer Display */}
      <View className="flex-1 items-center justify-center">
        <View className="relative w-[240px] h-[240px]">
          <Svg height="240" width="240" viewBox="0 0 240 240" className="absolute">
            <Circle
              cx="120"
              cy="120"
              r={radius}
              stroke="#ffffff1a"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <Circle
              cx="120"
              cy="120"
              r={radius}
              stroke="#39D1E5"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </Svg>
          <View className="absolute inset-0 items-center justify-center">
            <Text className="text-gray-400 text-base">Focus Time</Text>
            <TimeDisplay time={sessionTime} />
            <Text className="text-gray-400 text-base">
              Break in {breakTime || 5} min
            </Text>
          </View>
        </View>
        <Pressable
          className="mt-10 py-4 px-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          onPress={() => {
            // End session logic
          }}
        >
          <Text className="text-white text-lg">End Session</Text>
        </Pressable>
      </View>

      {/* Music Player */}
      <View className="w-full px-4 mb-4">
        <View className="flex-row items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
          <Image
            source={currentSong.albumArt }
            className="w-16 h-16 rounded-md mr-4"
          />
          <View className="flex-1">
            <Text className="text-white text-lg font-bold">
              {currentSong.title}
            </Text>
            <Text className="text-gray-400 text-sm">
              {currentSong.frequency}
            </Text>
          </View>
          <Pressable className="ml-4">
            <View className="w-8 h-8 rounded-full bg-white/20 items-center justify-center">
              <Text className="text-white font-bold">+</Text>
            </View>
          </Pressable>
        </View>

        {/* Player Controls */}
        <View className="flex-row items-center justify-center mt-6">
          <Pressable className="p-4">
            <Shuffle size={24} color="white" />
          </Pressable>
          <Pressable className="p-4">
            <SkipBack size={24} color="white" />
          </Pressable>
          <Pressable
            onPress={togglePlayPause}
            className="p-4 mx-4 rounded-full bg-white/20"
          >
            {isPlaying ? (
              <Pause size={32} color="white" />
            ) : (
              <Play size={32} color="white" />
            )}
          </Pressable>
          <Pressable className="p-4">
            <SkipForward size={24} color="white" />
          </Pressable>
          <Pressable className="p-4">
            <Repeat size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </GlowView>
  );
}
