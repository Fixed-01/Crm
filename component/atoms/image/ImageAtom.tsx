import React from 'react';
import { Image, ImageProps, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import styles from './styles';

interface ImageAtomProps extends ImageProps {
  containerStyle?: ViewStyle; 
  imageStyle?: ImageStyle; 
}

const ImageAtom: React.FC<ImageAtomProps> = ({ containerStyle, imageStyle, ...props }) => {
  return (
    <Image
      style={[styles.image, imageStyle]}
      {...props} 
    />
  );
};

export default ImageAtom;