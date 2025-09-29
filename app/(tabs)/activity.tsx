import { useMemo } from 'react';
import { FlashList } from '@shopify/flash-list';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { GradientHeader } from '@/components/GradientHeader';
import { ListRow } from '@/components/ListRow';
import { ScreenContainer } from '@/components/ScreenContainer';
import { EmptyState } from '@/components/EmptyState';
import { useLedger } from '@/state/LedgerContext';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { LedgerEntry } from '@/types/ledger';

function entryIcon(type: LedgerEntry['type']) {
  switch (type) {
    case 'accrual':
      return <Feather name="arrow-down-circle" size={20} color={colors.accent} />;
    case 'conversion':
      return <Feather name="refresh-cw" size={20} color={colors.accent} />;
    case 'redemption':
    default:
      return <Feather name="arrow-up-right" size={20} color={colors.neutral} />;
  }
}

export default function ActivityScreen() {
  const { entries } = useLedger();

  const formatted = useMemo(
    () =>
      entries.map((entry) => ({
        ...entry,
        subtitle: new Date(entry.occurredAt).toLocaleString(),
        amountLabel: `${entry.amount > 0 ? '+' : ''}${entry.amount.toFixed(2)}`,
        tint: entry.amount > 0 ? 'success' : 'neutral',
      })),
    [entries]
  );

  return (
    <ScreenContainer>
      <GradientHeader title="Activity" subtitle="Track every earn and burn" />
      <View style={{ flex: 1, marginTop: spacing.xxl }}>
        {formatted.length === 0 ? (
          <EmptyState title="No activity yet" description="Once you start shopping, your history will appear here." />
        ) : (
          <FlashList
            data={formatted}
            renderItem={({ item }) => (
              <ListRow
                icon={entryIcon(item.type)}
                title={item.description}
                subtitle={item.subtitle}
                amount={`$${item.amountLabel}`}
                amountTint={item.tint}
              />
            )}
            keyExtractor={(item) => item.id}
            estimatedItemSize={82}
            contentContainerStyle={{ paddingBottom: spacing.giant }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </ScreenContainer>
  );
}
