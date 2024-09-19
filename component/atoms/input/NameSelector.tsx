import React, { useState } from 'react';
import { View, Text, StyleSheet, I18nManager  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
const NameSelector = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="اسم المندوب" value="" style={styles.placeholder} />
        <Picker.Item label="المندوب محمد فاير" value="java" />
        <Picker.Item label="المندوب سليم فاير" value="js" />
        <Picker.Item label="المندوب احمد فاير" value="python" />
      </Picker>
      </View>
    </View>
  );
};

export default NameSelector;
