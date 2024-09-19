import { StyleSheet } from 'react-native';
import { Colors, scale, spacing } from '../../../config';
const styles = StyleSheet.create({
  container: {
    direction:'rtl',
    display:'flex',
    borderRadius: scale(18),
    paddingHorizontal: spacing.S22,
    paddingVertical: spacing.S14, 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  inner: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    marginStart:spacing.S12,
    fontFamily: 'MyCustomFont-Bold',
    fontSize: scale(14),
  },
  image: {
    width: scale(34),
    height: scale(34),
  },
  number: {
    fontFamily: 'MyCustomFont-Bold',
    fontSize: scale(20),
  }
});

export default styles;