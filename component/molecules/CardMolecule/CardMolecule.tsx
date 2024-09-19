import React from 'react';
import { View } from 'react-native';
import { TextAtom, NumberAtom, ImageAtom } from '../../atoms';
import styles from './styles';

interface CardMoleculeProps {
  imageSource: any;
  text: string;
  number: number;
  backgroundColor?: string;
  Numcolor?: string;
}

const CardMolecule: React.FC<CardMoleculeProps> = ({ imageSource, text, number, backgroundColor ='#000', Numcolor ='#000' }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.inner}>
       <ImageAtom
        source={imageSource} 
        imageStyle={styles.image}
      />
      <TextAtom style={styles.text}>{text}</TextAtom>
      </View>
    </View>
  );
};

export default CardMolecule;