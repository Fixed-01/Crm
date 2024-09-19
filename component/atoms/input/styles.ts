import { StyleSheet, I18nManager } from 'react-native';
import { Colors, scale, spacing } from '../../../config';
const styles = StyleSheet.create({
    container: {    
      paddingHorizontal: spacing.S22,
      paddingVertical: spacing.S10, 
      fontFamily: 'MyCustomFont-Bold',
  },
  pickerContainer: {
    borderColor: Colors.Border,
    backgroundColor: Colors.White,
    borderStyle: 'solid',
    borderWidth: 1, 
    borderRadius: scale(6),
    height: scale(40),
    display:"flex",
    justifyContent:'center',
    fontFamily: 'MyCustomFont-Bold',
  },
  placeholder: {
    color: Colors.Red,
    fontFamily: 'MyCustomFont-Bold',
  },
  picker: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontSize:20,color: Colors.Red,
    fontFamily: 'MyCustomFont-Bold',
  },
  textInput: {
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'MyCustomFont-Bold',
  },  
  
});

export default styles;