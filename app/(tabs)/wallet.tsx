import { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import QRCode from 'react-native-qrcode-svg';
import Barcode from 'react-native-barcode-builder';
import { Feather } from '@expo/vector-icons';
import { Switch, Text, View } from 'react-native';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useUser } from '@/state/UserContext';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

export default function WalletScreen() {
  const { user } = useUser();
  const [showBarcode, setShowBarcode] = useState(false);
  useKeepAwake();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.walletBackground,
        padding: spacing.xxl,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: colors.surface,
          fontSize: 24,
          fontWeight: '700',
          marginTop: spacing.giant,
        }}
      >
        Show this code at checkout
      </Text>
      <View
        style={{
          backgroundColor: colors.qrBackground,
          padding: spacing.xxl,
          borderRadius: radius.xl,
          marginTop: spacing.xxl,
        }}
        accessible
        accessibilityLabel={`Rewards QR code for number ${user.rewardsNumber}`}
      >
        <QRCode
          value={user.rewardsNumber}
          size={260}
          backgroundColor={colors.qrBackground}
          color={colors.surface}
        />
        {showBarcode ? (
          <View style={{ marginTop: spacing.xxl, alignItems: 'center' }}>
            <Barcode value={user.rewardsNumber} format="CODE128" background={colors.qrBackground} lineColor={colors.surface} />
            <Text style={{ color: colors.surface, marginTop: spacing.sm }}>{user.rewardsNumber}</Text>
          </View>
        ) : null}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: spacing.xl,
          gap: spacing.md,
        }}
      >
        <Switch value={showBarcode} onValueChange={setShowBarcode} thumbColor={showBarcode ? colors.accent : '#f4f3f4'} />
        <Text style={{ color: colors.surface, fontWeight: '600' }}>Show barcode</Text>
      </View>
      <PrimaryButton
        label="Add to Google Wallet"
        onPress={() => {}}
        style={{
          marginTop: spacing.xxl,
          alignSelf: 'stretch',
        }}
        icon={<Feather name="plus" size={18} color={colors.surface} />}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: spacing.sm,
          marginTop: spacing.xl,
        }}
      >
        <Feather name="sun" size={18} color={colors.surface} />
        <Text style={{ color: colors.surface, flex: 1, lineHeight: 20 }}>
          Brightness boosted. Turn off auto-brightness for best scanning.
        </Text>
      </View>
    </View>
  );
}
