import { Box, Pressable } from "@gluestack-ui/themed";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, Image, Text } from "react-native";
import GlowView from "../../components/glow-view";
import TimeSelectionModal from "../../components/time-selection-modal";

const song1 = require("../../assets/images/playlist/song-1.png");
const song2 = require("../../assets/images/playlist/song-2.png");
const song3 = require("../../assets/images/playlist/song-3.png");
const song4 = require("../../assets/images/playlist/song-4.png");
const song5 = require("../../assets/images/playlist/song-5.png");

const playlistsData = [
  {
    id: "1",
    title: "Rainy Day Reads",
    songs: 18,
    image: song1,
  },
  {
    id: "2",
    title: "Coffee & Textbooks",
    songs: 63,
    image: song2,
  },
  {
    id: "3",
    title: "Quiet Grind",
    songs: 32,
    image: song5,
  },
  {
    id: "4",
    title: "Library Ambience",
    songs: 20,
    image: song4,
  },
  {
    id: "5",
    title: "Study Desk Drizzle",
    songs: 18,
    image: song3,
  },
];

interface PlaylistItem {
  id: string;
  title: string;
  songs: number;
  image: any;
}

export default function PlaylistScreen() {
  const { genre } = useLocalSearchParams();
  const [selectedPlaylist, setSelectedPlaylist] = useState<PlaylistItem | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);


  const handleGoBack = () => {
    router.back();
  };

  const handleOpenModal = (playlist: PlaylistItem) => {
    setSelectedPlaylist(playlist);
    setModalVisible(true);
  };

  const handleSelectTime = (time: string | number, breakTime: string | null) => {
    console.log(`Starting session for: ${selectedPlaylist?.title} with a duration of ${time} and a break of ${breakTime || '0'} min`);
    router.push(`/focus-session/player?playlistId=${selectedPlaylist?.id}&duration=${encodeURIComponent(time)}&breakTime=${encodeURIComponent(breakTime || '0')}`);
  };

  const renderItem = ({ item }: { item: PlaylistItem }) => (
    <Pressable
      className={`flex-row items-center p-2 my-2 ${item.id === selectedPlaylist?.id ? "bg-white/10 backdrop-blur-sm rounded-xl" : ""}`}
      onPress={() => handleOpenModal(item)}
    >
      <Image
        source={item.image}
        className="w-[80px] h-[80px] rounded-lg mr-4"
      />
      <Box>
        <Text className="text-white text-lg font-medium">{item.title}</Text>
        <Text className="text-gray-400 text-sm">{item.songs} songs</Text>
      </Box>
    </Pressable>
  );

  return (
    <GlowView showLogo={false}>
      <Box className="flex-row items-center mt-4 px-4 w-full">
        <Pressable
          onPress={handleGoBack}
          className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft size={24} color="white" />
        </Pressable>
        <Box className="flex-1 ml-4">
          <Text className="text-white text-3xl font-medium">Choose playlist</Text>
          <Text className="text-gray-400 text-base">{genre || "Lo-fi"}</Text>
        </Box>
      </Box>

      <FlatList
        data={playlistsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className="flex-1 w-full px-4 mt-8"
        contentContainerStyle={{ paddingBottom: 20 }}
      />
        <TimeSelectionModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSelectTime={handleSelectTime}
      />
    </GlowView>
  );
}
