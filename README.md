# Union Market Rewards

Union Market Rewards is a lightweight Expo + React Native experience designed for Android-first shoppers. The app ships with a modern tabbed interface, bold balance visuals, and quick access to a scannable rewards code.

## Getting started

```bash
npm install
npm start
```

Then choose the **Android** option to open the project inside Expo Go.

### Requirements

- Node.js 18+
- Expo Go on an Android device or emulator

## Project structure

- `app/` – routes powered by Expo Router (tabs + statement detail view)
- `src/components/` – reusable UI (buttons, cards, headers)
- `src/state/` – lightweight in-memory data store and hooks (`useUser`, `useLedger`)
- `src/theme/` – color, spacing, radius, and shadow tokens
- `src/types/` – TypeScript models and module declarations

## Mock data & rewards number

The app seeds a single mock user and ledger on launch. Update the rewards number in [`src/state/mock-data.ts`](src/state/mock-data.ts) – the change instantly flows to the wallet QR and barcode.

```ts
export const REWARDS_NUMBER = '5415551234';
```

Replace the string with the real membership ID when you integrate the production API.

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` | Launch Expo CLI and Metro bundler |
| `npm run android` | Start the bundler and open Android Expo Go |
| `npm run ios` | Start the bundler and open iOS Expo Go |
| `npm run web` | Start Expo for web |
| `npm run lint` | Run ESLint over the TypeScript source |

## Notes

- Screen brightness lock is stubbed with messaging to keep the build Expo Go friendly.
- The wallet screen uses [`expo-keep-awake`](https://docs.expo.dev/versions/latest/sdk/keep-awake/) to prevent the display from sleeping while the QR code is visible.
- Haptics fire on key button interactions when supported by the device.
