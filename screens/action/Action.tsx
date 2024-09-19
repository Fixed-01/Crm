import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Colors, scale, spacing } from '../../config';
import DatePickerInput from '../../component/atoms/input/DatePickerInput';
import NameSelector from '../../component/atoms/input/NameSelector';
import ClientSelector from '../../component/atoms/input/ClientSelector';
import StatusSelector from '../../component/atoms/input/StatusSekecrot';
import DatePickerEnd from '../../component/atoms/input/DatePickerEnd';
const ActionFun = () => {

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.infoHolder}>
     
      <NameSelector />
      <ClientSelector />
      <StatusSelector />
      <DatePickerInput />
      <DatePickerEnd />

    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Background,
      },
      infoHolder: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: spacing.S30,
      },

});
export default ActionFun;