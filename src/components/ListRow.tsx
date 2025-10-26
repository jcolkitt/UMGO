import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

interface ListRowProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  amount: string;
  amountTint?: 'success' | 'neutral';
}

export function ListRow({ icon, title, subtitle, amount, amountTint = 'neutral' }: ListRowProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.lg,
        marginBottom: spacing.lg,
      }}
    >
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: radius.lg,
          backgroundColor: '#ECFDF3',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: spacing.lg,
        }}
        accessibilityElementsHidden
      >
        {icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: colors.textPrimary, fontWeight: '600', fontSize: 16 }}>{title}</Text>
        {subtitle ? (
          <Text style={{ color: colors.textSecondary, marginTop: 2 }}>{subtitle}</Text>
        ) : null}
      </View>
      <Text
        style={{
          color: amountTint === 'success' ? colors.success : colors.neutral,
          fontWeight: '700',
          fontSize: 16,
          marginLeft: spacing.lg,
        }}
      >
        {amount}
      </Text>
    </View>
  );
}
