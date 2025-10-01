export const shadows = {
  card: {
    shadowColor: '#1D976C40',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
  },
} as const;

export type ShadowName = keyof typeof shadows;
