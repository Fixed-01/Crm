import React, { useState } from 'react';
import { View, Text, StyleSheet, I18nManager  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
const StatusSelector = () => {
  const [selectedValue, setSelectedValue] = useState("مخطط");

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="حالة الإجراء" value="" style={styles.placeholder} />
        <Picker.Item label="مخطط" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="cpp" />
      </Picker>
      </View>
    </View>
  );
};

export default StatusSelector;
