import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function Investimentos3() {
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
    <View style={{height:1500,backgroundColor:'black'}}>
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/klabin.png')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>Apenas 3 ações da B3 devem pagar dividendos acima da Selic em 2023</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white',marginBottom:20}}>Segundo o levantamento, a ação preferencial da Petrobras (PETR4) deve ser a campeã quando se trata em distribuir dividendos, com um dividend yield (DY) projetado em 68,32%, caso a empresa registre em 2022 um lucro superior ao de 2021 e mantenha a política de distribuição de dividendos em 2023 igual ou superior à de 2022. A ação ordinária é a segunda colocada, com 59,70%.</Text>
          <Text style={{fontSize:22,alignItems:'center',color:'white'}}>Bancos e papel e celulose em destaque
Na amostra com 22 papéis, dois setores se sobressaem: a lista tem quatro bancos e três companhias de papel e celulose. Os demais segmentos possuem duas ou uma ação. Segundo o estudo, do total, 17 ações têm potencial de entregar um retorno acima da mediana dos últimos cinco anos.</Text>
          <Text style={{fontSize:22,alignItems:'center',color:'white',marginTop:20}}>Ação	Ticker	DY projetado para 2023*
Petrobras	PETR4	68,32%
Petrobras	PETR3	59,70%
Metal Leve	LEVE3	13,66%
BB	BBAS3	11,99%
Ferbasa	FESA4	10,18%
CPFL	CPFE3	9,77%
Santos Brp	STBP3	8,44%
Engie Brasil	EGIE3	8,09%
Klabin	KLBN11	7,56%
Klabin	KLBN4	7,51%</Text>
        
        
           
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

