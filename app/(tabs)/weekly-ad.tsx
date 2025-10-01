import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { GradientHeader } from '@/components/GradientHeader';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colors } from '@/theme/colors';
import { radius } from '@/theme/radius';
import { spacing } from '@/theme/spacing';

const AD_URL = 'https://example.com/weekly-ad.pdf';

export default function WeeklyAdScreen() {
  const [loading, setLoading] = useState(true);

  return (
    <ScreenContainer>
      <GradientHeader title="Weekly Ad" subtitle="Fresh deals drop every Wednesday" />
      <View
        style={{
          flex: 1,
          marginTop: spacing.xxl,
          borderRadius: radius.xl,
          overflow: 'hidden',
        }}
      >
        <WebView
          source={{ uri: AD_URL }}
          onLoadEnd={() => setLoading(false)}
          style={{ flex: 1, backgroundColor: colors.surface }}
        />
        {loading ? (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFFAA',
            }}
          >
            <ActivityIndicator size="large" color={colors.accent} />
          </View>
        ) : null}
      </View>
    </ScreenContainer>
  );
}
