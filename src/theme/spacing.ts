export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  giant: 40
} as const;

export type SpacingName = keyof typeof spacing;
