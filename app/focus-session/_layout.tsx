import { Stack } from 'expo-router';
import React from 'react';

export default function FocusSessionLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="playlist" />
      <Stack.Screen name="player" />
    </Stack>
  );
}