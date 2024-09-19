import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { I18nManager, StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { Colors, scale, spacing } from '../../config';
import { useFonts } from 'expo-font';
import InfoCardMolecule from '../../component/molecules/InfoCardMolecule/InfoCardMolecule';
import CardMolecule from '../../component/molecules/CardMolecule/CardMolecule';
const calculator = require('../../src/assets/images/calculator.png');
const paper = require('../../src/assets/images/paper.png');
const accounting = require('../../src/assets/images/account.png');
const cardA = require('../../src/assets/images/card-1.png');
const cardB = require('../../src/assets/images/card-2.png');
const cardC = require('../../src/assets/images/card-3.png');
const cardD = require('../../src/assets/images/card-4.png');
const Sales: React.FC = () => {

  useEffect(() => {
    I18nManager.forceRTL(true);
  }, []);

  const [fontsLoaded] = useFonts({
    'MyCustomFont-Regular': require('../../assets/fonts/Cairo-Regular.ttf'),
    'MyCustomFont-Bold': require('../../assets/fonts/Cairo-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.infoHolder}>
      <InfoCardMolecule
        backgroundColor= {Colors.Green}
        imageSource={calculator}
        text="رصيد صندوق المندوب اليومي"
        number={2.10}
        Numcolor={Colors.White}
      />
      </View>

      <View style={styles.infoHolder}>
      <InfoCardMolecule
        backgroundColor= {Colors.Yellow}
        imageSource={paper}
        text="إجمالي فواتير المبيعات"
        number={6.50}
        Numcolor={Colors.White}
      />
      </View>

      <View style={styles.infoHolder}>
      <InfoCardMolecule
        backgroundColor= {Colors.Red}
        imageSource={accounting}
        text="إجمالي فواتير المبيعات المرتجعة"
        number={13.65}
        Numcolor={Colors.White}
      />
      </View>


      <View style={styles.cardHolder}>
        <CardMolecule  backgroundColor= {Colors.White}
        imageSource={cardA}
        text="المحاسبة"
        number={13.65}
        Numcolor={Colors.White}/>
        <CardMolecule  backgroundColor= {Colors.White}
        imageSource={cardB}
        text="المستودعات"
        number={13.65}
        Numcolor={Colors.White}/>      
      </View>

      <View style={[styles.cardHolder, {marginTop:spacing.S4}]}>
        <CardMolecule  backgroundColor= {Colors.White}
        imageSource={cardC}
        text="المبيعات"
        number={13.65}
        Numcolor={Colors.DarkRed}/>
        <CardMolecule  backgroundColor= {Colors.White}
        imageSource={cardD}
        text="المشتريات"
        number={13.65}
        Numcolor={Colors.DarkRed}/>      
      </View>
      <StatusBar style="light" />
    </SafeAreaView>    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
    justifyContent: 'center',
  },
  infoHolder: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: spacing.S26,
    paddingVertical: spacing.S6, 
    marginTop: spacing.S2,
    justifyContent: 'center',
  },
  cardHolder:{
  display: 'flex',
  flexDirection: 'row',
  paddingHorizontal: spacing.S26,
  paddingVertical: spacing.S16, 
  marginTop: spacing.S28,
  justifyContent: 'space-between',  
  }
});

export default Sales;