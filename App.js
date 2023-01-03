
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,StyleSheet,SafeAreaView } from 'react-native';

import Navegar from './Navegar';



export default function App() {
  
  return (
    <NavigationContainer>
      <SafeAreaView></SafeAreaView>
      <Navegar/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
