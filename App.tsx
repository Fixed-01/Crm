import React, { useEffect } from 'react';
import { I18nManager, StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/login/LogIn';
import Home from './screens/home/Home';
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    I18nManager.forceRTL(true);
  }, []);

  const [fontsLoaded] = useFonts({
    'MyCustomFont-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
    'MyCustomFont-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={LogIn} options={{headerShown:false}} />
        <Stack.Screen name="Dashbord" component={Home}  options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;