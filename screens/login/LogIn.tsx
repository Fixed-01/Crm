import { StyleSheet,TextInput, View, Text, Button } from "react-native";

export default function LogIn({navigation}: {navigation: any}){
    return(
        <View>
            
          <View style={styles.area}>
            <Text>Love Allah</Text>
            <Text>Love Allah</Text>
            <Button title="دخول" onPress={()=>navigation.navigate('Dashbord')} /> 
            </View>
      </View>        
    );
}

const styles = StyleSheet.create({
  area:{
    padding:50,
  }
})