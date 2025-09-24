import { Button } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen() {
  const resetOnboarding = async () => {
      try {
        await SecureStore.setItemAsync('hasOnboarded', 'false');
        router.replace('/onboarding');
      } catch (error) {
        console.error('Failed to reset onboarding status', error);
      }
    };

    const goToFocusSession = () => {
      router.push('/focus-session');
    };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Under development!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button className="mt-4" onPress={resetOnboarding} >
            <ThemedText>Reset Onboarding</ThemedText>
          </Button>
          <Button className="mt-4" onPress={goToFocusSession}>
            <ThemedText>Go to Focus Session</ThemedText>
          </Button>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
