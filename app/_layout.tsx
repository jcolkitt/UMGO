import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProviders } from '@/state/AppProviders';
import { useNotificationSetup } from '@/hooks/useNotifications';
import { colors } from '@/theme/colors';

export default function RootLayout() {
  useNotificationSetup();

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppProviders>
        <StatusBar style="light" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="statements/[month]"
            options={{
              title: 'Statement',
              headerStyle: { backgroundColor: colors.background },
              headerTintColor: colors.textPrimary,
            }}
          />
        </Stack>
      </AppProviders>
    </GestureHandlerRootView>
  );
}
