import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function Politica3() {
  const navigation = useNavigation();
  let animation = React.createRef()
  function startAnimation(){
    animation.current.play()
  }
  
  let [fontsLoaded] = useFonts({
   
    'playefair':require('../../assets/fonts/playefair.ttf'),
    'Lora':require('../../assets/fonts/Lora-Regular.ttf')
    
})



if (!fontsLoaded){
  return null
}
 
  
  return (
    <ScrollView style={{height:670}} showsVerticalScrollIndicator='false'>
    <View style={{height:1300,backgroundColor:'black'}}>
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/Petrobras.jpg')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>Petrobras (PETR4) recua forte com temor sobre estratégia sob governo Lula</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white'}}>  As ações da Petrobras (PETR4) recuavam fortemente, em meio a preocupações após o presidente Luiz Inácio Lula da Silva reforçar sua visão sobre o papel da companhia no desenvolvimento do país e revogar atos que dão andamento à privatização de uma série de estatais, entre elas a petrolífera.</Text>
          <Text style={{fontSize:22,alignItems:'center',color:'white',marginTop:20}}>  O ministro da Fazenda, Fernando Haddad, também afirmou nesta segunda-feira que Lula quer esperar a posse da nova diretoria da Petrobras para tomar uma decisão sobre combustíveis, uma indicação de que o novo governo poderia vincular ações da empresa com políticas de preços.

Haddad havia pedido ao governo anterior que deixasse vencer no dia 31 de dezembro a desoneração de impostos federais sobre combustíveis, mas uma das primeiras medidas do novo governo foi prorrogá-las, em meio a preocupações com impacto inflacionário.</Text>
        
        
           
           <View style={{flexDirection:'row'}}>
            
              <Image style={{height:64,width:64,marginTop:36}} source={require("../../assets/Design_sem_nome_1.png")}/>
            
            <TouchableOpacity  style={{marginLeft:25,marginTop:36}}onPress={() => navigation.navigate('Donate')}>
              <FontAwesome5  name='donate' text='Apoio'color='lightgreen'size={40}/>

              <Text style={{marginTop:5,color:'white'}}>Apoio</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={startAnimation} style={{alignItems:'center',marginLeft:90}}>
    
             
             <AnimatedLottieView
             
              source={require('../../assets/check.json')}
              style={{
                width:100,
                height:100,
                
                
              }}
              loop={false}
              ref={animation}
              />
              <Text style={{color:'white'}}>Gostei</Text> 
              
          </TouchableOpacity>
         
          
          
         
          
          </View>
        
        </View>
      
      
    </View>
  </ScrollView>
    );
}

