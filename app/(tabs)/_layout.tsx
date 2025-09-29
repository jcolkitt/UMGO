import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 72 : 84,
          paddingBottom: spacing.sm,
          paddingTop: spacing.sm,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          position: 'absolute',
          backgroundColor: colors.surface,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size, focused }) => {
          switch (route.name) {
            case 'home':
              return <Feather name={focused ? 'home' : 'home'} size={size} color={color} />;
            case 'wallet':
              return <Feather name="credit-card" size={size} color={color} />;
            case 'activity':
              return <MaterialCommunityIcons name="clock-outline" size={size} color={color} />;
            case 'statements':
              return <Feather name="file-text" size={size} color={color} />;
            case 'weekly-ad':
              return <Feather name="shopping-bag" size={size} color={color} />;
            default:
              return <Feather name="circle" size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="wallet" options={{ title: 'Wallet' }} />
      <Tabs.Screen name="activity" options={{ title: 'Activity' }} />
      <Tabs.Screen name="statements" options={{ title: 'Statements' }} />
      <Tabs.Screen name="weekly-ad" options={{ title: 'Weekly Ad' }} />
    </Tabs>
  );
}
