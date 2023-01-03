import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function Politica1() {
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
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/posse.jpg')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>Incerteza por desconfiança após prorrogação de subsídios e discursos de Lula</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white'}}> Os discursos de posse do petista subiram o tom contra políticas mais liberais e contra o mercado, com um clara defesa do Estado e das empresas públicas como indutores do desenvolvimento.
          Em sua fala ao Congresso, onde vários integrantes votaram a favor das reformas estruturais nos últimos anos, Lula disse “dilapidaram as estatais e os bancos públicos” e que “entregaram o patrimônio nacional”.  Ele ainda comentou que “os recursos do país foram rapinados para saciar a estupidez dos rentistas e de acionistas privados das empresas públicas.”
         
</Text>

<Text style={{fontSize:22,alignItems:'center',color:'white',marginTop:20}}> A medida deixou representantes do mercado preocupados. Para Rafaela Vitória, economista chefe do Banco Inter, Rafaela Vitória, isso mostra que “as difíceis decisões sobre o ajuste fiscal vão ficar para depois”. Em sua conta no Twitter, ela comentou que o impacto inflacionário do déficit fiscal é mais danoso no médio e longo prazo do que o aumento da inflação no curto prazo (motivado pela volta dos impostos). “Desancora expectativas e mantém o prêmio nos juros elevado”, afirmou.
         
</Text>
        
        
           
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

