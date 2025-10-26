import * as Haptics from 'expo-haptics';
import { ReactNode, useCallback } from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  icon?: ReactNode;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary';
}

export function PrimaryButton({ label, onPress, icon, style, variant = 'primary' }: PrimaryButtonProps) {
  const handlePress = useCallback(() => {
    Haptics.selectionAsync().catch(() => null);
    onPress();
  }, [onPress]);

  const isSecondary = variant === 'secondary';

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: spacing.lg,
          paddingHorizontal: spacing.xxl,
          borderRadius: radius.pill,
          backgroundColor: isSecondary ? `${colors.surface}CC` : colors.accent,
          borderWidth: isSecondary ? 1 : 0,
          borderColor: isSecondary ? colors.accent : 'transparent',
          opacity: pressed ? 0.8 : 1,
        },
        style,
      ]}
    >
      {icon}
      <Text
        style={{
          color: isSecondary ? colors.accent : colors.surface,
          fontWeight: '700',
          fontSize: 16,
          marginLeft: icon ? spacing.sm : 0,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
