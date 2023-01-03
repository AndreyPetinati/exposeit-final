import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity,Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Politica from '../noticias/Politica';

import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
  const navigation = useNavigation()
 
  let [fontsLoaded] = useFonts({
   
      'playefair':require('../assets/fonts/playefair.ttf')

    
  })
  if (!fontsLoaded){
    return null
  }
 return (
    <View style={{backgroundColor:'#0F0F0F'}}>
      
      <LinearGradient colors={['#5632e1','#6b43eb','#8053f5','#9563ff']} style={{height:'10%'}}> 
          <View style={styles.noticias}>
                 
                 <TouchableOpacity style={{marginLeft:25}} onPress={() => navigation.navigate('Icones')}>
                  <FontAwesome5  name='list' text='Apoio'color='white'size={35}/>
                  </TouchableOpacity>   
                    
                 <Text style={{fontSize:35,marginLeft:50}}>Expose News</Text>  
                   
                 
            </View>
       </LinearGradient> 
       
       
       
     

      <View >
        <Text style={styles.títuloApp}>Nosso objetivo é informar com qualidade e rapidez! </Text>
        
      </View>
          
        
      <View>
          <Politica/>
      </View>
       
       
        
       
       
      

        
       
    </View>
  
          
        
    
         
   
  );
   
   
}



const Icon = (props)=> (
    
    
    <View>
        <FontAwesome5  name={props.icon} size={34} style={{ alignSelf:"center",marginBottom:4,color:'white'}}/>
        <Text>{props.text}</Text>
    </View>
 
    
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icones:{
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#8d69fc',
        padding:8,
        borderRadius:20,
        
        
        
        
 
    },
    noticias:{
   
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center',
      marginTop:24,
      
      
      
     
      
      
    },
    títuloApp:{
      color:'white',
      fontSize:23,
      marginTop:20,
      margin:32,
      fontFamily:"playefair",
      

    },
    fire:{
      alignContent:"center",
      alignItems:"center",
      alignSelf:'center',
      marginLeft:5
      
      
      
    }
    
  });
  