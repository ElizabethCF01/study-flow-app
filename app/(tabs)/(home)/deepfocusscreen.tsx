// app/deepfocus/index.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const playlists = [
  {
    id: "1",
    title: "Sea Shores",
    songs: 20,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    title: "Late Night Focus",
    songs: 18,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    title: "Lofi Loft",
    songs: 63,
    image:
      "https://images.unsplash.com/photo-1604899074374-1c09b28cf383?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    title: "rain on my window",
    songs: 32,
    image:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "5",
    title: "Fantasy Rhythms",
    songs: 20,
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=500&q=60",
  },
];

export default function DeepFocusScreen() {
  return (
    <LinearGradient colors={["#1e293b", "#0f172a"]} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.wave}>👋 Hi Emma,</Text>
          <Text style={styles.subtitle}>Good Evening</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          style={styles.avatar}
        />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {["Deep Focus", "Exam Cram", "Creative Flow"].map((cat, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.category, idx === 0 && styles.activeCategory]}
          >
            <Text
              style={[
                styles.categoryText,
                idx === 0 && styles.activeCategoryText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Playlist list */}
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.playlist}>
            <Image source={{ uri: item.image }} style={styles.playlistImage} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.playlistTitle}>{item.title}</Text>
              <Text style={styles.playlistSongs}>{item.songs} songs</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wave: {
    fontSize: 18,
    color: "#facc15",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e2e8f0",
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  categories: {
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 16,
    gap: 10,
  },
  category: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  activeCategory: {
    backgroundColor: "#374151",
  },
  categoryText: {
    fontSize: 14,
    color: "#cbd5e1",
  },
  activeCategoryText: {
    fontWeight: "700",
    color: "#f8fafc",
  },
  playlist: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  playlistImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f8fafc",
  },
  playlistSongs: {
    fontSize: 14,
    color: "#94a3b8",
    marginTop: 2,
  },
});
