// app/(auth)/_layout.tsx
import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { SignUpProvider } from '@/contexts/SignUpContext';
import { useTheme } from '@/hooks/useTheme';

export default function AuthLayout(): JSX.Element {


  // Animação de fade-in
  const opacity = useSharedValue(0);
  const fadeStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));
  const theme = useTheme();

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 400 });
  }, []);

  return (
    <SignUpProvider>
        <Animated.View style={[styles.flex, fadeStyle]}>
          <Slot />
          <StatusBar translucent style="dark"/>
        </Animated.View>
    </SignUpProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
});
