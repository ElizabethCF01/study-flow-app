import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Icon } from 'lucide-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,}}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          //href : null,
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="house.fill" color={color} />,
     
        }}
      />

       
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen name='settings'
      options={{title:'Settings',
      tabBarIcon:({color})=><IconSymbol size={30} name = "seal.fill" color={color}/>,
    }}/>
    </Tabs>
  );
}
