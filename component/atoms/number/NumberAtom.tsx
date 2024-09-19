import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from './styles';

interface NumberAtomProps {
  children: React.ReactNode;
  style?: TextStyle;
  Numcolor?: string;
}

const NumberAtom: React.FC<NumberAtomProps> = ({ children, style, Numcolor='#000', ...props }) => {
  return (
    <Text style={[styles.text, style, { color: Numcolor }]} {...props}>
      {children}
    </Text>
  );
};

export default NumberAtom;