import React from 'react';
import { Text, View,Dimensions,StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

export default function Icons() {
    const navigation = useNavigation();
    return (
    <View style={{backgroundColor:'black'}}>
        <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
        
        <TouchableOpacity style={{alignItems:'center',marginBottom:40}} onPress={() => navigation.navigate('About')}>
                <FontAwesome5  name='users'  color='white'size={50}/>
                <Text style={{color:'white',fontSize:20,}}>Politica</Text>
          </TouchableOpacity>

         <TouchableOpacity style={{alignItems:'center', marginBottom:40}} onPress={() => navigation.navigate('Donate')}>
            <FontAwesome5  name='donate' text='Apoio'color='lightgreen'size={50}/>
            <Text style={{color:'white',fontSize:20,}}>Apoio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center'}}>
                    <FontAwesome5  name='paper-plane' text='Apoio'color='lightblue'size={50}/>
                    <Text style={{color:'white',fontSize:20,}}>Contate-nos</Text>
          </TouchableOpacity>
          <Image style={{height:"20%",width:'41%',marginTop:150}} source={require("../assets/Design_sem_nome_1.png")}/>
          <Text style={{color:'white',fontSize:35,marginTop:10}}>Expose News</Text>
          <Text style={{color:'white',fontSize:15,marginTop:10}}>Versão 1.0</Text>
   </View>
    </View>
   
  );
}