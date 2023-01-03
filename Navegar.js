import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, useNavigation,StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './paginas/Home'
import About from './paginas/About';
import Donate from './paginas/Donate';
import Politica from './noticias/Politica';

import Investimentos1 from './noticias/Paginas/Investimentos1';
import Icons from './paginas/Icones';
import Investimentos2 from './noticias/Paginas/Investimentos2';
import Investimentos3 from './noticias/Paginas/Investimentos3';
import NoticiasQ1 from './noticias/Paginas/NoticiasQ1';
import NoticiasQ2 from './noticias/Paginas/NoticiasQ2';
import NoticiasQ3 from './noticias/Paginas/NoticiasQ3';
import Politica1 from './noticias/Paginas/Politica1';
import Politica2 from './noticias/Paginas/Politica2';
import Politica3 from './noticias/Paginas/Politica3';



const Stack = createNativeStackNavigator();
export default function Navegar() {
    
    
 return (
   
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='About' component={About} options={{headerShown:false}}/>
        <Stack.Screen name='Donate' component={Donate} options={{headerShown:false}}/>
        <Stack.Screen name='Politica' component={Politica} options={{headerShown:false}}/>
        <Stack.Screen name='Icones' component={Icons} options={{headerShown:false}}/>
        <Stack.Screen name='Investimentos1' component={Investimentos1} options={{headerShown:false}}/>
        <Stack.Screen name='Investimentos2' component={Investimentos2} options={{headerShown:false}}/>
        <Stack.Screen name='Investimentos3' component={Investimentos3} options={{headerShown:false}}/>
        <Stack.Screen name='NoticiasQ1' component={NoticiasQ1} options={{headerShown:false}}/>
        <Stack.Screen name='NoticiasQ2' component={NoticiasQ2} options={{headerShown:false}}/>
        <Stack.Screen name='NoticiasQ3' component={NoticiasQ3} options={{headerShown:false}}/>
        <Stack.Screen name='Politica1' component={Politica1} options={{headerShown:false}}/>
        <Stack.Screen name='Politica2' component={Politica2} options={{headerShown:false}}/>
        <Stack.Screen name='Politica3' component={Politica3} options={{headerShown:false}}/>
    </Stack.Navigator>
        
  
  );
}