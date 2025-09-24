import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Box,
} from "@gluestack-ui/themed";
import { Image } from "expo-image";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GlowView from "../../components/glow-view";

export default function HomeScreen() {
  const resetOnboarding = async () => {
    try {
      await SecureStore.setItemAsync("hasOnboarded", "false");
      router.replace("/onboarding");
    } catch (error) {
      console.error("Failed to reset onboarding status", error);
    }
  };

  const goToFocusSession = () => {
    router.push("/focus-session");
  };
  return (
    <GlowView showLogo={false}>
      {/* Header */}
      <Box className="flex-1 w-full px-4">
        {/* Greeting */}
        <View className="flex-row justify-between items-center mt-4">
          <View className="mb-6">
            <Text style={styles.wave}>👋 Hi Emma</Text>
            <Text style={styles.greetingText}>Good Evening</Text>
          </View>
          <Avatar size="md">
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
              source={require("../../assets/images/avatar.jpg")}
            />
            <AvatarBadge />
          </Avatar>
        </View>

        {/* Focus Modes */}
        <Text style={styles.subheading}>Choose your focus mode</Text>

        {/* Deep Focus Mode / Navigation */}
        <Pressable
          onPress={goToFocusSession}
          className="mt-6 items-center flex-row gap-4 bg-white/10 rounded-2xl p-6 py-8"
        >
          <Image
            source={require("../../assets/images/deep-focus-icon.png")}
            style={{ width: 42, height: 42 }}
          />
          <View>
            <Text style={styles.modeTitle}>Deep Focus</Text>
            <Text style={styles.modeSubtitle}>For longer Sessions</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={goToFocusSession}
          className="mt-8 items-center flex-row gap-4 bg-white/10 rounded-2xl p-6 py-8"
        >
          <Image
            source={require("../../assets/images/exam-cram-icon.png")}
            style={{ width: 42, height: 42 }}
          />
          <View>
            <Text style={styles.modeTitle}>Exam Cram</Text>
            <Text style={styles.modeSubtitle}>For sharp recall</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={goToFocusSession}
          className="mt-8 items-center flex-row gap-4 bg-white/10 rounded-2xl p-6 py-8"
        >
          <Image
            source={require("../../assets/images/creativity-icon.png")}
            style={{ width: 42, height: 42 }}
          />
          <View>
            <Text style={styles.modeTitle}>Creativity</Text>
            <Text style={styles.modeSubtitle}>For free-flow thinking</Text>
          </View>
        </Pressable>
      </Box>
    </GlowView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "flex-start" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: { color: "#fff", fontSize: 16 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  headerStat: { color: "#fff", marginHorizontal: 4 },
  avatar: { width: 36, height: 36, borderRadius: 18, marginLeft: 12 },

  wave: { fontSize: 16, color: "#fff" },
  greetingText: { fontSize: 22, fontWeight: "bold", color: "#fff" },

  card: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  navLabelActive: {
    color: "#4FACFE",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
  },
});
