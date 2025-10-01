import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { shadows } from '@/theme/shadows';
import { spacing } from '@/theme/spacing';

interface BalanceCardProps {
  balance: number;
  nextConversionLabel?: string;
}

export function BalanceCard({ balance, nextConversionLabel }: BalanceCardProps) {
  return (
    <LinearGradient
      colors={[colors.surface, '#EFFBF5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: radius.xl,
        padding: spacing.xxl,
        marginTop: -spacing.giant,
        marginHorizontal: spacing.xl,
        ...shadows.card,
      }}
    >
      <Text
        style={{
          color: colors.textSecondary,
          fontSize: 16,
          fontWeight: '600',
        }}
      >
        Rewards Balance
      </Text>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: 48,
          fontWeight: '800',
          marginVertical: spacing.sm,
        }}
        accessibilityLabel={`Current balance ${balance.toFixed(2)} dollars`}
      >
        ${balance.toFixed(2)}
      </Text>
      {nextConversionLabel ? (
        <View
          style={{
            backgroundColor: '#E8F6EE',
            alignSelf: 'flex-start',
            paddingHorizontal: spacing.lg,
            paddingVertical: spacing.sm,
            borderRadius: radius.pill,
          }}
        >
          <Text style={{ color: colors.accent, fontWeight: '600' }}>{nextConversionLabel}</Text>
        </View>
      ) : null}
    </LinearGradient>
  );
}
