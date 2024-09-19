import React, { useEffect } from 'react';
import { I18nManager, StyleSheet, Text, View, StatusBar , SafeAreaView, TextStyle, StyleProp } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors, scale } from '../../config';
import LogIn from "../login/LogIn";
import Sales from "../sales/Sales";
import AddPrice from '../price/AddPrice';
import ActionFun from '../action/Action';

const Drawer = createDrawerNavigator();

// Define your custom styles
const headerTitleStyle: StyleProp<TextStyle> = StyleSheet.create({
    title: {
      fontFamily: 'MyCustomFont-Bold',
      fontSize: scale(14), 
      fontWeight: '600',
      color: Colors.White, 
      textAlign: 'right',
    },
  }).title;

  const Home: React.FC = () => {
  useEffect(() => {
    I18nManager.forceRTL(true);
  }, []);
    return(

            <Drawer.Navigator>
                <Drawer.Screen name="Sales" component={Sales} options={{
                    title:"الرئيسية",
                    drawerLabel:"Sales Label",
                    headerStyle: {
                        backgroundColor: Colors.Primary,
                        height: 100,
                      },
                      headerTintColor: Colors.White, 
                      headerTitleStyle,
                    }} />
                <Drawer.Screen name="Homes" component={LogIn} options={{title:"Dashbord" ,drawerLabel:"Dashbaord Label"}} />
                <Drawer.Screen name="Test" component={ActionFun} options={{
                    title:"الإجراءات",
                    drawerLabel:"Sales Label",
                    headerStyle: {
                        backgroundColor: Colors.Primary,
                        height: 100,
                      },
                      headerTintColor: Colors.White, 
                      headerTitleStyle,
                    }} />
            </Drawer.Navigator>
 
    );
}


export default Home;