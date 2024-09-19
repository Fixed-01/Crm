import { StyleSheet } from 'react-native';
import { Colors, scale, spacing } from '../../../config';
const styles = StyleSheet.create({
  container: {
    display:'flex',
    borderRadius: scale(6),
    paddingHorizontal: spacing.S22,
    paddingVertical: spacing.S22, 
    alignItems:'center',
    justifyContent:'center',
    elevation: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6, 
    width:'46%',  
  },
  inner: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    marginStart:spacing.S12,
    fontFamily: 'MyCustomFont-Bold',
    fontSize: scale(16),
    marginTop: spacing.S24,
    color: Colors.Primary,
  },
  image: {
    width: scale(70),
    height: scale(70),
  },
  number: {
    fontFamily: 'MyCustomFont-Bold',
    fontSize: scale(18),
  }
});

export default styles;