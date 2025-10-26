import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { FlatList, Pressable, Text, View } from 'react-native';
import { GradientHeader } from '@/components/GradientHeader';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

const statements = [
  { id: '2024-03', label: 'March 2024', url: 'https://example.com/statements/march.pdf' },
  { id: '2024-02', label: 'February 2024', url: 'https://example.com/statements/february.pdf' },
  { id: '2024-01', label: 'January 2024', url: 'https://example.com/statements/january.pdf' },
];

export default function StatementsScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <GradientHeader title="Statements" subtitle="Download your monthly PDFs" />
      <FlatList
        data={statements}
        keyExtractor={(item) => item.id}
        style={{ marginTop: spacing.xxl }}
        contentContainerStyle={{ paddingBottom: spacing.giant }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push({ pathname: '/statements/[month]', params: { month: item.id, url: item.url } })}
            style={({ pressed }) => [
              {
                backgroundColor: colors.surface,
                padding: spacing.xxl,
                borderRadius: radius.xl,
                marginBottom: spacing.lg,
                flexDirection: 'row',
                alignItems: 'center',
              },
              pressed && { opacity: 0.85 },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: '700' }}>{item.label}</Text>
              <Text style={{ color: colors.textSecondary, marginTop: spacing.sm }}>Tap to view statement</Text>
            </View>
            <Feather name="chevron-right" size={24} color={colors.textSecondary} />
          </Pressable>
        )}
        ListFooterComponent={() => (
          <Text style={{ color: colors.textMuted, textAlign: 'center', marginTop: spacing.xl }}>
            Statements open in a secure viewer.
          </Text>
        )}
      />
    </ScreenContainer>
  );
}
