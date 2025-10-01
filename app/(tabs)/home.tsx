import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { BalanceCard } from '@/components/BalanceCard';
import { GradientHeader } from '@/components/GradientHeader';
import { PrimaryButton } from '@/components/PrimaryButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { useUser } from '@/state/UserContext';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

export default function HomeScreen() {
  const router = useRouter();
  const { user } = useUser();

  const goToWallet = () => router.push('/wallet');

  return (
    <View style={{ flex: 1 }}>
      <ScreenContainer scrollable>
        <GradientHeader
          title="Union Market Rewards"
          subtitle={`Welcome back, ${user.name.split(' ')[0]}`}
          trailing={<Feather name="sun" size={24} color={colors.surface} />}
        />
        <BalanceCard balance={user.balance} nextConversionLabel={`Next conversion: ${user.nextConversion}`} />
        <View style={{ marginTop: spacing.xxl, gap: spacing.lg }}>
          <PrimaryButton label="Show My Code" onPress={goToWallet} />
          <PrimaryButton label="Go Paperless" onPress={() => {}} variant="secondary" />
        </View>
        <View style={{ marginTop: spacing.xxl }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 20,
              fontWeight: '700',
              marginBottom: spacing.md,
            }}
          >
            This Week
          </Text>
          <View
            style={{
              backgroundColor: colors.surface,
              padding: spacing.xxl,
              borderRadius: radius.xl,
            }}
          >
            <Text style={{ color: colors.textSecondary, lineHeight: 22 }}>
              Earn 2× rewards on local produce and everyday essentials. Tap Activity to see how
              you’re trending this month.
            </Text>
          </View>
        </View>
      </ScreenContainer>
      <PrimaryButton
        label="Show My Code"
        onPress={goToWallet}
        style={{
          position: 'absolute',
          bottom: spacing.giant,
          alignSelf: 'center',
          width: '80%',
        }}
      />
    </View>
  );
}
