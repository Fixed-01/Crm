import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
const DatePickerInput: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={styles.textInput}
          value={date ? date.toDateString() : ''}
          placeholder="التاريخ"
           placeholderTextColor="#000"
          editable={false}
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      </View>
    </View>
  );
};


export default DatePickerInput;