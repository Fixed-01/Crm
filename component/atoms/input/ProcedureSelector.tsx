import React, { useState } from 'react';
import { View, Text, StyleSheet, I18nManager  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
const ProcedureSelector = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="المندوب" value="" style={styles.placeholder} />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="cpp" />
      </Picker>
      </View>
    </View>
  );
};

export default ProcedureSelector;
