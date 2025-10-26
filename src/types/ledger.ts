export type LedgerEntryType = 'accrual' | 'conversion' | 'redemption';

export interface LedgerEntry {
  id: string;
  type: LedgerEntryType;
  description: string;
  amount: number;
  occurredAt: string;
}
