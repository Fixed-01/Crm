import React, { useState } from 'react';
import { View } from 'react-native';
import DatePickerInput from '../../component/atoms/input/DatePickerInput';
import NameSelector from '../../component/atoms/input/NameSelector';

const AppPrice = () => {

  return (
    <View>
      <DatePickerInput />
      <NameSelector />
    </View>
  );
};


export default AppPrice;
