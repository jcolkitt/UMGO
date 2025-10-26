import { LedgerEntry } from '@/types/ledger';
import { User } from '@/types/user';

export const REWARDS_NUMBER = '5415551234';

export const seededUser: User = {
  id: 'user-1',
  name: 'Union Market Neighbor',
  rewardsNumber: REWARDS_NUMBER,
  balance: 23.5,
  nextConversion: 'Sunday',
};

export const seededLedger: LedgerEntry[] = [
  {
    id: 'txn-1',
    type: 'accrual',
    description: '5% back - Grocery Run',
    amount: 4.5,
    occurredAt: '2024-03-02T13:00:00Z',
  },
  {
    id: 'txn-2',
    type: 'conversion',
    description: 'Monthly Conversion',
    amount: 10,
    occurredAt: '2024-02-28T08:00:00Z',
  },
  {
    id: 'txn-3',
    type: 'redemption',
    description: 'Checkout - Aisle 4',
    amount: -12,
    occurredAt: '2024-02-24T18:45:00Z',
  },
  {
    id: 'txn-4',
    type: 'accrual',
    description: 'Double Points Weekend',
    amount: 8,
    occurredAt: '2024-02-15T11:30:00Z',
  },
];
