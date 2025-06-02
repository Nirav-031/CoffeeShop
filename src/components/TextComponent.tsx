import {FONTFAMILY} from '@utils/GlobalStyle';
import React from 'react';
import {
  Platform,
  Text as RNText,
  StyleSheet,
  TextProps,
  TextStyle,
} from 'react-native';

// Define custom prop types
interface CustomTextProps extends TextProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'bodySmall'
    | 'caption'
    | 'button'
    | 'label';
  color?: string;
  size?: number;
  weight?:
    | 'thin'
    | 'ultraLight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'heavy'
    | 'black'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  align?: 'left' | 'center' | 'right' | 'justify';
  removePadding?: boolean; // New prop to control padding removal
}

const TextComponent: React.FC<CustomTextProps> = ({
  style,
  variant = 'body',
  color,
  size,
  weight = 'normal',
  align = 'left',
  removePadding = true, // Default to true to remove padding
  children,
  ...props
}) => {
  // Predefined text variants with proper TypeScript typing
  const variants: Record<CustomTextProps['variant'] & string, TextStyle> = {
    h1: {fontSize: 32, fontWeight: 'bold'},
    h2: {fontSize: 28, fontWeight: 'bold'},
    h3: {fontSize: 24, fontWeight: 'bold'},
    h4: {fontSize: 20, fontWeight: 'bold'},
    h5: {fontSize: 18, fontWeight: '600'},
    h6: {fontSize: 16, fontWeight: '600'},
    body: {fontSize: 16, fontWeight: 'normal'},
    bodySmall: {fontSize: 14, fontWeight: 'normal'},
    caption: {fontSize: 12, fontWeight: 'normal'},
    button: {fontSize: 16, fontWeight: '600'},
    label: {fontSize: 14, fontWeight: '500'},
  };

  // Font weight mapping with proper TypeScript typing
  const fontWeights: Record<
    NonNullable<CustomTextProps['weight']>,
    TextStyle['fontWeight']
  > = {
    thin: '100',
    ultraLight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
    black: '900',
    '100': '100',
    '200': '200',
    '300': '300',
    '400': '400',
    '500': '500',
    '600': '600',
    '700': '700',
    '800': '800',
    '900': '900',
  };

  // Text alignment options with proper TypeScript typing
  const textAlignments: Record<
    NonNullable<CustomTextProps['align']>,
    TextStyle['textAlign']
  > = {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  };

  // Build dynamic styles with proper typing
  const dynamicStyles: TextStyle = {
    ...variants[variant || 'body'],
    ...(color && {color}),
    ...(size && {fontSize: size}),
    ...(weight && {fontWeight: fontWeights[weight] || weight}),
    ...(align && {textAlign: textAlignments[align] || align}),
  };

  // Combine all styles
  const combinedStyles = [
    styles.defaultText,
    removePadding && styles.removePadding, // Apply padding removal conditionally
    dynamicStyles,
    style, // User-provided styles have highest priority
  ];

  return (
    <RNText style={combinedStyles} {...props}>
      {children}
    </RNText>
  );
};

// Default styles
const styles = StyleSheet.create({
  defaultText: {
    color: '#000000',
    fontFamily: FONTFAMILY.poppins_regular,
    ...Platform.select({
      ios: {
        lineHeight: 0, // Remove line height on iOS
      },
      android: {
        includeFontPadding: false, // Remove font padding on Android
        textAlignVertical: 'center', // Center text vertically
      },
    }),
  },
  removePadding: {
    // Additional styles to remove unwanted spacing
    margin: 0,
    padding: 0,
    ...Platform.select({
      ios: {
        lineHeight: 0,
        // For iOS, we can also try negative margins if needed
        marginTop: -2,
        marginBottom: -2,
      },
      android: {
        includeFontPadding: false,
        textAlignVertical: 'top',
        // Remove any default margins
        marginTop: 0,
        marginBottom: 0,
      },
    }),
  },
});

export default TextComponent;
