import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

export function useNotificationSetup() {
  useEffect(() => {
    Notifications.requestPermissionsAsync().catch(() => {
      // Silent fail in Expo Go, stub for future native integration
    });
  }, []);
}
