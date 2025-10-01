declare module 'react-native-barcode-builder' {
  import { Component } from 'react';
  import { StyleProp, ViewStyle } from 'react-native';

  export interface BarcodeProps {
    value: string;
    format?: 'CODE128' | 'CODE39' | 'EAN13' | 'EAN8' | 'UPC' | string;
    text?: string;
    background?: string;
    lineColor?: string;
    flat?: boolean;
    style?: StyleProp<ViewStyle>;
  }

  export default class Barcode extends Component<BarcodeProps> {}
}
