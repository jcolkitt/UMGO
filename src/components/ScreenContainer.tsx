import { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  contentContainerStyle?: ViewStyle;
}

export function ScreenContainer({
  children,
  scrollable = false,
  contentContainerStyle,
}: ScreenContainerProps) {
  if (scrollable) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingHorizontal: spacing.xl,
              paddingBottom: spacing.giant,
            },
            contentContainerStyle,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.xl,
      }}
    >
      <View style={[{ flex: 1 }, contentContainerStyle]}>{children}</View>
    </SafeAreaView>
  );
}
