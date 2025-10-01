export const colors = {
  background: '#F5F7FA',
  surface: '#FFFFFF',
  accent: '#27AE60',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  success: '#27AE60',
  neutral: '#4B5563',
  border: '#E5E7EB',
  gradientStart: '#2ECC71',
  gradientEnd: '#1D976C',
  qrBackground: '#0B1F17',
  walletBackground: '#06210D'
} as const;

export type ColorName = keyof typeof colors;
