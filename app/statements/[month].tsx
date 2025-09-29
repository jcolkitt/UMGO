import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { colors } from '@/theme/colors';

export default function StatementDetailScreen() {
  const params = useLocalSearchParams<{ month?: string | string[]; url?: string | string[] }>();
  const month = Array.isArray(params.month) ? params.month[0] : params.month;
  const url = Array.isArray(params.url) ? params.url[0] : params.url;
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (month && 'setOptions' in navigation) {
      (navigation as any).setOptions({ title: `Statement ${month}` });
    }
  }, [month, navigation]);

  const targetUrl = url ?? 'https://example.com/placeholder.pdf';

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <WebView
        source={{ uri: targetUrl }}
        onLoadEnd={() => setIsLoading(false)}
        style={{ flex: 1 }}
      />
      {isLoading ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF88',
          }}
        >
          <ActivityIndicator size="large" color={colors.accent} />
        </View>
      ) : null}
    </View>
  );
}
