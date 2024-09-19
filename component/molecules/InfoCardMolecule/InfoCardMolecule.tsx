import React from 'react';
import { View } from 'react-native';
import { TextAtom, NumberAtom, ImageAtom } from '../../atoms';
import styles from './styles';

interface InfoCardMoleculeProps {
  imageSource: any;
  text: string;
  number: number;
  backgroundColor?: string;
  Numcolor?: string;
}

const InfoCardMolecule: React.FC<InfoCardMoleculeProps> = ({ imageSource, text, number, backgroundColor ='#000', Numcolor ='#000' }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.inner}>
       <ImageAtom
        source={imageSource} 
        imageStyle={styles.image}
      />
      <TextAtom style={styles.text}>{text}</TextAtom>
      </View>
      <NumberAtom Numcolor={Numcolor} style={styles.number}>{number}</NumberAtom>
    </View>
  );
};

export default InfoCardMolecule;