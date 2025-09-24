

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { ScrollView } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Collapsible } from "@/components/ui/collapsible";

export default function HomeScreen() {

  const resetOnboarding = async ()=>{
       try{
        await SecureStore.setItemAsync('hasOnboard','false');
        router.replace('/onboarding');
       }catch(error){
        console.error("Failed to connect")

       }
  }
  const [hidden, sethidden] = useState(false);
  return (
    
    <LinearGradient colors={["#0f2027", "#224551ff", "#2c5364"]} style={styles.container}>
      {/* Header */}
      <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.time}>10:04</Text>
        <View style={styles.headerRight}>
          <Ionicons name="barbell-outline" size={18} color="#fff" />
          <Text style={styles.headerStat}>2h</Text>
          <Ionicons name="flame-outline" size={18} color="#fff" style={{ marginLeft: 10 }} />
          <Text style={styles.headerStat}>3</Text>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.wave}>👋 Hi Emma</Text>
        <Text style={styles.greetingText}>Good Evening</Text>
      </View>

      {/* Spotify Section */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Link Your Spotify</Text>
         <AntDesign name="spotify" size={28} color="green" />
        </View>
        <Text style={styles.cardSubtitle}>Bring your playlists into your sessions</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>sethidden(true)}>
          <Text style={styles.buttonText}>I’ll do it later</Text>
        </TouchableOpacity>
      </View>

      {/* Focus Modes */}
      <Text style={styles.subheading}>Choose your focus mode</Text>
      
      {/* Deep Focus Mode / Navigation */}
      <View style={styles.modeCard}>
        <Link href={'/(tabs)/(home)/deepfocusscreen'}>
        <Ionicons name="radio-outline" size={28} color="#4FACFE" />
        <View>
          <Text style={styles.modeTitle}>Deep Focus</Text>
          <Text style={styles.modeSubtitle}>For longer Sessions</Text>
        </View>
        </Link>
      </View>

      <View style={styles.modeCard}>
        <Feather name="edit-3" size={28} color="#00FF85" />
        <View>
          <Text style={styles.modeTitle}>Exam Cram</Text>
          <Text style={styles.modeSubtitle}>For sharp recall</Text>
        </View>
      </View>

      <View style={styles.modeCard}>
        <Ionicons name="aperture-outline" size={28} color="#FF6B6B" />
        <View>
          <Text style={styles.modeTitle}>Creativity</Text>
          <Text style={styles.modeSubtitle}>For free-flow thinking</Text>
        </View>
      </View>

      </SafeAreaView>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "flex-start" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  time: { color: "#fff", fontSize: 16 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  headerStat: { color: "#fff", marginHorizontal: 4 },
  avatar: { width: 36, height: 36, borderRadius: 18, marginLeft: 12 },

  greeting: { marginTop: 20 },
  wave: { fontSize: 16, color: "#fff" },
  greetingText: { fontSize: 22, fontWeight: "bold", color: "#fff" },

  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  cardSubtitle: { fontSize: 14, color: "#aaa", marginTop: 6 },
  button: {
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 12,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff" },

  subheading: { marginTop: 30, color: "#aaa", fontSize: 14 },
  modeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    gap: 12,
  },
  modeTitle: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  modeSubtitle: { fontSize: 13, color: "#aaa" },

  bottomNav: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  navItem: { alignItems: "center" },
  navLabel: { color: "#fff", fontSize: 12, marginTop: 4 },
  navLabelActive: { color: "#4FACFE", fontSize: 12, marginTop: 4, fontWeight: "bold" },
});
