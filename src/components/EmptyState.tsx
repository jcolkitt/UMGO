import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <View
      style={{
        padding: spacing.xxl,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: colors.textPrimary,
          fontWeight: '700',
          fontSize: 18,
        }}
      >
        {title}
      </Text>
      {description ? (
        <Text
          style={{
            color: colors.textSecondary,
            textAlign: 'center',
            marginTop: spacing.md,
            lineHeight: 20,
          }}
        >
          {description}
        </Text>
      ) : null}
      {action ? <View style={{ marginTop: spacing.xl }}>{action}</View> : null}
    </View>
  );
}
