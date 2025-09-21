import { Stack } from 'expo-router';
import React from 'react';

export default function accountLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}