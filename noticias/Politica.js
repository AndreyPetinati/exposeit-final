import React from 'react';
import {SafeAreaView, Image, Text, View,StyleSheet, TouchableOpacity,ScrollView, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Investimentos1 from './Paginas/Investimentos1';
import Investimento2 from './Paginas/Investimentos2'
import Investimento3 from './Paginas/Investimentos3'
import NoticiasQ1 from './Paginas/NoticiasQ1'
import NoticiasQ2 from './Paginas/NoticiasQ2'
import NoticiasQ3 from './Paginas/NoticiasQ3'
import Politica1 from './Paginas/Politica1'
import Politica2 from './Paginas/Politica2'
import Politica3 from './Paginas/Politica3'

export default function Politica() {
  const navigation = useNavigation();
  const Investimento1 = [ 'Renner, Cielo e Sul América vão pagar proventos em janeiro de 2023'];
  const Investimento2 = [ 'Fundos Imobiliários recomendados para 2023'];
  const Investimento3 = [ 'Apenas 3 ações da B3 devem pagar dividendos acima da Selic em 2023'];
  const NoticiasQ1 = ['China e Covid: Pequim critica regras políticas para seus turistas'];
  const NoticiasQ2 = ['Makiivka: Rússia aponta dedos após ataque mais mortal na Ucrânia'];
  const NoticiasQ3 = ['Estrangeiros agora proibidos de comprar casas no Canadá'];
  const Politica1 = [' Incerteza após prorrogação de subsídios e discursos de Lula'];
  const Politica2 = ['Lula faz “revogaço” e edita mais de 50 decretos e medidas provisórias'];
  const Politica3 = ['Petrobras (PETR4) recua forte com temor sobre estratégia sob governo Lula'];
  
  
 
  let [fontsLoaded] = useFonts({
   
    'playefair':require('../assets/fonts/playefair.ttf')
    
})



if (!fontsLoaded){
  return null
}
 
 return (
    
    <ScrollView style={{height:670}}>
      
      <View>
        <View style={{height:1200}}>
        
        <Text style={styles.subtitulos}>Notícias Quentes 🔥</Text>
          
          <ScrollView horizontal={true} style={{marginTop:0}}>
          
          <TouchableOpacity onPress={() => navigation.navigate('NoticiasQ1')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/covid.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{NoticiasQ1}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('NoticiasQ2')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/russia.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{NoticiasQ2}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('NoticiasQ3')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/canada.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{NoticiasQ3}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
            
          </ScrollView>
           
           <Text style={styles.subtitulos}>Política</Text>
          
          <ScrollView horizontal={true}>
           
          <TouchableOpacity onPress={() => navigation.navigate('Politica1')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/posse.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20}}>
            <Text style={{color:'#ffff'}}>{Politica1}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Politica2')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/correio.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{Politica2}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Politica3')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/Petrobras.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{Politica3}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
          </ScrollView>
          
          <Text style={styles.subtitulos}>Investimentos</Text>
         
          <ScrollView horizontal={true}>
           
          <TouchableOpacity onPress={() => navigation.navigate('Investimentos1')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/renner.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{Investimento1}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Investimentos2')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/fiis.jpg')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{Investimento2}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Investimentos3')}>
        <View style={{height:200,width:250,marginLeft:30,borderWidth:0.9,borderColor:'#ffff'}}>
    
          <View style={{flex:2}}>
            <Image style={{height:null,width:null,flex:1,resizeMode:'cover'}}source={require('../assets/imagens/klabin.png')}/>
          </View>
    
          <View style={{paddingLeft:15,paddingTop:15,paddingBottom:20,paddingRight:10}}>
            <Text style={{color:'#ffff'}}>{Investimento3}</Text>
          </View>
   
      </View>
    </TouchableOpacity>
          </ScrollView>
          

          <View style={{justifyContent:'center',flexDirection:'row',margin:50}}>
            <TouchableOpacity style={{margin:16}} onPress={() => navigation.navigate('Donate')}>
            <FontAwesome5  name='donate' text='Apoio'color='lightgreen'size={35}/>
            <Text style={{marginTop:5,color:'white'}}>Apoio</Text>
          </TouchableOpacity>
          
          <Image style={{height:80,width:80}} source={require("../assets/Design_sem_nome_1.png")}/>
          </View>
          

       

        </View>
      </View>

    </ScrollView>
   
  );
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    position:"absolute",
    justifyContent:'space-between'
    

  },
  imagens:{
    width:200,
    height:200,
  
  },
  titulos:{
    color:'white',
    
  },
  subtitulos:{
    color:'white',
    margin:32,
    fontFamily:"playefair",
    fontSize:22
  }
 
  
});