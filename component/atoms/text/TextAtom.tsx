import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from './styles';

interface TextAtomProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right'; 
  style?: TextStyle;
}

const TextAtom: React.FC<TextAtomProps> = ({ children, align = 'left', style, ...props }) => {
  return (
    <Text style={[styles.text, { textAlign: align }, style]} {...props}>
      {children}
    </Text>
  );
};

export default TextAtom;