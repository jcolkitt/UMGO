import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { radius } from '@/theme/radius';

interface GradientHeaderProps {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
}

export function GradientHeader({ title, subtitle, trailing }: GradientHeaderProps) {
  return (
    <LinearGradient
      colors={[colors.gradientStart, colors.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: radius.xl,
        paddingVertical: spacing.xxl,
        paddingHorizontal: spacing.xl,
        marginTop: spacing.xl,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: colors.surface,
              fontSize: 28,
              fontWeight: '700',
              marginBottom: subtitle ? spacing.sm : 0,
            }}
            accessibilityRole="header"
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={{
                color: `${colors.surface}CC`,
                fontSize: 16,
                fontWeight: '500',
              }}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
        {trailing}
      </View>
    </LinearGradient>
  );
}
